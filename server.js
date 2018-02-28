var express = require('express');
var bodyParser = require('body-parser')
var app = express();
const creds = require("./credential.json");
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://" + creds.user + ":" + creds.pass + "@ds0" + creds.port + ".mlab.com:" + creds.port + "/" + creds.db;
console.log(url);
// Find some documents


function findRecetas(db, callback, ingredientes){
  const c = db.collection('RecetasPaTodos');
  console.log('haber k paza', ingredientes);
  c.find({'ingredientes': {$all:ingredientes}}).toArray((err, docs) => {
    if (err) throw err;

    callback(docs);
  })
}

function getRecetas(callback, ingredientes){
  MongoClient.connect(url, (err, client)=> {
    if (err) throw err;
    console.log("Connected successfully to server");
    const db = client.db('webdev');

    findRecetas(db, callback, ingredientes);
    client.close();
  });
}

function postReceta(db, callback, receta){
  const col = db.collection('RecetasPaTodos');
  col.save(receta, (err, r) =>{
    if (err) throw err;
    console.log(r);
    callback(receta)
  });
}

function postRe(callback, receta){
  MongoClient.connect(url, (err, client)=> {
    if (err) throw err;
    console.log("Connected successfully to server");
    const db = client.db('webdev');

    postReceta(db, callback, receta);
    client.close();
  });
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/getData', function (req, res) {
  getRecetas(function(tweets){
    console.log(req.body.ingredientes, 'que pasa aqui');
      res.send(tweets);
  }, req.body.ingredientes)
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/postReceta', (req, res) => {
    console.log(req.body);
    postRe(r => res.send(r), req.body)
})

app.use(express.static("public"));
app.get('/', function(req, res){

})

app.listen(3000, () => {
    console.log("Listening on :3000")
  });

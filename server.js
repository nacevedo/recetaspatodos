var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var api = express();
app.use("/api", api);
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
const creds = require("./credential.json");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://" + creds.user + ":" + creds.pass + "@ds0" + creds.port + ".mlab.com:" + creds.port + "/" + creds.db;
console.log(url);


function findRecetas(db, callback, ingredientes){
  const c = db.collection("RecetasPaTodos");
  if (ingredientes.length)
  {
    c.find({"ingredientes": {$all:ingredientes}}).toArray((err, docs) => {
      if (err) throw err;

      callback(docs);
    });
  }
  else{
    c.find().toArray((err, docs) => {
      if (err) throw err;

      callback(docs);
    });
  }
}

function getRecetas(callback, ingredientes){
  MongoClient.connect(url, (err, client)=> {
    if (err) throw err;
    console.log("Connected successfully to server");
    const db = client.db("webdev");

    findRecetas(db, callback, ingredientes);
    client.close();
  });
}

function postReceta(db, callback, receta){
  const col = db.collection("RecetasPaTodos");
  col.save(receta, (err, r) =>{
    if (err) throw err;
    console.log(r);
    callback(receta);
  });
}

function postRe(callback, receta){
  MongoClient.connect(url, (err, client)=> {
    if (err) throw err;
    console.log("Connected successfully to server");
    const db = client.db("webdev");

    postReceta(db, callback, receta);
    client.close();
  });
}


api.post("/getData", function (req, res) {
  console.log("getData");
  getRecetas(function(tweets){res.send(tweets);} , req.body.ingredientes);}
);


api.post("/postReceta", (req, res) => {
  console.log("entro");
  postRe(r => res.send(r), req.body);});

//app.use(express.static("public"));
api.get("/", function(req, res){
  console.log("api general");
  getRecetas(function(tweets){
    res.send(tweets);
  }, []);

});

app.listen(3001, () => {
  console.log("Listening on:");
});

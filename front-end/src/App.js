import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import ListaRecetas from "./components/ListaRecetas.js";
import SearchBox from "./components/SearchBox.js";
import FiltroIngredientes from "./components/FiltroIngredientes.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recetas: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch("/api")
      .then(res => res.json())
      .then(recetas => this.setState({ recetas: recetas }));
  }

  search(text) {
    this.setState({
      search: text
    });
  }

  ingredients(lista) {
    let data = { ingredientes: lista };
    fetch("/api/getData", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(function(res) {
        return res.json();
      })
      .then(recetas => this.setState({ recetas: recetas }));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="con">
          <br />
          <br />
          <div className="row">
            <ListaRecetas
              recetas={this.state.recetas.filter(r => {
                return r.nombre
                  .toLowerCase()
                  .startsWith(this.state.search.toLowerCase());
              })}
            />
            <div className="col-md-3">
              <SearchBox search={this.search.bind(this)} />
              <br />
              <FiltroIngredientes ingredients={this.ingredients.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

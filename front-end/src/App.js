import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {recetas:[]}

  componentDidMount(){
    fetch('/api')
    .then(res => res.json())
    .then(recetas => this.setState({"recetas": recetas}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1> Lista de recetas</h1>
        {this.state.recetas.map(receta =>
          <div key={receta._id}>{receta.nombre}</div>
        )}
      </div>
    );
  }
}

export default App;

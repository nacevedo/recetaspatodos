import React from "react";
//Nicolás Acevedo: Revisar el filtro por ingredientes ya que en la versión desplegada en Heroku no esta funcionando correctamente. 
class FiltroIngredientes extends React.Component {
  constructor() {
    super();
    this.state = { ingredientes: [] };
  }

  botonAgregar() {
    let a = document.getElementById("ingredientes");
    console.log(a.value);
    let nueva = this.state.ingredientes;
    nueva.push(a.value);
    a.value = "";
    this.setState({ ingredientes: nueva });
  }

  botonBorrar() {
    let nueva = this.state.ingredientes;
    nueva.pop();
    this.setState({ ingredientes: nueva });
  }

  key(id) {
    let a = new Date();
    return id + a.getTime();
  }

  buscar() {
    console.log(this.state.ingredientes, "imprime");

    this.props.ingredients(this.state.ingredientes);
  }

  render() {
    return (
      <div>
        <h4>Ingredientes</h4>
        <div className="input-group">
          <input
            type="text"
            id="ingredientes"
            className="form-control form-control-sm"
            placeholder="Ingrediente"
            aria-label="ingrediente"
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.botonAgregar.bind(this)}
          >
            Agregar
          </button>
        </div>
        <div>
          <ul className="list-group text-center">
            {this.state.ingredientes.map(i => (
              <li
                key={this.key(i)}
                className="list-group-item list-group-item-info"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
        <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.buscar.bind(this)}
        >
          Buscar
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.botonBorrar.bind(this)}
        >
          Borrar
        </button>
      </div>
    );
  }
}
export default FiltroIngredientes;

import React from "react";
//Cuando se hace un segundo formualro no sale la infromación de este. Además si la imagen no es puesta correctamte no se puede ver la infomación detallada de la receta.
class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      author: "",
      email: "",
      nombre: "",
      ingredientes: [],
      explicacion: "",
      categoria: "",
      imagen: "",
      esVeg: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.id);
    let name = event.target.id;
    let value = event.target.value;
    if (event.target.id == "esVeg") value = event.target.checked;
    else if (event.target.id == "ingredientes")
      value = event.target.value.split(",");
    this.setState({ [name]: value });
  }

  post() {
    fetch("/api/postReceta", {
      body: JSON.stringify(this.state),
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    }).then(function(res) {
      if (res.status == 200) alert("se ha agregado correctamente");
      else alert("Oh oh, ha ocurrido un error, por favor intentalo de nuevo");
      console.log(res);
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    alert("se esta enviando la informacion, espere a la siguiente alerta de confirmación");
    this.post();
    event.preventDefault();
    this.setState({
      author: "",
      email: "",
      nombre: "",
      ingredientes: "",
      explicacion: "",
      categoria: "",
      imagen: "",
      esVeg: false
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Agrega una receta</h1>
        <h3>De esta manera nos ayudas a crecer</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="autor">Autor</label>
            <input
              value={this.state.author}
              type="text"
              className="form-control"
              id="author"
              placeholder="Juan Sebastian Prieto"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={this.state.email}
              type="email"
              className="form-control"
              id="email"
              placeholder="js.prieto10@uniandes.edu.co"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              value={this.state.nombre}
              type="text"
              className="form-control"
              id="nombre"
              placeholder="Mango con sal"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ingredientes">Ingredientes</label>
            <input
              value={this.state.ingredientes}
              type="text"
              className="form-control"
              id="ingredientes"
              aria-describedby="ingre"
              placeholder="mango,limon,sal,vinagre,pimienta"
              onChange={this.handleChange}
              required
            />
            <small id="ingre" className="form-text text-muted">
              Lo ingredientes deben ser ingresados separados por comas
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="explicacion">Explicacion de la preparacion</label>
            <textarea
              value={this.state.explicacion}
              className="form-control"
              id="explicacion"
              rows="3"
              aria-describedby="ingre"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="categoria">Categoria</label>
            <select
              className="form-control"
              id="categoria"
              onChange={this.handleChange}
            >
              <option value="postre">Postre</option>
              <option value="fuerte">Plato fuerte</option>
              <option value="ensalada">Ensalada</option>
              <option value="sopa">Sopa</option>
              <option value="entrada">Entrada</option>
              <option value="desayuno">Desayuno</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="imagen">Imagen</label>
            <input
              value={this.state.imagen}
              type="text"
              className="form-control"
              id="imagen"
              aria-describedby="img"
              placeholder="https://image.ibb.co/d2dR2n/Mango_Verde_5.jpg"
              onChange={this.handleChange}
              required
            />
            <small id="img" className="form-text text-muted">
              se debe subir el link de la url, puedes usar una pagina como esta{" "}
              <a href="https://es.imgbb.com/">https://es.imgbb.com/</a>
            </small>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              value={this.state.esVeg}
              id="esVeg"
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="esVeg">
              Vegetariano
            </label>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </form>
      </div>
    );
  }
}
export default Post;

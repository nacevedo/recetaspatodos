import React from "react";

class Receta extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      author: props.author,
      email: props.email,
      nombre: props.nombre,
      ingredientes: props.ingredientes,
      explicacion: props.explicacion,
      categoria: props.categoria,
      imagen: props.imagen,
      esVeg: props.esVeg
    };
  }
  render() {
    return <h1>Hola</h1>;
  }
}

export default Receta;
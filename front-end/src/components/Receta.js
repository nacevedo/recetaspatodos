import React from "react";

class Receta extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      author: "",
      email: "",
      nombre: "",
      ingredientes: [],
      explicacion: "",
      categoria: "",
      imagen: "",
      esVeg: ""
    };
  }

  componentDidMount(){
    console.log(this.props._id);
    this.setState({
      id: this.props.receta._id,
      author: this.props.receta.author,
      email: this.props.receta.email,
      nombre: this.props.receta.nombre,
      ingredientes: this.props.receta.ingredientes,
      explicacion: this.props.receta.explicacion,
      categoria: this.props.receta.categoria,
      imagen: this.props.receta.imagen,
      esVeg: this.props.receta.esVeg
    });
  }

  render() {
    return (
      <div key={this.state.id} className="col-md-4">
        <p>{this.nombre}</p>
        <img src={this.state.imagen} alt="" width="100%" height="200px" />
      </div>
    );
  }
}

export default Receta;

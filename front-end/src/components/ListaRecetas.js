import React from "react";
import Modal from "react-responsive-modal";

class ListaRecetas extends React.Component {

  constructor () {
    super()
    this.state = {
      open: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal (id) {
    this.setState({
       open: {
          [id]: true
       }
    });
 }

  onCloseModal = () => {
    this.setState({ open: false });
  };


  render() {
    const {open} = this.state;
    let a = this.props.recetas;
    if (a.length>9)
      a.length=9;
    return (
      <div className="col-md-9">
        <div className="row">
          {a.map(r => (
            <div key={r._id} className="col-md-4">          
              <img src={r.imagen} onClick={this.openModal.bind(this, r._id)} alt="" width="100%" height="200px" />
              <p>{r.nombre}</p>
              <Modal  open={this.state.open[r._id]} onClose={this.onCloseModal}>

          <h1 className= "mod">{r.nombre}</h1>
          <div className="row">
            <div className="col-md-6">
               <h3> Ingredientes </h3>
                {r.ingredientes.map((o,i) => {
                 return <li className="ingr" key={i}> {o} </li>
                })}
            </div>
            <div className="col-md-6">
              <h3> Descripción </h3>
                <p className="desc"> {r.explicacion} </p>
            </div>
          </div>
        </Modal> 
            </div>
          ))}

          
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}

export default ListaRecetas;

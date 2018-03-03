import React from "react";

class ListaRecetas extends React.Component {


  render() {
    let a = this.props.recetas;
    if (a.length>9)
      a.length=9;
    return (
      <div className="col-md-9">
        <div className="row">
          {a.map(r => (
            <div key={r._id} className="col-md-4">
              <p>{r.nombre}</p>
              <img src={r.imagen} alt="" width="100%" height="200px" />
            </div>
          ))}
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}

export default ListaRecetas;

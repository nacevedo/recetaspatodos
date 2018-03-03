import React from "react";
import Receta from "./Receta.js";

class ListaRecetas extends React.Component {
  constructor() {
    super();
  }
  render() {
    let a = this.props.recetas;
    if (a.length > 9) a.length = 9;
    return (
      <div className="col-md-9">
        <div className="row">{a.map(r => <Receta key={r._id+r.nombre} receta={r} />)}</div>
      </div>
    );
  }
}

export default ListaRecetas;

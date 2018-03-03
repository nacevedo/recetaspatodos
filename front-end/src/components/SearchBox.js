import React from "react";

class SearchBox extends React.Component {

  onEnter(evt) {
    console.log(evt.target.value);

    this.props.search(evt.target.value);
  }

  render() {
    return (
      <div>
        <h4>Búsqueda</h4>
        <div className="input-group">
          <input
            type="text"
            id="nombre"
            className="form-control form-control-sm"
            placeholder="Nombre"
            aria-label="Nombre"
            onInput = {this.onEnter.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBox;

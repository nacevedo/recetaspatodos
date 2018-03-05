import React from "react";

class LoadingSpinner extends React.Component {
  render() {
    return (
      <div className="loading">
        <img
          src="https://image.jimcdn.com/app/cms/image/transf/none/path/se3ec4637ab2cb8e8/image/ib5621eeba886d70d/version/1474931581/image.gif"
          alt="imagen de espera"
          id="espera"
        />
      </div>
    );
  }
}

export default LoadingSpinner;

import React, { Component } from "react";

class ChonXe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/xe1.jpg",
    };
  }
  doiXe = (img) => {
    this.setState({
      img
    });
  };
  render() {
    return (
      <div className="w-50 mx-auto">
        <img className="img-fluid" src={this.state.img} alt="xe" />
        <div className="btn-group">
          <button
            className="btn btn-success"
            onClick={() => this.doiXe("./img/xe1.jpg")}
          >
            Xe 1
          </button>
          <button
            className="btn btn-primary"
            onClick={() => this.doiXe("./img/xe2.jpg")}
          >
            Xe 2
          </button>
          <button
            className="btn btn-info"
            onClick={() => this.doiXe("./img/xe3.jpg")}
          >
            Xe 3
          </button>
          <button
            className="btn btn-warning"
            onClick={() => this.doiXe("./img/xe4.jpg")}
          >
            Xe 4
          </button>
        </div>
      </div>
    );
  }
}
export default ChonXe;

import React, { Component } from "react";

class EventBinding extends Component {
  handleOnClick = (title) => {
    alert(title);
  };
  render() {
    return (
      <>
        {/* <button className="btn btn-success" onClick={this.handleOnClick}>
          Click
        </button> */}
        <button
          className="btn btn-success"
          onClick={this.handleOnClick.bind(this, "hahah")}
        >
          Click
        </button>

        <hr />
        {/* hàm nặc danh */}

        <button
          className="btn btn-primary"
          onClick={() => this.handleOnClick("ahahah")}
        >
          Click
        </button>
      </>
    );
  }
}
export default EventBinding;

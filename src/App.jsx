import React, { Component } from "react";
import "./App.css";


import DataBinding from "./components/data-binding/DataBinding";
import EventBinding from "./event-binding/EventBinding";
import RenderWithState from "./renderWithState/RenderWithState";
import ChonXe from "./ChonXe/ChonXe";
import RenderWithMap from "./renderWithMap/RenderWithMap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container text-center py-5">
          {/* <DataBinding /> */}
          {/* <EventBinding /> */}
          {/* <RenderWithState /> */}
          {/* <ChonXe /> */}
          <RenderWithMap />
        </div>
      </div>
    );
  }
}

export default App;

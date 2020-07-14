import React, { Component } from "react";
import "./App.css";

import DataBinding from "./components/data-binding/DataBinding";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container text-center py-5">
          <DataBinding />
        </div>
      </div>
    );
  }
}

export default App;

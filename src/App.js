import React, { Component } from "react";
import "./App.css";
import City from "./components/city";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ReactJS with APIs</h1>
        <City City="DALLAS" />
      </div>
    );
  }
}

export default App;

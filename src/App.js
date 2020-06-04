import React, { Component } from "react";
import "./App.css";
import City from "./components/city";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Turn City Name into zips</h1>
        <City> </City>
      </div>
    );
  }
}

export default App;

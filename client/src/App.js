import React from "react";
import axios from "axios";

import NavBar from "./components/NavBar";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data);
        this.setState = {
          players: res.data
        };
      })
      .catch(err => {
        console.log("error: ", err);
      });
  }
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;

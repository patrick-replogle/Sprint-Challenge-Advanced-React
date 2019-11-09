import React from "react";
import axios from "axios";

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
        <h1>something</h1>
      </div>
    );
  }
}

export default App;

import React from "react";
import axios from "axios";

import NavBar from "./components/NavBar";
import Players from "./components/Players";

import "./App.css";

class App extends React.Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  componentDidMount() {
    this._isMounted = true;
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({
          players: res.data
        });
      })
      .catch(err => {
        console.log("error: ", err);
      });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Players players={this.state.players} />
      </div>
    );
  }
}

export default App;

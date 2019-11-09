import React from "react";
import axios from "axios";

import NavBar from "./components/NavBar";
import Players from "./components/Players";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      players: []
    };
  }

  CancelToken = axios.CancelToken;
  source = this.CancelToken.source();
  abortController = new AbortController();

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players", {
        cancelToken: this.source.token
      })
      .then(res => {
        this.setState({
          players: res.data,
          isLoading: false
        });
      })
      .catch(err => {
        console.log("error: ", err);
      });
  }

  componentWillUnmount() {
    this.source.cancel("Operation canceled by the user.");
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Players
          players={this.state.players}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;

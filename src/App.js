import React, { Component } from "react";
import CircleSelector from "./CircleSelector/CircleSelector";
import Circles from "./Circles/Circles.jsx";
import "./App.css";

class App extends Component {
  state = {
    button: "1"
  };

  handleClicked = event => {
    this.setState({
      button: event
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            button={this.state.button}
            handleClicked={this.handleClicked}
          />
          <Circles
            button={this.state.button}
            handleClicked={this.handleClicked}
          />
        </main>
      </div>
    );
  }
}

export default App;

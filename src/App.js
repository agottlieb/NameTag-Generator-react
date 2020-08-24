import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";
class App extends Component {
  state = {
    names: ["William", "Rufus", "Morris", "Seymour", "Gladys"]
  };

  //event handler/lifecyle for mounting component
  componentDidMount() {
    var savedNamesString = localStorage.getItem("savedNames");
    if (savedNamesString) {
      var savedNames = JSON.parse(savedNamesString);
      this.setState({ names: savedNames });
    }
  }
  //event handler for saving names
  componentDidUpdate() {
    var savedNamesString = JSON.stringify(this.state.names);
    localStorage.setItem("savedNames", savedNamesString);
  }

  removeName = (clickedIndex) => {
    // to learn how the .filter method works, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    var filterCallback = (_, index) => index !== clickedIndex;
    var newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };
  //method to add name to list
  addName = (name) => {
    var newNames = [name, ...this.state.names];
    this.setState({ names: newNames });
  };

  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addName={this.addName} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;

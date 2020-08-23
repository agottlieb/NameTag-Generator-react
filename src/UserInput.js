import React, { Component } from "react";

class UserInput extends Component {
  state = {
    name: ""
  };

  //event handler for typing in name field
  updateName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = (event) => {
    //prevents refresh
    event.preventDefault();
    //adds the name to the list
    this.props.addName(this.state.name);
    //sets field back to empty string
    this.setState({ name: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new name here..."
          value={this.state.name}
          //event listener for name typing box
          onChange={this.updateName}
        />
        <input type="submit" value="Create Name Tag" />.
      </form>
    );
  }
}

export default UserInput;

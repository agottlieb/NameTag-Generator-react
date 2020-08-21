import React, { Component } from "react";

class UserInput extends Component {
  state = {
    name: ""
  };

  //event handler for typing in name field
  updateName = (event) => {
    this.setState({ name: event.target.value });
  };
  //prevent page from refreshing when name is inputed
  handleSubmit = (event) => {
    //prevents refresh
    event.preventDefault();
    //sets field back to empty string
    this.setState({ name: "" });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Add a new name here..."
          value={this.state.name}
          /*event listener for name typing box*/
          onChange={this.updateName}
        />
        <input
          type="submit"
          value="Create Name Tag"
          //event listener for submit button
          onSubmit={this.handleSubmit}
        />
        .
      </form>
    );
  }
}

export default UserInput;

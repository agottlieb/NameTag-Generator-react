import React, { Component } from "react";

class UserInput extends Component {
  state = {
    name: ""
  };

  //event handler for typing in name field
  updateName = (event) => {
    this.setState({ name: event.target.value });
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
        <input type="submit" value="Create Name Tag" />.
      </form>
    );
  }
}

export default UserInput;

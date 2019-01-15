//@ flow
import React from "react";

export default class User extends React.Component {
  state = {
    username: "Juan"
  };
  render() {
    let { username } = this.state;
    let regex = /welcome \w+/;
    return <span>${regex.match(username)}</span>;
  }
}

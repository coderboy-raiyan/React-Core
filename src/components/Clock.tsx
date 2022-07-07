import { Component } from "react";

export default class Clock extends Component {
  render() {
    return (
      <div>
        <h1>{new Date().toLocaleTimeString()}</h1>
      </div>
    );
  }
}

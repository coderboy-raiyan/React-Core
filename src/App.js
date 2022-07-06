import { Component } from "react";
import Intro from "./components/Intro";

export default class App extends Component {
  constructor(state) {
    super(state);
  }
  render() {
    return <Intro local="bd-BN" />;
  }
}

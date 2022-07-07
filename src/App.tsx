import Clock from "components/Clock";
import { Component } from "react";
import "styles/App.scss";

export default class App extends Component {
  render() {
    return <Clock locale="bn-BD" />;
  }
}

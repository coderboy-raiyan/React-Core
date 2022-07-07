import { Component } from "react";

type ClockProps = {
  locale: string;
};
export default class Clock extends Component<ClockProps> {
  render() {
    return (
      <div>
        <h1>{new Date().toLocaleTimeString(this.props.locale)}</h1>
      </div>
    );
  }
}

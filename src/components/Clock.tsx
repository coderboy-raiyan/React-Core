import { Component } from "react";

type ClockProps = {
  locale: string;
};
export default class Clock extends Component<ClockProps> {
  constructor(props: ClockProps) {
    super(props);
  }
  clockTime: any;
  state: any = {
    date: new Date(),
  };

  componentDidMount() {
    this.clockTime = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTime);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-6xl font-semibold">
          {this.state.date.toLocaleTimeString(this.props.locale)}
        </h1>
      </div>
    );
  }
}

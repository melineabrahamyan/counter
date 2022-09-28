import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleIncrease = () => {
    const newCount = this.state.count + this.props.step;
    if (newCount <= this.props.maxValue) {
      this.setState({ count: this.state.count + this.props.step });
    }
  };
  handleDecrease = () => {
    const newCount = this.state.count - this.props.step;
    if (newCount >= this.props.minValue) {
      this.setState({ count: this.state.count - this.props.step });
    }
  };
  handlReset = () => {
    this.setState({ count: 0 });
    this.props.resetClicked();
  };

  componentDidUpdate() {
    localStorage.setItem("count", JSON.stringify(this.state));
  }

  componentDidMount() {
    const newCount = localStorage.getItem("count");
    if (newCount) {
      this.setState(JSON.parse(newCount));
    }
  }

  render() {
    const { count } = this.state;
    const { set } = this.props;
    return (
      <div className="counter-field">
        <button
          className="add-sub"
          disabled={!set}
          onClick={this.handleIncrease}
        >
          +
        </button>
        <span className="count">Count: {count}</span>
        <button
          className="add-sub"
          disabled={!set}
          onClick={this.handleDecrease}
        >
          -
        </button>
        <button disabled={!set} onClick={this.handlReset}>
          Reset
        </button>
      </div>
    );
  }
}

import { Component } from "react";
import Counter from "./components/counter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      maxValue: null,
      minValue: null,
      step: null,
      set: false,
    };
  }

  isValid = (value) => {
    return typeof value === "number" && !isNaN(value);
  };
  handleMaxValue = (e) => {
    const value = Number(e.target.value);
    if (this.isValid(value)) {
      this.setState({
        maxValue: value,
      });
    } else {
      alert("input must be a positive number");
    }
  };
  handleMinValue = (e) => {
    const value = Number(e.target.value);
    if (this.isValid(value)) {
      this.setState({
        minValue: value,
      });
    } else {
      alert("input must be a positive number");
    }
  };
  handleStep = (e) => {
    const value = Number(e.target.value);
    if (this.isValid(value)) {
      this.setState({
        step: value,
      });
    } else {
      alert("input must be a positive number");
    }
  };

  handleClick = () => {
    this.setState({ set: true });
  };

  resetClicked = () => {
    this.setState({ maxValue: null, minValue: null, step: null, set: false });
  };

  render() {
    const { maxValue, minValue, step, set } = this.state;
    return (
      <>
        <input
          onChange={this.handleMaxValue}
          type="text"
          placeholder="maximum value"
        />
        <input
          onChange={this.handleMinValue}
          type="text"
          placeholder="minimum value"
        />
        <input onChange={this.handleStep} type="text" placeholder="step" />
        <button
          disabled={!(maxValue && minValue && step)}
          onClick={this.handleClick}
        >
          Set Values
        </button>

        <Counter
          maxValue={maxValue}
          minValue={minValue}
          step={step}
          set={set}
          resetClicked={this.resetClicked}
        />
      </>
    );
  }
}

export default App;

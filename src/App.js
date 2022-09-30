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

  handleMaxValue = (e) => {
    const value = Number(e.target.value);

    this.setState({
      maxValue: value,
    });
  };
  handleMinValue = (e) => {
    const value = Number(e.target.value);

    this.setState({
      minValue: value,
    });
  };
  handleStep = (e) => {
    const value = Number(e.target.value);

    this.setState({
      step: value,
    });
  };

  handleClick = () => {
    if (!this.state.minValue) {
      this.setState({ minValue: "0" });
    }
    this.setState({ set: true });
  };

  resetClicked = () => {
    this.setState({ maxValue: null, minValue: null, step: null, set: false });
  };

  componentDidMount() {
    const newData = localStorage.getItem("state");
    if (newData) {
      this.setState(JSON.parse(newData));
    }
  }

  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state));
  }

  // componentWillUnmount() {
  //   localStorage.setItem("state", JSON.stringify(this.state));
  // }

  render() {
    const { maxValue, minValue, step, set } = this.state;
    return (
      <div className="container">
        <div className="input-field">
          <input
            value={maxValue || ""}
            onChange={this.handleMaxValue}
            type="number"
            placeholder="maximum value"
          />
          <input
            value={minValue || ""}
            onChange={this.handleMinValue}
            type="number"
            placeholder="minimum value"
          />
          <input
            value={step || ""}
            onChange={this.handleStep}
            type="number"
            placeholder="step"
          />
          <button disabled={!(maxValue && step)} onClick={this.handleClick}>
            Set Values
          </button>
        </div>
        <Counter
          maxValue={maxValue}
          minValue={minValue}
          step={step}
          set={set}
          resetClicked={this.resetClicked}
        />
      </div>
    );
  }
}

export default App;

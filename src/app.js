import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      increment: 1,
      plus: "+",
      minus: "-"
    };
  }
  countPlus = () => {
    let addToCount = this.state.count;
    let amountAdded = this.state.increment;
    addToCount += amountAdded;
    this.setState({
      count: addToCount
    });
  };

  countMinus = () => {
    let minusToCount = this.state.count;
    let amountSubtracted = this.state.increment;
    minusToCount -= amountSubtracted;
    this.setState({
      count: minusToCount
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Counter:</h2>
        <p>{this.state.count}</p>
        <button onClick={this.countPlus}>{this.state.plus}</button>
        <button onClick={this.countMinus}>{this.state.minus}</button>
      </React.Fragment>
    );
  }
}

module.exports = Counter;

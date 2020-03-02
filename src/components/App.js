/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
/* eslint arrow-parens: 0 */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculated from './logic/calculate';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: '',
      value: '',
      total: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ButtonName) {
    this.setState((state) => Calculated(state, ButtonName));
  }

  render() {
    const displayNumber = this.state.value === '' ? this.state.total : this.state.value;
    const displayString = displayNumber.toString();
    const operator = this.state.operation !== '' ? `${this.state.total}  ${this.state.operation} ${this.state.value}` : displayString;
    return (
      <div id="calculator-container">
        <div><h1 id="title">Simple Calculator</h1></div>
        <div id="component-container">
          <div id="display-container"><Display result={operator} /></div>
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;

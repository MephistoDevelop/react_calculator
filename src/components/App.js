/* eslint-disable react/no-unused-state */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
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
    console.log(`Button :${ButtonName}`);
    this.setState((state) => Calculated(state, ButtonName));
  }

  render() {
    return (
      <div id="calculator-container">
        <Display result="10" />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;

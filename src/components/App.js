/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from './logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
      operarion: null,
    };
  }

  this.handleClick = this.handleClick.bind(this);

  handleClick(ButtonName){
    this.setState(state => Calculate(state,ButtonName));
  }
  render() {
    return (
      <div id="calculator-container">
        <Display result="10" />
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  }
}

export default App;

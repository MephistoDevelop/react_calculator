/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Display from './Display';
import ButtonPanel from './Buttons';

class App extends React.Component {
  render() {
    return (
      <div id="calculator-container">
        <Display result="10" />
        <div id="group-1">
          <ButtonPanel buttonName="AC" Color="rgba(125,125,125,0.3)" />
          <ButtonPanel buttonName="+/-" Color="rgba(125,125,125,0.3)" />
          <ButtonPanel buttonName="%" Color="rgba(125,125,125,0.3)" />
          <ButtonPanel buttonName="+" />
        </div>
        <div id="group-2">
          <ButtonPanel buttonName="7" Color="rgba(125,125,125,0.3)" />
          <ButtonPanel buttonName="8" Color="rgba(125,125,125,0.3)" />
          <ButtonPanel buttonName="9" Color="rgba(125,125,125,0.3)" />
          <ButtonPanel buttonName="X" />
        </div>
        <div id="group-3">
          <ButtonPanel buttonName="4" Color="rgba(125,125,125,0.3)" />
          <ButtonPanel buttonName="5" Color="rgba(125,125,125,0.3)" />
          <ButtonPanel buttonName="6" Color="rgba(125,125,125,0.3)" />
          <ButtonPanel buttonName="-" />
        </div>
        <div id="group-4">
          <ButtonPanel buttonName="1" Color="rgba(125,125,125,0.3)" />
          <ButtonPanel buttonName="2" Color="rgba(125,125,125,0.3)" />
          <ButtonPanel buttonName="3" Color="rgba(125,125,125,0.3)" />
          <ButtonPanel buttonName="+" />
        </div>
        <div id="group-5">
          <ButtonPanel buttonName="0" Color="rgba(125,125,125,0.3)" Width />
          <ButtonPanel buttonName="." Color="rgba(125,125,125,0.3)" />
          <ButtonPanel buttonName="=" />
        </div>
      </div>
    );
  }
}

export default App;

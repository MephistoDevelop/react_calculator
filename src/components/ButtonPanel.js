/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import Button from './button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  render() {
    return (
      <div>
        <div id="group-1">
          <Button name="AC" Color="gray" handleClick={this.handleClick} />
          <Button name="+/-" Color="gray" handleClick={this.handleClick} />
          <Button name="%" Color="gray" handleClick={this.handleClick} />
          <Button name="+" handleClick={this.handleClick} />
        </div>
        <div id="group-2">
          <Button name="1" Color="gray" handleClick={this.handleClick} />
          <Button name="2" Color="gray" handleClick={this.handleClick} />
          <Button name="3" Color="gray" handleClick={this.handleClick} />
          <Button name="-" handleClick={this.handleClick} />
        </div>
        <div id="group-3">
          <Button name="4" Color="gray" handleClick={this.handleClick} />
          <Button name="5" Color="gray" handleClick={this.handleClick} />
          <Button name="6" Color="gray" handleClick={this.handleClick} />
          <Button name="/" handleClick={this.handleClick} />
        </div>
        <div id="group-4">
          <Button name="7" Color="gray" handleClick={this.handleClick} />
          <Button name="8" Color="gray" handleClick={this.handleClick} />
          <Button name="9" Color="gray" handleClick={this.handleClick} />
          <Button name="*" handleClick={this.handleClick} />
        </div>
        <div id="group-5">
          <Button name="0" Color="gray" Width handleClick={this.handleClick} />
          <Button name="." Color="gray" handleClick={this.handleClick} />
          <Button name="=" Color="gray" handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;

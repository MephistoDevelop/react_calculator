/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import Button from './button';

const ButtonPanel = () => (
  <div>
    <div id="group-1">
      <Button name="AC" Color="gray" />
      <Button name="+/-" Color="gray" />
      <Button name="%" Color="gray" />
      <Button name="+" />
    </div>
    <div id="group-2">
      <Button name="1" Color="gray" />
      <Button name="2" Color="gray" />
      <Button name="3" Color="gray" />
      <Button name="+" />
    </div>
    <div id="group-3">
      <Button name="4" Color="gray" />
      <Button name="5" Color="gray" />
      <Button name="6" Color="gray" />
      <Button name="+" />
    </div>
    <div id="group-4">
      <Button name="7" Color="gray" />
      <Button name="8" Color="gray" />
      <Button name="9" Color="gray" />
      <Button name="+" />
    </div>
    <div id="group-5">
      <Button name="0" Color="gray" Width />
      <Button name="." Color="gray" />
      <Button name="=" Color="gray" />
    </div>
  </div>
);

export default ButtonPanel;

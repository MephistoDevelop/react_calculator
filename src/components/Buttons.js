/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react';

const ButtonPanel = () => {
  const styles = { backgroundColor: 'white', width: '25%' };


  return (
    <div>
      <div id="group-1">
        <button type="button" style={styles}>AC</button>
        <button type="button" style={styles}>+/-</button>
        <button type="button" style={styles}>%</button>
        <button type="button" style={styles}>+</button>
      </div>
      <div id="group-2">
        <button type="button" style={styles}>1</button>
        <button type="button" style={styles}>2</button>
        <button type="button" style={styles}>3</button>
        <button type="button" style={styles}>-</button>
      </div>
      <div id="group-3">
        <button type="button" style={styles}>4</button>
        <button type="button" style={styles}>5</button>
        <button type="button" style={styles}>6</button>
        <button type="button" style={styles}>*</button>
      </div>
      <div id="group-4">
        <button type="button" style={styles}>7</button>
        <button type="button" style={styles}>8</button>
        <button type="button" style={styles}>9</button>
        <button type="button" style={styles}>/</button>
      </div>
      <div id="group-5">
        <button type="button" style={styles}>0</button>
        <button type="button" style={styles}>.</button>
        <button type="button" style={styles}>=</button>
      </div>
    </div>
  );
};
ButtonPanel.defaultProps = {
  name: 'Mephisto',
  Color: 'Orange',
  Width: false,
};

export default ButtonPanel;

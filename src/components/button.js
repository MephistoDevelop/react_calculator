/* eslint-disable react/prop-types */

/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Button = props => {
  const ButtonName = props.name;
  return (
    <input type="button" className="button" value={ButtonName} />
  );
};


export default Button;

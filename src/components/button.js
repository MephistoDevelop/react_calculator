/* eslint-disable react/prop-types */

/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const ButtonName = props.name;
  return (
    <input type="button" className="button" value={ButtonName} />
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};


export default Button;

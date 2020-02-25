/* eslint-disable react/prop-types */

/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';


const Button = (props) => {
  const ButtonName = props.name;
  const { handleClick } = props;
  let styles = { };

  if (props.Width) {
    styles = { backgroundColor: props.Color, width: '50%' };
  } else {
    styles = { backgroundColor: props.Color, width: '25%', heigth: '100px' };
  }
  const clickHandler = () => {
    handleClick(ButtonName);
  };
  return (
    <input type="button" className="button" onClick={clickHandler} style={styles} value={ButtonName} />
  );
};

Button.defaultProps = {
  Color: 'Orange',
  Width: false,
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  Color: PropTypes.string,
  Width: PropTypes.bool,
};


export default Button;

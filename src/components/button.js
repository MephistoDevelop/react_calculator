/* eslint-disable react/prop-types */

/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';


const Button = (props) => {
  const ButtonName = props.name;
  const { handleClick } = props;
  let styles = { };

  if (props.Width) {
    styles = { backgroundColor: props.Color, width: '30%' };
  } else {
    styles = { backgroundColor: props.Color, width: '15%', heigth: '100px' };
  }
  const clickHandler = () => {
    handleClick(ButtonName);
  };
  if (props.name === '0') {
    return (
      <input id="btn-zero" type="button" className="button" onClick={clickHandler} style={styles} value={ButtonName} />
    );
  }
  return (
    <input type="button" className="button" onClick={clickHandler} style={styles} value={ButtonName} />
  );
};

Button.defaultProps = {
  Color: 'white',
  Width: false,
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  Color: PropTypes.string,
  Width: PropTypes.bool,
};


export default Button;

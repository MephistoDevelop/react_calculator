/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ButtonPanel = ({ buttonName, Color, Width }) => {
  const ButtonName = buttonName;
  let styles = { backgroundColor: Color, width: Width };
  if (Width) {
    styles = { backgroundColor: Color, width: '209%' };
  }

  return (
    <button type="button" style={styles}>{ButtonName}</button>
  );
};
ButtonPanel.defaultProps = {
  Color: 'Orange',
  Width: false,
};
ButtonPanel.propTypes = {
  buttonName: PropTypes.string.isRequired,
  Color: PropTypes.string.isRequired,
  Width: PropTypes.bool.isRequired,
};

export default ButtonPanel;

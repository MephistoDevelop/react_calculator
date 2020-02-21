import React from 'react';
import PropTypes from 'prop-types';

const ButtonPanel = ({ buttonName }) => {
  const ButtonName = buttonName;
  return (
    <div>
      <button type="button">{ButtonName}</button>
    </div>
  );
};

ButtonPanel.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default ButtonPanel;

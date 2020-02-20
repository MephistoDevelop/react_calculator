import React from 'react';
import PropTypes from 'prop-types';

const ButtonPanel = (props) =>{
  const ButtonName = props.buttonName;
  return(
    <div>
      <button>{ButtonName}</button>
    </div>
  );
}

ButtonPanel.propTypes = {
  buttonName: PropTypes.string
}

export default ButtonPanel;
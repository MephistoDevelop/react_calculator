/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (
    <div id="result-container">
      <p id="text-result">{result}</p>
    </div>
  );
};

Display.defaultProps = {
  result: '0',
};
Display.propTypes = {
  result: PropTypes.string,
};
export default Display;

/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div id="result-container">
      <h3>
        Im Display Result Component:
        {result}
      </h3>
    </div>
  );
};

Display.defaultProps = {
  result: 0,
};
Display.propTypes = {
  result: PropTypes.string,
};
export default Display;

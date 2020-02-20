import React from 'react';

class Display extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
    <div>
      <h3>Im Display Component</h3>
    </div>);
  }
}

Display.defaultProps = {
  result: 0
};
export default Display;
import React from 'react';
import Display from './Display.js';
import ButtonPanel from './Buttons.js';

class App extends React.Component{

  render() {
    return(
      <div>
        <Display result ='10'/>
        <div id="group-1">
          <ButtonPanel buttonName="AC"/>
          <ButtonPanel buttonName="+/-"/>
          <ButtonPanel buttonName="%"/>
          <ButtonPanel buttonName="+"/>
        </div>
        <div id="group-2">
          <ButtonPanel buttonName="7"/>
          <ButtonPanel buttonName="8"/>
          <ButtonPanel buttonName="9"/>
          <ButtonPanel buttonName="X"/>
        </div>
        <div id="group-3">
          <ButtonPanel buttonName="4"/>
          <ButtonPanel buttonName="5"/>
          <ButtonPanel buttonName="6"/>
          <ButtonPanel buttonName="-"/>
        </div>
        <div id="group-4">
          <ButtonPanel buttonName="1"/>
          <ButtonPanel buttonName="2"/>
          <ButtonPanel buttonName="3"/>
          <ButtonPanel buttonName="+"/>
        </div>
        <div id="group-5">
          <ButtonPanel buttonName="0"/>
          <ButtonPanel buttonName="."/>
          <ButtonPanel buttonName="="/>
          <ButtonPanel buttonName=""/>
        </div>
      </div>
    );
  }
}

export default App;
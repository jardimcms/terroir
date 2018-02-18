import React from 'react';
import ReactDOM from 'react-dom';
import Reboot from 'material-ui/Reboot';
import Terroir from '../src/index.js';
import terroirs from './terroirs';

import './demo.css';

const TerroirDemo = () => (
  <div className='terroir-demo'>
    <Reboot/>
    <h1 className='terroir-demo__title'>Welcome to the Terroir Demo</h1>
    <Terroir terroirs={terroirs}/>
  </div>
);

ReactDOM.render(
  <TerroirDemo/>,
  document.getElementById('demo')
);
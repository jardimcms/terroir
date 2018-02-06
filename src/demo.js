import React from 'react';
import ReactDOM from 'react-dom';
import Terroir from './main.js';
import Reboot from 'material-ui/Reboot';
import Button from 'material-ui/Button';

ReactDOM.render(
  <div>
    <Reboot />
    <h1>Welcome to the Terroir Demo</h1>
    <Terroir />
    <Button variant="raised" color="primary">
      Material Button
    </Button>
  </div>,
  document.getElementById('demo')
);
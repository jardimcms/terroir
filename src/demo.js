import React from 'react';
import ReactDOM from 'react-dom';
import Reboot from 'material-ui/Reboot';
import Button from 'material-ui/Button';
import Terroir from './main.js';

const Demo = () => (
  <div>
    <Reboot />
    <h1>Welcome to the Terroir Demo</h1>
    <Terroir />
    <Button variant="raised" color="primary">
      Material Button
    </Button>
  </div>
);

ReactDOM.render(
  <Demo />,
  document.getElementById('demo')
);
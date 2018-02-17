import React from 'react';
import ReactDOM from 'react-dom';
import Reboot from 'material-ui/Reboot';
import Terroir from '../src/index.js';

import './demo.css';

const terroirs = [
  {
    name: 'Área Lateral Esquerda',
    description: 'Área de destaques da esquerda.',
    plugins: [],
    components: []
  }
];

const Demo = () => (
  <div className='terroir-demo'>
    <Reboot />
    <h1 className='terroir-demo__title'>Welcome to the Terroir Demo</h1>
    <Terroir terroirs={terroirs} />
  </div>
);

ReactDOM.render(
  <Demo />,
  document.getElementById('demo')
);
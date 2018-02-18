import React from 'react';
import PropTypes from 'prop-types';

import './Terroir.css';

const Terroir = ({ terroir }) => (
  <div className='terroir'>
    <div className='terroir__head'>
      <h2 className='terroir__head__name' alt={terroir.description} title={terroir.description}>
        {terroir.name}
      </h2>
    </div>
    <div className='terroir__toolbar'>
    </div>
  </div>
);

Terroir.propTypes = {
  terroir: PropTypes.object
};

export default Terroir;
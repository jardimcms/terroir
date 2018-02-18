import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import './Terroir.css';

const Terroir = ({ terroir }) => (
  <div className='terroir'>
    <div className='terroir__head'>
      <h2 className='terroir__head__name' alt={terroir.description} title={terroir.description}>
        {terroir.name}
      </h2>
      <IconButton aria-label='Options'>
        <MoreVertIcon />
      </IconButton>
    </div>
    <div className='terroir__toolbar'>
    </div>
  </div>
);

Terroir.propTypes = {
  terroir: PropTypes.object
};

export default Terroir;
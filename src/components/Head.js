import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import './Head.css';

class Head extends React.Component {

  render() {
    const { name, description } = this.props.terroir;

    return (
      <div className='terroir__head'>
        <h2 className='terroir__head__name'
          alt={description}
          title={description}>
          {name}
        </h2>
        <IconButton aria-label='Options'>
          <MoreVertIcon />
        </IconButton>
      </div>
    );
  }

}

Head.propTypes = {
  terroir: PropTypes.object
};

export default Head;
import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';

import MoreVertIcon from 'material-ui-icons/MoreVert';

import './Head.css';

class Head extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      headMenuEl: null,
    };
  }

  handleClick(event) {
    this.setState({
      headMenuEl: event.currentTarget
    });
  }

  handleClose() {
    this.setState({
      headMenuEl: null
    });
  }

  render() {
    const { name, description } = this.props.terroir;
    const { headMenuEl } = this.state;

    return (
      <div className='terroir__head'>
        <h2 className='terroir__head__name'
          alt={description}
          title={description}>
          {name}
        </h2>
        <div>
          <IconButton
            aria-label='Options'
            aria-owns={headMenuEl ? 'terroir-options' : null}
            aria-haspopup='true'
            onClick={this.handleClick.bind(this)}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id='terroir-options'
            anchorEl={headMenuEl}
            open={Boolean(headMenuEl)}
            onClose={this.handleClose.bind(this)}
          >
            <MenuItem onClick={this.handleClose.bind(this)}>Add</MenuItem>
            <MenuItem onClick={this.handleClose.bind(this)}>Clean</MenuItem>
          </Menu>
        </div>
      </div>
    );
  }

}

Head.propTypes = {
  terroir: PropTypes.object
};

export default Head;
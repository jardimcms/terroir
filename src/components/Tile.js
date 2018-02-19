import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Menu, { MenuItem } from 'material-ui/Menu';

import './Head.css';

const styles = () => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.90)',
  }
});

class Tile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { tile, classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <GridListTile>
        <img src={tile.thumb} alt={tile.name} />
        <GridListTileBar
          title={tile.name}
          subtitle={tile.description}
          actionIcon={
            <div>
              <IconButton
                className={classes.icon}
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick.bind(this)}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose.bind(this)}
              >
                <MenuItem onClick={this.handleClose.bind(this)}>Edit</MenuItem>
                <MenuItem onClick={this.handleClose.bind(this)}>Remove</MenuItem>
                <MenuItem onClick={this.handleClose.bind(this)}>Draft</MenuItem>
              </Menu>
            </div>
          }
        >
        </GridListTileBar>
      </GridListTile>
    );
  }

}

Tile.propTypes = {
  tile: PropTypes.object,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Tile);
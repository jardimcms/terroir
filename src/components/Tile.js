import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';

import MoreVertIcon from 'material-ui-icons/MoreVert';


const styles = () => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.90)',
  }
});

class Tile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tileMenuEl: null,
    };
  }

  handleClick(event) {
    this.setState({
      tileMenuEl: event.currentTarget
    });
  }

  handleClose() {
    this.setState({
      tileMenuEl: null
    });
  }

  render() {
    const { tile, classes, style } = this.props;
    const { tileMenuEl } = this.state;

    return (
      <GridListTile style={style}>
        <img src={tile.thumb} alt={tile.name} />
        <GridListTileBar
          title={tile.name}
          subtitle={tile.description}
          actionIcon={
            <div>
              <IconButton
                className={classes.icon}
                aria-owns={tileMenuEl ? 'tile-menu' : null}
                aria-haspopup='true'
                onClick={this.handleClick.bind(this)}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                id='tile-options'
                anchorEl={tileMenuEl}
                open={Boolean(tileMenuEl)}
                onClose={this.handleClose.bind(this)}
              >
                <MenuItem onClick={this.handleClose.bind(this)}>Edit</MenuItem>
                <MenuItem onClick={this.handleClose.bind(this)}>Draft</MenuItem>
                <MenuItem onClick={this.handleClose.bind(this)}>Clone</MenuItem>
                <MenuItem onClick={this.handleClose.bind(this)}>Remove</MenuItem>
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
  style: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Tile);
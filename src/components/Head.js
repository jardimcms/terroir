import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import Dialog, {
  DialogTitle,
  DialogContent
} from 'material-ui/Dialog';

import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';

import MoreVertIcon from 'material-ui-icons/MoreVert';

import './Head.css';

const styles = () => ({
  gridList: {
    transform: 'translateZ(0)',
    justifyContent: 'center',
    width: '100%'
  },
  gridTile: {
    cursor: 'pointer'
  }
});

class Head extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      headMenuEl: null,
      dialogOpen: false
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

  handleDialogOpen() {
    this.setState({
      dialogOpen: true,
      headMenuEl: null
    });
  }

  handleDialogClose() {
    this.setState({
      dialogOpen: false
    });
  }

  handlePluginPick(terroir, plugin) {
    this.setState({
      dialogOpen: false
    });
    this.props.onPluginPick(terroir.id, plugin);
  }

  render() {
    const { classes } = this.props;
    const { name, description, plugins } = this.props.terroir;
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
            aria-label='Terroir options'
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
            <MenuItem onClick={this.handleDialogOpen.bind(this)}>Add</MenuItem>
            <MenuItem onClick={this.handleClose.bind(this)}>Clean</MenuItem>
          </Menu>
        </div>
        <Dialog
          aria-labelledby="plugin-selection-dialog"
          open={this.state.dialogOpen}
          onClose={this.handleDialogClose.bind(this)}
          maxWidth='md'
          fullWidth
        >
          <DialogTitle id="plugin-selection-dialog">
            Select a plugin
          </DialogTitle>
          <DialogContent>
            <div className='terroir__plugins-pick'>
              <GridList
                cols={3}
                spacing={10}
                className={classes.gridList}>
                {plugins.map((plugin, i) => (
                  <GridListTile
                    key={`plugin-${i}`}
                    className={classes.gridTile}
                    onClick={this.handlePluginPick.bind(this, this.props.terroir, plugin)}>
                    <img src={plugin.thumb} alt={plugin.name} />
                    <GridListTileBar
                      title={plugin.name}
                      subtitle={plugin.description}
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

}

Head.propTypes = {
  terroir: PropTypes.object,
  classes: PropTypes.object.isRequired,
  onPluginPick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Head);
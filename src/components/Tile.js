import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import FileUpload from 'material-ui-icons/FileUpload';
import Menu, { MenuItem } from 'material-ui/Menu';
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

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
      dialogOpen: false
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

  handleDialogOpen() {
    this.setState({
      dialogOpen: true,
      tileMenuEl: null
    });
  }

  handleDialogClose() {
    this.setState({
      dialogOpen: false
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
                <MenuItem onClick={this.handleDialogOpen.bind(this)}>Edit</MenuItem>
                <MenuItem onClick={this.handleClose.bind(this)}>Draft</MenuItem>
                <MenuItem onClick={this.handleClose.bind(this)}>Clone</MenuItem>
                <MenuItem onClick={this.handleClose.bind(this)}>Remove</MenuItem>
              </Menu>
            </div>
          }
        >
        </GridListTileBar>
        <Dialog
          aria-labelledby="plugin-edit-dialog"
          open={this.state.dialogOpen}
          onClose={this.handleDialogClose.bind(this)}
          maxWidth='sm'
          fullWidth
        >
          <DialogTitle id="plugin-edit-dialog">
            Edit {tile.name}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>{tile.description}</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Título"
              helperText="Título do card"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="subtitle"
              label="Subtítulo"
              helperText="Subtítulo do card"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="autor"
              label="Autor"
              helperText="Autor da foto"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="rightsHolder"
              label="Rights Holder"
              helperText="Direitos da foto"
              fullWidth
            />
            <p>
              <Button variant="raised" color="default">
                <FileUpload />
                Photo
              </Button>
            </p>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDialogClose.bind(this)} color="primary">
              Cancel
            </Button>
            <Button variant="raised" onClick={this.handleDialogClose.bind(this)} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
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
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';

import './Terroir.css';

const styles = () => ({
  gridList: {
    transform: 'translateZ(0)',
  }
});

const Terroir = ({ terroir, classes, width }) => (
  <div className='terroir'>
    <div className='terroir__head'>
      <h2 className='terroir__head__name'
        alt={terroir.description}
        title={terroir.description}>
        {terroir.name}
      </h2>
      <IconButton aria-label='Options'>
        <MoreVertIcon />
      </IconButton>
    </div>
    <div className='terroir__body'>
      <GridList
        cols={isWidthUp('sm', width, false) ? 6 : 1}
        cellHeight={250}
        spacing={10}
        className={classes.gridList}>
        {terroir.components.map((component, i) => (
          <GridListTile
            key={`component-${component.key}-${i}`}>
            <img src={component.thumb} alt={component.name} />
            <GridListTileBar
              title={component.name}
              subtitle={component.description}
            >
            </GridListTileBar>
          </GridListTile>
        ))}
      </GridList>
    </div>
  </div>
);

Terroir.propTypes = {
  terroir: PropTypes.object,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default  compose(withStyles(styles), withWidth())(Terroir);
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';

import GridList from 'material-ui/GridList';

import Head from './Head';
import Tile from './Tile';

import './Terroir.css';

const styles = () => ({
  gridList: {
    transform: 'translateZ(0)',
  }
});

class Terroir extends React.Component {

  render() {
    const {
      terroir,
      classes,
      width,
      onPluginPick
    } = this.props;

    return (
      <div className='terroir'>
        <Head
          terroir={terroir}
          onPluginPick={onPluginPick}
        />
        <div className='terroir__body'>
          <GridList
            cols={isWidthUp('sm', width, false) ? 6 : 1}
            cellHeight={250}
            spacing={10}
            className={classes.gridList}
          >
            {terroir.components.map(tile =>
              <Tile key={`tile-${tile.key}`} tile={tile} />
            )}
          </GridList>
        </div>
      </div>
    );
  }

}

Terroir.propTypes = {
  terroir: PropTypes.object,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  onPluginPick: PropTypes.func.isRequired,
};

export default  compose(withStyles(styles), withWidth())(Terroir);
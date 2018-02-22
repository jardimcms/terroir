import React from 'react';
import PropTypes from 'prop-types';
import Terroir from './Terroir';

class TerroirSet extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      terroirs: props.terroirs
    };
  }

  onPluginPick(terroirId, plugin) {
    let terroirs = this.state.terroirs;

    terroirs.map(terroir => {
      if (terroir.id === terroirId) {
        terroir.components.push({
          key: 16,
          type: plugin.type,
          name: plugin.name,
          description: plugin.description,
          thumb: plugin.thumb,
          data: {}
        });
      }
    });

    this.setState({
      terroirs: terroirs
    })
  }

  render() {
    const terroirs = this.state.terroirs;
    return (
      <div className='terroir-set'>
        {terroirs.length ? (
          terroirs.map((terroir, i) =>
            <Terroir
              key={`terroir-${i}`}
              terroir={terroir}
              onPluginPick={this.onPluginPick.bind(this)} />
          )
        ) : (
          <div className='terroir-set__empty'>
            Nenhum terroir encontrado.
          </div>
        )}
      </div>
    );
  }

}

TerroirSet.propTypes = {
  terroirs: PropTypes.array
};

TerroirSet.defaultProps = {
  terroirs: []
};

export default TerroirSet;
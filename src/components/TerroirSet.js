import React from 'react';
import PropTypes from 'prop-types';

class TerroirSet extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      terroirs: props.terroirs
    };
  }

  render() {
    const terroirs = this.state.terroirs;
    return (
      <div className='Terroir'>
        {terroirs.length ? (
          "Terroirs"
         ) : (
          <div className='Terroir__empty'>Nenhum terroir encontrado</div>
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
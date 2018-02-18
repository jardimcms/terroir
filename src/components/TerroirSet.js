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

  render() {
    const terroirs = this.state.terroirs;
    return (
      <div className='terroir-set'>
        {terroirs.length ? (
          terroirs.map((terroir, i) => (
            <Terroir key={`terroir-${i}`} terroir={terroir}/>
          ))
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
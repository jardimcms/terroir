import React from 'react';
import PropTypes from 'prop-types';

class Terroir extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      terroirs: props.terroirs || []
    };
  }

  render() {
    return <div>Hi this is terroir</div>;
  }

}

Terroir.propTypes = {
  terroirs: PropTypes.array
};

export default Terroir;
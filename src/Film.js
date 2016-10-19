import React, { Component, PropTypes } from 'react';

class Film extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    hearts: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  static defaultProps = {

  };

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Film;

import React, { Component, PropTypes } from 'react';

export default class SearchStatus extends Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    didInvalidate: PropTypes.bool
  }

  message() {
    if (this.props.isFetching) {
      return 'Searching...';
    } else if (this.props.didInvalidate) {
      return 'Uh oh! Something went wrong.';
    }
    return '';
  }

  render() {
    return (
      <p>{this.message()}</p>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import styles from './Books.css';

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

  messageType() {
    if (this.props.isFetching) {
      return 'waiting';
    } else if (this.props.didInvalidate) {
      return 'uhoh';
    }
    return '';
  }

  render() {
    return (
      <p className={styles[this.messageType()]}>{this.message()}</p>
    );
  }
}

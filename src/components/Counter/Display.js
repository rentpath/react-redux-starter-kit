import React, { Component, PropTypes } from 'react';
import styles from './Counter.css';

export default class Display extends Component {
  static propTypes ={
    count: PropTypes.number
  }

  render() {
    return (
      <p className={styles.text}>{this.props.count}</p>
    );
  }
}

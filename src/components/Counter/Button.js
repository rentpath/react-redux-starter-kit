import React, { Component, PropTypes } from 'react';
import styles from './Counter.css';

export default class Button extends Component {
  static propTypes ={
    onClick: PropTypes.func.isRequired,
  }

  render() {
    return (
      <button className={styles.button} onClick={() => this.props.onClick()}>
        +1
      </button>
    );
  }
}

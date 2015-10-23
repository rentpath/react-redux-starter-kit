import React, { Component, PropTypes } from 'react';
import styles from './Counter.css';

export default class Button extends Component {
  static propTypes ={
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }

  render() {
    const { onClick } = this.props;
    return (
      <button className={styles[this.props.type]} onClick={() => onClick()}>{this.props.text}</button>
    );
  }
}

import React, { Component, PropTypes } from 'react';
const styles = require('./Counter.css');

export default class Counter extends Component {
  static propTypes ={
    onClick: PropTypes.func.isRequired,
    count: PropTypes.number
  }

  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button className={styles.increment} onClick={() => this.props.onClick()}>
          +1
        </button>
      </div>
    );
  }
}

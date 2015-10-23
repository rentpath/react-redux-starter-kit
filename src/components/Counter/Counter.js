import React, { Component, PropTypes } from 'react';
import Display from './Display';
import Button from './Button';

export default class Counter extends Component {
  static propTypes ={
    onIncrement: PropTypes.func.isRequired,
    count: PropTypes.number
  }

  render() {
    const { count, onIncrement } = this.props;
    return (
      <div>
        <Display count={count} />
        <Button onClick={onIncrement} />
      </div>
    );
  }
}

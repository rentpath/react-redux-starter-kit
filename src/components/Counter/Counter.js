import React, { Component, PropTypes } from 'react';
import Display from './Display';
import Button from './Button';

export default class Counter extends Component {
  static propTypes ={
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
  };

  render() {
    const { count, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <Display count={count} />
        <Button type="positive" text="+1" onClick={onIncrement} />
        <Button type="negative" text="-1" onClick={onDecrement} />
      </div>
    );
  }
}

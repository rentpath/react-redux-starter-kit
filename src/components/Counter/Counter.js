import React, { Component, PropTypes } from 'react'
import Display from './Display'
import Button from './Button'

/**
 * A +1/-1 counter and display
 */
export default class Counter extends Component {
  static displayName = 'Counter'

  static propTypes = {
    /**
     * Handler for incrementing
     */
    onIncrement: PropTypes.func.isRequired,
    /**
     * Handler for decrementing
     */
    onDecrement: PropTypes.func.isRequired,
    /**
     * Display the current count
     */
    count: PropTypes.number.isRequired
  }

  static styleguide = {
    category: 'Counter',
    index: '1.0',
    title: 'Counter',
    exampleComponent: Counter,
    examples: [
      {
        tabTitle: 'Sample',
        props: {
          count: 1,
          onIncrement: () => { console.log('Counter onIncrement') },
          onDecrement: () => { console.log('Counter onDecrement') }
        }
      }
    ]
  }

  render() {
    const { count, onIncrement, onDecrement } = this.props
    return (
      <div>
        <Display count={count} />
        <Button type="positive" text="+1" onClick={onIncrement} />
        <Button type="negative" text="-1" onClick={onDecrement} />
      </div>
    )
  }
}

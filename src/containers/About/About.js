import React, { Component, PropTypes } from 'react'
import { Counter } from 'components'
import { incrementCounter, decrementCounter } from 'actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

@connect(state => ({ count: state.count }))

export default class About extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
  }

  render() {
    const { count, dispatch } = this.props
    return (
      <article>
        <h1>About</h1>
        <Counter
          count={count}
          {...bindActionCreators({
            onIncrement: incrementCounter,
            onDecrement: decrementCounter
          }, dispatch)} />
      </article>
    )
  }
}

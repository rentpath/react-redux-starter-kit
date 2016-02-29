import React, { Component, PropTypes } from 'react'
import styles from './Counter.css'

/**
 * Display a count
 */
export default class Display extends Component {
  static displayName = 'Display'

  static propTypes = {
    /**
     * Number to display
     */
    count: PropTypes.number.isRequired
  }

  static styleguide = {
    category: 'Counter',
    index: '1.1',
    title: 'Display',
    code: `<Display count={1} />`
  }

  render() {
    return (
      <p className={styles.text}>{this.props.count}</p>
    )
  }
}

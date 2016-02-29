import React, { Component, PropTypes } from 'react'
import styles from './Counter.css'

/**
 * A simple button to style for the counter and capture clicks.
 */
export default class Button extends Component {
  static displayName = 'Button'

  static propTypes = {
    /**
     * Handler for click event
     */
    onClick: PropTypes.func.isRequired,
    /**
     * Text to display inside the button
     */
    text: PropTypes.string.isRequired,
    /**
     * Name of button style `'positive|negative'`
     */
    type: PropTypes.oneOf(['positive', 'negative']).isRequired
  }

  static styleguide = {
    index: '1.2',
    category: 'Counter',
    title: 'Button',
    exampleComponent: Button,
    examples: [
      {
        tabTitle: 'Positive',
        props: {
          type: 'positive',
          text: '+',
          onClick: () => { console.log('Positive button onClick') }
        }
      },
      {
        tabTitle: 'Negative',
        props: {
          type: 'negative',
          text: '-',
          onClick: () => { console.log('Negative button onClick') }
        }
      }
    ]
  }

  render() {
    const { onClick } = this.props
    return (
      <button className={styles[this.props.type]} onClick={() => onClick()}>{this.props.text}</button>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import styles from './Books.css'

/**
 * Text display for the book search status
 */
export default class SearchStatus extends Component {
  static displayName = 'SearchStatus'

  static propTypes = {
    /**
     * If the search is in progress
     */
    isFetching: PropTypes.bool,
    /**
     * if the search failed
     */
    didInvalidate: PropTypes.bool
  }

  static styleguide = {
    category: 'Books',
    index: '2.1',
    title: 'SearchStatus',
    exampleComponent: SearchStatus,
    examples: [
      {
        tabTitle: 'Searching',
        props: {
          isFetching: true,
          didInvalidate: false
        }
      },
      {
        tabTitle: 'Uh Oh',
        props: {
          isFetching: false,
          didInvalidate: true
        }
      },
      {
        tabTitle: 'Hidden',
        props: {
          isFetching: false,
          didInvalidate: false
        }
      }
    ]
  }

  message() {
    if (this.props.isFetching) {
      return 'Searching...'
    } else if (this.props.didInvalidate) {
      return 'Uh oh! Something went wrong.'
    }
    return ''
  }

  messageType() {
    if (this.props.isFetching) {
      return 'waiting'
    } else if (this.props.didInvalidate) {
      return 'uhoh'
    }
    return ''
  }

  render() {
    return (
      <p className={styles[this.messageType()]}>{this.message()}</p>
    )
  }
}

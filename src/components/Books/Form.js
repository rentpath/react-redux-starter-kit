import React, { Component, PropTypes } from 'react'
import styles from './Books.css'

/**
 * Display a book search form
 */
export default class Form extends Component {
  static displayName = 'Form';

  static propTypes = {
    /**
     * Handler for form submission
     */
    onSubmit: PropTypes.func.isRequired
  };

  static styleguide = {
    category: 'Books',
    index: '2.0',
    title: 'Form',
    exampleComponent: Form,
    examples: [
      {
        tabTitle: 'Sample',
        props: {
          onSubmit: () => { console.log('Form onSubmit') }
        }
      }
    ]
  };

  handleSearch(event) {
    event.preventDefault()
    this.props.onSubmit(this.refs.q.value)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSearch(event)}>
        <input className={styles.formInput} type="text" ref="q" placeholder="Search for Books" />
        <input className={styles.formButton} type="submit" value="Fetch" />
      </form>
    )
  }
}

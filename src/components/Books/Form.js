import React, { Component, PropTypes } from 'react';
import styles from './Books.css';

export default class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  handleSearch(event) {
    event.preventDefault();
    this.props.onSubmit(this.refs.q.value);
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSearch(event)}>
        <input className={styles.formInput} type="text" ref="q" placeholder="Search for Books" />
        <input className={styles.formButton} type="submit" value="Fetch" />
      </form>
    );
  }
}

import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  handleSearch(event) {
    event.preventDefault();
    this.props.onSubmit(this.refs.q.value);
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSearch(event)}>
        <input type="text" ref="q" />
        <input type="submit" value="Fetch" />
      </form>
    );
  }
}

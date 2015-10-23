import React, { Component, PropTypes } from 'react';

export default class List extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map((book) => {
          return (
            <p key={book.id}>{book.volumeInfo.title}</p>
          );
        })}
      </div>
    );
  }
}

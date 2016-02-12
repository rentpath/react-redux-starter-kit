import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import styles from './Books.css';

export default class BooksList extends Component {
  static propTypes = {
    items: PropTypes.instanceOf(List)
  };

  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map((book) => {
          return (
            <p className={styles.listItem} key={book.get('id')}>{book.get('volumeInfo').get('title')}</p>
          );
        })}
      </div>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import styles from './Books.css';

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
            <p className={styles.listItem} key={book.id}>{book.volumeInfo.title}</p>
          );
        })}
      </div>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import { BooksForm } from 'components';
import { fetchBooks } from 'actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({ books: state.books }))

export default class Books extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    books: PropTypes.any
  }

  render() {
    const { books, dispatch } = this.props;
    console.log('books', books.items);
    return (
      <div>
        <h1>Books!</h1>
        <BooksForm {...bindActionCreators({ onSubmit: fetchBooks }, dispatch)} />

      </div>
    );
  }
}
//{books.items.map((book) => {
//  return (
//    <p key={book.id}>{book.volumeInfo.title}</p>
//  );
//})}

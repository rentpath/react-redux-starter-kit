import React, { Component, PropTypes } from 'react';
import { BooksForm, BooksSearchStatus, BooksList } from 'components';
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
    const items = books.items || [];
    return (
      <div>
        <h1>Books!</h1>
        <BooksForm {...bindActionCreators({ onSubmit: fetchBooks }, dispatch)} />
        <BooksSearchStatus isFetching={books.isFetching} didInvalidate={books.didInvalidate} />
        <BooksList items={items} />
      </div>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import { BooksForm, BooksSearchStatus, BooksList } from 'components';
import { List } from 'immutable';
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
    const items = books.get('items') || List([]);
    return (
      <div>
        <h1>Books!</h1>
        <BooksForm {...bindActionCreators({ onSubmit: fetchBooks }, dispatch)} />
        <BooksSearchStatus isFetching={books.get('isFetching')} didInvalidate={books.get('didInvalidate')} />
        <BooksList items={items} />
      </div>
    );
  }
}

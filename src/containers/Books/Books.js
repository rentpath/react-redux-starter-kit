import React, { Component, PropTypes } from 'react';
import { BooksForm, BooksSearchStatus, BooksList } from 'components';
import { Map } from 'immutable';
import { fetchBooks } from 'actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({ books: state.books }))

export default class Books extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    books: PropTypes.instanceOf(Map)
  }

  render() {
    const { books, dispatch } = this.props;
    return (
      <div>
        <h1>Books!</h1>
        <BooksForm {...bindActionCreators({ onSubmit: fetchBooks }, dispatch)} />
        <BooksSearchStatus isFetching={books.get('isFetching')} didInvalidate={books.get('didInvalidate')} />
        <BooksList items={books.get('items')} />
      </div>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import { Counter } from 'components';
import * as actions from 'actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({ count: state.count }))

export default class About extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    count: PropTypes.number
  };

  render() {
    const { count, dispatch } = this.props;
    return (
      <article>
        <h1>About</h1>
        <Counter count={count} {...bindActionCreators({ inc: actions.inc }, dispatch)} />
      </article>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './App.css';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        <nav className={styles.nav}>
          <Link className={styles.link} to="/">Home</Link>
          <Link className={styles.link} to="/about">About</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

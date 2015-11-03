import React, { Component, PropTypes } from 'react';
import styles from './Photos.css';

export default class Photo extends Component {
  static propTypes ={
    url: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }

  render() {
    return (
      <img className={styles.image} src={this.props.url} width={this.props.width} height={this.props.height} />
    );
  }
}

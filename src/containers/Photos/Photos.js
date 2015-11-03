import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';
import { Photo } from 'components';
import { connect } from 'react-redux';

@connect(state => ({ photos: state.photos }))

export default class Photos extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    photos: PropTypes.instanceOf(Map)
  }

  render() {
    const { photos } = this.props;
    return (
      <div>
        <h1>Photos</h1>
        <h3>Recent photos from flickr</h3>
        <div>
          {photos.get('items').map((photo) => {
            return (
              <Photo key={photo.get('url')} url={photo.get('url')} width={photo.get('width')} height={photo.get('height')} />
            );
          })}
        </div>
      </div>
    );
  }
}

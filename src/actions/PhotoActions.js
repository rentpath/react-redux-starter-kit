import { createAction } from 'redux-actions';
import { REQUEST_PHOTOS, RECEIVE_PHOTOS, INVALIDATE_PHOTOS } from './const';

const requestPhotos = createAction(REQUEST_PHOTOS);
const receivePhotos = createAction(RECEIVE_PHOTOS, (items) => items);
const invalidatePhotos = createAction(INVALIDATE_PHOTOS, (error) => error);

const fetchPhotos = () => {
  return (dispatch) => {
    dispatch(requestPhotos());
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=789e4649d6efc01e138f94a94f8696e7&text=Raleigh&format=json&nojsoncallback=1&extras=url_q')
      .then((response) => {
        if (response.status >= 400) {
          return Promise.reject(new Error('Bad response from server'));
        }
        return response.json();
      })
      .then((response) => {
        const photos = response.photos.photo.map((photo) => {
          return {
            width: photo.width_q,
            height: photo.height_q,
            url: photo.url_q
          };
        });
        dispatch(receivePhotos(photos));
      }).catch((error) => {
        dispatch(invalidatePhotos(error));
      });
  };
};

const fetchPhotosSync = (dispatch, callback) => {
  fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=789e4649d6efc01e138f94a94f8696e7&text=Raleigh&format=json&nojsoncallback=1&extras=url_q')
    .then((response) => {
      if (response.status >= 400) {
        return Promise.reject(new Error('Bad response from server'));
      }
      return response.json();
    })
    .then((response) => {
      const photos = response.photos.photo.map((photo) => {
        return {
          width: photo.width_q,
          height: photo.height_q,
          url: photo.url_q
        };
      });
      dispatch(receivePhotos(photos));
      callback();
    }).catch((error) => {
      dispatch(invalidatePhotos(error));
      callback();
    });
};

export { fetchPhotos, fetchPhotosSync, requestPhotos, receivePhotos, invalidatePhotos };

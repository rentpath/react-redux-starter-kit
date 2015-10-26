import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import SearchStatus from '../SearchStatus';

describe('SearchStatus', () => {
  describe('render', () => {
    describe('when it is fetching', () => {
      let component;
      let node;

      before('mount the component', () => {
        component = TestUtils.renderIntoDocument(<SearchStatus isFetching didInvalidate />);
        node = ReactDOM.findDOMNode(component);
      });

      it('assigns the right class name', () => {
        expect(node.className).to.include('waiting');
      });

      it('renders the text', () => {
        expect(node.textContent).to.equal('Searching...');
      });
    });
  });
});

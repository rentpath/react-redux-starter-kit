import { React, ReactDOM, TestUtils, expect } from 'utils';
import SearchStatus from '../SearchStatus';

describe('SearchStatus', () => {
  describe('#messageType', () => {
    describe('when it is fetching', () => {
      let component;

      before('mount the component', () => {
        component = TestUtils.renderIntoDocument(<SearchStatus isFetching />);
      });

      it('is waiting', () => {
        expect(component.messageType()).to.eq('waiting');
      });
    });

    describe('when it is invalidated', () => {
      let component;

      before('mount the component', () => {
        component = TestUtils.renderIntoDocument(<SearchStatus didInvalidate />);
      });

      it('is uhoh', () => {
        expect(component.messageType()).to.eq('uhoh');
      });
    });

    describe('when it is neither fetching nor invalidated', () => {
      let component;

      before('mount the component', () => {
        component = TestUtils.renderIntoDocument(<SearchStatus />);
      });

      it('is empty', () => {
        expect(component.messageType()).to.eq('');
      });
    });
  });

  describe('#render', () => {
    describe('when it is fetching', () => {
      let component;
      let node;

      before('mount the component', () => {
        component = TestUtils.renderIntoDocument(<SearchStatus isFetching />);
        node = ReactDOM.findDOMNode(component);
      });

      it('renders the text', () => {
        expect(node.textContent).to.equal('Searching...');
      });
    });

    describe('when it is invalidated', () => {
      let component;
      let node;

      before('mount the component', () => {
        component = TestUtils.renderIntoDocument(<SearchStatus didInvalidate />);
        node = ReactDOM.findDOMNode(component);
      });

      it('renders the text', () => {
        expect(node.textContent).to.equal('Uh oh! Something went wrong.');
      });
    });

    describe('when it is neither fetching nor invalidated', () => {
      let component;
      let node;

      before('mount the component', () => {
        component = TestUtils.renderIntoDocument(<SearchStatus />);
        node = ReactDOM.findDOMNode(component);
      });

      it('renders empty text', () => {
        expect(node.textContent).to.equal('');
      });
    });
  });
});

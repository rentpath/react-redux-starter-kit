import { React, ReactDOM, TestUtils } from 'utils';
import { expect } from 'chai';
import SearchStatus from '../SearchStatus';

describe('SearchStatus', () => {
  describe('render', () => {
    describe('when it is fetching', () => {
      let component;
      let node;

      before('mount the component', () => {
        component = TestUtils.renderIntoDocument(<SearchStatus isFetching />);
        node = ReactDOM.findDOMNode(component);
      });

      it('assigns the right class name', () => {
        expect(node.className).to.include('waiting');
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

      it('assigns the right class name', () => {
        expect(node.className).to.include('uhoh');
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

      it('does not assign a class name', () => {
        expect(node.className).to.equal('');
      });

      it('renders empty text', () => {
        expect(node.textContent).to.equal('');
      });
    });
  });
});

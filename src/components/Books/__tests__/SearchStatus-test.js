import { React, expect, shallow } from 'utils';
import SearchStatus from '../SearchStatus';

describe('<SearchStatus />', () => {
  describe('#messageType', () => {
    describe('when it is fetching', () => {
      let instance;

      before('mount the component', () => {
        instance = shallow(<SearchStatus isFetching />).instance();
      });

      it('is waiting', () => {
        expect(instance.messageType()).to.eq('waiting');
      });
    });

    describe('when it is invalidated', () => {
      let instance;

      before('mount the component', () => {
        instance = shallow(<SearchStatus didInvalidate />).instance();
      });

      it('is uhoh', () => {
        expect(instance.messageType()).to.eq('uhoh');
      });
    });

    describe('when it is neither fetching nor invalidated', () => {
      let instance;

      before('mount the component', () => {
        instance = shallow(<SearchStatus />).instance();
      });

      it('is empty', () => {
        expect(instance.messageType()).to.eq('');
      });
    });
  });

  describe('#render', () => {
    describe('when it is fetching', () => {
      it('renders the text', () => {
        expect(shallow(<SearchStatus isFetching />)).to.have.text('Searching...');
      });
    });

    describe('when it is invalidated', () => {
      it('renders the text', () => {
        expect(shallow(<SearchStatus didInvalidate />)).to.have.text('Uh oh! Something went wrong.');
      });
    });

    describe('when it is neither fetching nor invalidated', () => {
      it('renders empty text', () => {
        expect(shallow(<SearchStatus />)).to.have.text('');
      });
    });
  });
});

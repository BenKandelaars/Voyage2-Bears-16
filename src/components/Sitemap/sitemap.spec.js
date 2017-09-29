import React from 'react';
import ReactDom from 'react-dom';
import { Enzyme, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-15';
import Sitemap from './Sitemap';

// Enzyme.configure({ adapter: new Adapter() });

describe('Sitemap component tests', () => {

  it('Smoke test', () => {
    const div = document.createElement('div');
    ReactDom.render(<Sitemap />, div);
  });

  // it('Snapshot as intented', () => {
  //   const component = shallow(<Sitemap />);
  //   expect(component).toMatchSnapshot();
  // });
});

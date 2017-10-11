import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Sitemap from './Sitemap';

describe('Sitemap component tests', () => {
  it('Smoke test', () => {
    const div = document.createElement('div');
    ReactDom.render(<Sitemap />, div);
  });

  it('Snapshot as intented', () => {
    const component = shallow(<Sitemap />);
    expect(toJSON(component)).toMatchSnapshot();
  });
});

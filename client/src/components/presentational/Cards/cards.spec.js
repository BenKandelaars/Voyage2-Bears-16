import React from 'react';
import ReactDom from 'react-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
  ExploreCard,
  DestinationCard,
  ExperienceCard,
  HomesCard,
  FullStar,
  HalfStar,
  EmptyStar,
} from './Cards';
import testPhoto from './testPhoto.jpg';

describe('Card component tests', () => {
  describe('Font Awesome Stars render', () => {
    it('Full star - Smoke test', () => {
      const div = document.createElement('div');
      ReactDom.render(<FullStar />, div);
    });

    it('Renders a Star', () => {
      const wrapper = mount(<FullStar />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Half star - Smoke test', () => {
      const div = document.createElement('div');
      ReactDom.render(<HalfStar />, div);
    });

    it('Renders a Half Star', () => {
      const wrapper = mount(<HalfStar />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Empty star - Smoke test', () => {
      const div = document.createElement('div');
      ReactDom.render(<EmptyStar />, div);
    });

    it('Renders an Empty Star', () => {
      const wrapper = mount(<EmptyStar />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Explore Card Component', () => {
    it('Smoke test', () => {
      const div = document.createElement('div');
      ReactDom.render(<ExploreCard img={testPhoto} title={'Home'} />, div);
    });
  });

  describe('Destination Card Component', () => {
    it('Smoke test', () => {
      const div = document.createElement('div');
      ReactDom.render(<DestinationCard img={testPhoto} title={'Home'} />, div);
    });
  });

  describe('Experience Card Component', () => {
    it('Smoke test', () => {
      const div = document.createElement('div');
      ReactDom.render(<ExperienceCard
        img={testPhoto}
        title={'Experiences'}
        price={52}
        description={'A fantastic day out on Stanage Edge in the beautiful Peak district'}
      />, div);
    });
  });

  describe('Homes Card Component', () => {
    it('Smoke test', () => {
      const div = document.createElement('div');
      ReactDom.render(<HomesCard
        img={testPhoto}
        title={'Villa'}
        price={52}
        description={'Light and spacious, weekend away'}
        spaceType={'Entire Villa'}
        beds={'5 bed'}
      />, div);
    });
  });
});


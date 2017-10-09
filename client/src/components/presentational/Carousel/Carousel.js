import React from 'react';
import PropTypes from 'prop-types';
import CarouselTop from './Components/CarouselTop';
import CarouselView from './CarouselView';
import { ExperienceCard } from '../Cards/Cards';

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <CarouselTop title={this.props.groupTitle} />
        <CarouselView
          {...this.props}
          Card={ExperienceCard} 
        />
      </div>
    );
  }
}

Carousel.propTypes = {
  groupTitle: PropTypes.string.isRequired,
};

export default Carousel;

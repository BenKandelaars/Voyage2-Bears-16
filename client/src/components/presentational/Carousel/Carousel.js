import React from 'react';
import PropTypes from 'prop-types';
import CarouselTop from './Components/CarouselTop';
import CarouselView from './CarouselView';
import { ExperienceCard, HomesCard } from '../Cards/Cards';

class Carousel extends React.Component { 
  render() {
    const Card = this.props.groupTitle === 'Homes' ? HomesCard : ExperienceCard;

    return (
      <div>
        <CarouselTop title={this.props.groupTitle} />
        <CarouselView
          {...this.props}
          Card={Card} 
        />
      </div>
    );
  }
}

Carousel.propTypes = {
  groupTitle: PropTypes.string.isRequired,
};

export default Carousel;

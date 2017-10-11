import React from 'react';
import PropTypes from 'prop-types';
import CarouselTop from './Components/CarouselTop';
import CarouselView from './CarouselView';

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <CarouselTop title={this.props.groupTitle} />
        <CarouselView
          {...this.props}
          Card={this.props.card}
        />
      </div>
    );
  }
}

Carousel.propTypes = {
  groupTitle: PropTypes.string.isRequired,
  card: PropTypes.func.isRequired,
};

export default Carousel;

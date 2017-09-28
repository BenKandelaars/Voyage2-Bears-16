import React from 'react';
import PropTypes from 'prop-types';
import {
  SectionStyles,
  ExploreCardContainer,
  ExploreCardWrapper,
  FeaturedDestinationContainer,
  DestinationWrapper,
} from './styles';
import homeImg from '../../assets/pictures/explore/home_small.jpg';
import resturantImg from '../../assets/pictures/explore/resturant_medium.jpg';
import experienceImg from '../../assets/pictures/explore/abseiling_medium.jpg';
import londonImg from '../../assets/pictures/destinations/london_medium.jpg';
import newYorkImg from '../../assets/pictures/destinations/newYork_medium.jpg';
import parisImg from '../../assets/pictures/destinations/paris_medium.jpg';
import krakowImg from '../../assets/pictures/destinations/krakow_medium.jpg';
import tokyoImg from '../../assets/pictures/destinations/tokyo_medium.jpg';

const ExploreCard = props => (
  <ExploreCardWrapper>
    <img src={props.img} alt={props.title} />
    <div>
      <h4>{props.title}</h4>
    </div>
  </ExploreCardWrapper>
);

ExploreCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const DestinationCard = props => (
  <DestinationWrapper>
    <img src={props.img} alt={props.title} />
    <div>
    <h4>{props.title}</h4>
    </div>
  </DestinationWrapper>
)

DestinationCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

const Cards = () => (
  <SectionStyles>
    <ExploreCardContainer>
      <ExploreCard img={homeImg} title={'Home'} />
      <ExploreCard img={resturantImg} title={'Resturant'} />
      <ExploreCard img={experienceImg} title={'Experiences'} />
    </ExploreCardContainer>
    <FeaturedDestinationContainer>
      <DestinationCard img={londonImg} title={'London'} />
      <DestinationCard img={newYorkImg} title={'New York'} />
      <DestinationCard img={krakowImg} title={'Krakow'} />
      <DestinationCard img={tokyoImg} title={'Tokyo'} />
      <DestinationCard img={parisImg} title={'Paris'} />
    </FeaturedDestinationContainer>
  </SectionStyles>
);

export default Cards;


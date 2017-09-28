import React from 'react';
import PropTypes from 'prop-types';
import {
  SectionStyles,
  ExploreCardContainer,
  ExploreCardWrapper,
} from './styles';
import homeImg from '../../assets/pictures/explore/home_small.jpg';
import resturantImg from '../../assets/pictures/explore/resturant_medium.jpg';
import experienceImg from '../../assets/pictures/explore/abseiling_medium.jpg';

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

const Cards = () => (
  <SectionStyles>
    <ExploreCardContainer>
      <ExploreCard img={homeImg} title={'Home'} />
      <ExploreCard img={resturantImg} title={'Resturant'} />
      <ExploreCard img={experienceImg} title={'Experiences'} />
    </ExploreCardContainer>
  </SectionStyles>
);

export default Cards;


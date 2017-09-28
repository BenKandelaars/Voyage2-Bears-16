import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {
  SectionStyles,
  ExploreContainer,
  ExploreCardWrapper,
  DestinationsContainer,
  DestinationWrapper,
  DestinationItem,
  ExperiencesContainer,
  ExperienceWrapper,
  Star,
  Reviews,
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
      <h3>£{props.title}</h3>
    </div>
  </ExploreCardWrapper>
);

ExploreCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const DestinationCard = props => (
  <DestinationWrapper>
    <DestinationItem>
      <img src={props.img} alt={props.title} />
      <div>
        <h4>{props.title}</h4>
      </div>
    </DestinationItem>
  </DestinationWrapper>
);

DestinationCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const FullStar = () => <Star><FontAwesome name="star" /></Star>;
const HalfStar = () => <Star><FontAwesome name="star-half-o" /></Star>;
const EmptyStar = () => <Star><FontAwesome name="star-o" /></Star>;

const ExperienceCard = props => (
  <ExperienceWrapper>
    <img src={props.img} alt={props.title} />
    <div>
      <p><b>£{props.price}</b>
        &nbsp;&nbsp;
        {props.description}
      </p>
      <FullStar />
      <FullStar />
      <FullStar />
      <HalfStar />
      <EmptyStar />
      <Reviews>70 Reviews</Reviews>
    </div>
  </ExperienceWrapper>
);

ExperienceCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

const Cards = () => (
  <SectionStyles>
    <ExploreContainer>
      <ExploreCard img={homeImg} title={'Home'} />
      <ExploreCard img={resturantImg} title={'Resturant'} />
      <ExploreCard img={experienceImg} title={'Experiences'} />
    </ExploreContainer>
    <DestinationsContainer>
      <DestinationCard img={londonImg} title={'London'} />
      <DestinationCard img={newYorkImg} title={'New York'} />
      <DestinationCard img={krakowImg} title={'Krakow'} />
      <DestinationCard img={tokyoImg} title={'Tokyo'} />
      <DestinationCard img={parisImg} title={'Paris'} />
    </DestinationsContainer>
    <ExperiencesContainer>
      <ExperienceCard
        img={experienceImg} 
        title={'Experiences'}
        price={'52'}
        description={'A fantastic day out on Stanage Edge in the beautiful Peak district'} 
      />
      <ExperienceCard img={experienceImg} title={'Experiences'} />
      <ExperienceCard img={experienceImg} title={'Experiences'} />
      <ExperienceCard img={experienceImg} title={'Experiences'} />
    </ExperiencesContainer>
  </SectionStyles>
);

export default Cards;


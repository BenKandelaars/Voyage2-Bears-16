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
  HomesContainer,
  HomesWrapper,
} from './styles';
import homeImg from '../../assets/pictures/explore/home_medium.jpg';
import resturantImg from '../../assets/pictures/explore/resturant_medium.jpg';
import experienceImg from '../../assets/pictures/explore/abseiling_medium.jpg';
import londonImg from '../../assets/pictures/destinations/london_medium.jpg';
import newYorkImg from '../../assets/pictures/destinations/newYork_medium.jpg';
import parisImg from '../../assets/pictures/destinations/paris_medium.jpg';
import krakowImg from '../../assets/pictures/destinations/krakow_medium.jpg';
import tokyoImg from '../../assets/pictures/destinations/tokyo_medium.jpg';


export const FullStar = () => <Star><FontAwesome name="star" /></Star>;
export const HalfStar = () => <Star><FontAwesome name="star-half-o" /></Star>;
export const EmptyStar = () => <Star><FontAwesome name="star-o" /></Star>;

export const ExploreCard = props => (
  <ExploreCardWrapper>
    <img src={props.img} alt={props.title} />
    <div>
      <h3>{props.title}</h3>
    </div>
  </ExploreCardWrapper>
);

ExploreCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export const DestinationCard = props => (
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

export class ExperienceCard extends React.Component {
  render() {
    const getRef = (this.props) ? this.props.innerRef : null;

    return (
      <div ref={getRef}>
      <ExperienceWrapper>
        <img src={this.props.img} alt={this.props.title} />
        <div>
          <p><b>£{this.props.price}</b>
            &nbsp;&nbsp;
            {this.props.description}
          </p>
          <FullStar />
          <FullStar />
          <FullStar />
          <HalfStar />
          <EmptyStar />
          <Reviews>70 Reviews</Reviews>
        </div>
      </ExperienceWrapper>
      </div>
    );
  }
}

ExperienceCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export const HomesCard = props => (
  <div ref={props.innerRef}>
  <HomesWrapper>
    <img src={props.img} alt={props.title} />
    <div>
      <p><b>£{props.price}
        &nbsp;&nbsp;
        {props.description}</b>
      </p>
      <p>{props.spaceType} &nbsp;&middot;&nbsp;
        {props.beds}
      </p>
    </div>
  </HomesWrapper>
  </div>
);

HomesCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  spaceType: PropTypes.string.isRequired,
  beds: PropTypes.string.isRequired,
};

const Cards = () => (
  <SectionStyles>
    <ExploreContainer>
      <ExploreCard img={homeImg} title={'Home'} />
      <ExploreCard img={resturantImg} title={'Resturants'} />
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
        price={52}
        description={'A fantastic day out on Stanage Edge in the beautiful Peak district'}
      />
      <ExperienceCard
        img={resturantImg}
        title={'Experiences'}
        price={25}
        description={'A delicious meal to 2 with friends'}
      />
      <ExperienceCard
        img={experienceImg}
        title={'Experiences'}
        price={52}
        description={'A fantastic day out on Stanage Edge in the beautiful Peak district'}
      />
    </ExperiencesContainer>
    <HomesContainer>
      <HomesCard
        img={homeImg}
        title={'Villa'}
        price={52}
        description={'Light and spacious, weekend away'}
        spaceType={'Entire Villa'}
        beds={'5 bed'}
      />
      <HomesCard
        img={homeImg}
        title={'Villa'}
        price={52}
        description={'Light and spacious, weekend away'}
        spaceType={'Entire Villa'}
        beds={'5 bed'}
      />
      <HomesCard
        img={homeImg}
        title={'Villa'}
        price={52}
        description={'Light and spacious, weekend away'}
        spaceType={'Entire Villa'}
        beds={'5 bed'}
      />
    </HomesContainer>
  </SectionStyles>
);

export default Cards;


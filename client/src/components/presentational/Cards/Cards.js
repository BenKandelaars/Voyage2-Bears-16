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
  <div ref={props.getRef}>
    <DestinationWrapper>
      <DestinationItem>
        <img src={props.img} alt={props.title} />
        <div>
          <h4>{props.title}</h4>
        </div>
      </DestinationItem>
    </DestinationWrapper>
  </div>
);

DestinationCard.propTypes = {
  getRef: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export class ExperienceCard extends React.Component {
  render() {
    return (
      <div ref={this.props.getRef}>
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
  getRef: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export const HomesCard = props => (
  <div ref={props.getRef}>
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
  getRef: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  spaceType: PropTypes.string.isRequired,
  beds: PropTypes.string.isRequired,
};

export const ExploreCards = () => ( 
  <ExploreContainer>
    <ExploreCard img={homeImg} title={'Home'} />
    <ExploreCard img={resturantImg} title={'Resturants'} />
    <ExploreCard img={experienceImg} title={'Experiences'} />
  </ExploreContainer>
);

// const Cards = () => (
//   <SectionStyles>
//     <DestinationsContainer>
//       <DestinationCard img={londonImg} title={'London'} />
//       <DestinationCard img={newYorkImg} title={'New York'} />
//       <DestinationCard img={krakowImg} title={'Krakow'} />
//       <DestinationCard img={tokyoImg} title={'Tokyo'} />
//       <DestinationCard img={parisImg} title={'Paris'} />
//     </DestinationsContainer>
//   </SectionStyles>
// );

// export default Cards;


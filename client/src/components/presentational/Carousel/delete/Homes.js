import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {
  Star,
  HomesContainer,
  HomesWrapper,
  HomesCardWrapper,
  HomesCardContainer,
} from './styles';
import homeImg from '../../assets/pictures/explore/home_medium.jpg';

export const FullStar = () => <Star><FontAwesome name="star" /></Star>;
export const HalfStar = () => <Star><FontAwesome name="star-half-o" /></Star>;
export const EmptyStar = () => <Star><FontAwesome name="star-o" /></Star>;

export const HomesCard = props => (
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
);

HomesCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  spaceType: PropTypes.string.isRequired,
  beds: PropTypes.string.isRequired,
};


const Homes = (props) => (
  <HomesContainer>
    <HomesCardWrapper innerRef={props.innerRef}>
      <HomesCardContainer>
        <HomesCard
          img={homeImg}
          title={'Villa'}
          price={52}
          description={'Light and spacious, weekend away'}
          spaceType={'Entire Villa'}
          beds={'5 bed'}
        />
      </HomesCardContainer>
    </HomesCardWrapper>
    <HomesCardWrapper>
      <HomesCardContainer>
        <HomesCard
          img={homeImg}
          title={'Villa'}
          price={52}
          description={'Light and spacious, weekend away'}
          spaceType={'Entire Villa'}
          beds={'5 bed'}
        />
      </HomesCardContainer>
    </HomesCardWrapper>
    <HomesCardWrapper>
      <HomesCardContainer>
        <HomesCard
          img={homeImg}
          title={'Villa'}
          price={52}
          description={'Light and spacious, weekend away'}
          spaceType={'Entire Villa'}
          beds={'5 bed'}
        />
      </HomesCardContainer>
    </HomesCardWrapper>
    <HomesCardWrapper>
      <HomesCardContainer>
        <HomesCard
          img={homeImg}
          title={'Villa'}
          price={52}
          description={'Light and spacious, weekend away'}
          spaceType={'Entire Villa'}
          beds={'5 bed'}
        />
      </HomesCardContainer>
    </HomesCardWrapper>
    <HomesCardWrapper>
      <HomesCardContainer>
        <HomesCard
          img={homeImg}
          title={'Villa'}
          price={52}
          description={'Light and spacious, weekend away'}
          spaceType={'Entire Villa'}
          beds={'5 bed'}
        />
      </HomesCardContainer>
    </HomesCardWrapper>
  </HomesContainer>
);

export default Homes;


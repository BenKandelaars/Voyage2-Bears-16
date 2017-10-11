import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {
  ExploreContainer,
  ExploreCardWrapper,
  DestinationWrapper,
  DestinationItem,
  ExperienceWrapper,
  Star,
  Reviews,
  HomesWrapper,
} from './styles';
import homeImg from '../../assets/pictures/explore/home_medium.jpg';
import resturantImg from '../../assets/pictures/explore/resturant_medium.jpg';
import experienceImg from '../../assets/pictures/explore/abseiling_medium.jpg';

export const FullStar = () => <Star><FontAwesome name="star" /></Star>;
export const HalfStar = () => <Star><FontAwesome name="star-half-o" /></Star>;
export const EmptyStar = () => <Star><FontAwesome name="star-o" /></Star>;

// export function getDataKey(data, itemNo) {
//   let key;
//   if (Object.prototype.hasOwnProperty.call(data, itemNo)) {
//     key = itemNo;
//   } else {
//     key = 0;
//   }
//   return key;
// }

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
    const { img, title, price, description } = this.props.data[this.props.itemNo];

    return (
      <div ref={this.props.getRef}>
        <ExperienceWrapper>
          <img src={img} alt={title} />
          <div>
            <p><b>£{price}</b>
              &nbsp;&nbsp;
              {description}
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
  getRef: PropTypes.func,
  itemNo: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export const HomesCard = (props) => {
  const { img, title, price, description, spaceType, beds } = props.data[props.itemNo];

  return (
    <div ref={props.getRef}>
      <HomesWrapper>
        <img src={img} alt={title} />
        <div>
          <p><b>£{price}
            &nbsp;&nbsp;
            {description}</b>
          </p>
          <p>{spaceType} &nbsp;&middot;&nbsp;
            {beds}
          </p>
        </div>
      </HomesWrapper>
    </div>
  );
};

HomesCard.propTypes = {
  getRef: PropTypes.func,
  itemNo: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    spaceType: PropTypes.string.isRequired,
    beds: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export const ExploreCards = () => (
  <ExploreContainer>
    <ExploreCard img={homeImg} title={'Home'} />
    <ExploreCard img={resturantImg} title={'Resturants'} />
    <ExploreCard img={experienceImg} title={'Experiences'} />
  </ExploreContainer>
);


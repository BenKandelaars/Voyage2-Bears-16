import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {
  ExperiencesContainer,
  Star,
  Reviews,
  div,
  ExperienceCardContainer,
} from './styles';
import resturantImg from '../../assets/pictures/explore/resturant_medium.jpg';
import experienceImg from '../../assets/pictures/explore/abseiling_medium.jpg';

export const FullStar = () => <Star><FontAwesome name="star" /></Star>;
export const HalfStar = () => <Star><FontAwesome name="star-half-o" /></Star>;
export const EmptyStar = () => <Star><FontAwesome name="star-o" /></Star>;

export const ExperienceCard = props => (
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

const Experiences = (props) => (
    <ExperiencesContainer>
      <div innerRef={props.innerRef}>
        <ExperienceCardContainer>
          <ExperienceCard
            img={experienceImg}
            title={'Experiences'}
            price={52}
            description={'A fantastic day out on Stanage Edge in the beautiful Peak district'}
          />
        </ExperienceCardContainer>
      </div>
      <div>
        <ExperienceCardContainer>
          <ExperienceCard
            img={resturantImg}
            title={'Experiences'}
            price={25}
            description={'A delicious meal to 2 with friends'}
          />
        </ExperienceCardContainer>
      </div>
      <div>
        <ExperienceCardContainer>
          <ExperienceCard
            img={experienceImg}
            title={'Experiences'}
            price={52}
            description={'A fantastic day out on Stanage Edge in the beautiful Peak district'}
          />
        </ExperienceCardContainer>
      </div>
      <div>
        <ExperienceCardContainer>
          <ExperienceCard
            img={resturantImg}
            title={'Experiences'}
            price={25}
            description={'A delicious meal to 2 with friends'}
          />
        </ExperienceCardContainer>
      </div>
      <div>
        <ExperienceCardContainer>
          <ExperienceCard
            img={experienceImg}
            title={'Experiences'}
            price={52}
            description={'A fantastic day out on Stanage Edge in the beautiful Peak district'}
          />
        </ExperienceCardContainer>
      </div>
      <div>
        <ExperienceCardContainer>
          <ExperienceCard
            img={resturantImg}
            title={'Experiences'}
            price={25}
            description={'A delicious meal to 2 with friends'}
          />
        </ExperienceCardContainer>
      </div>
    </ExperiencesContainer>
);

export default Experiences;


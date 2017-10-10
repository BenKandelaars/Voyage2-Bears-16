import React from 'react';
import 'font-awesome/css/font-awesome.css';
import Carousel from '../Carousel/Carousel';
import { Container } from './styles';
import { ExperienceCard, HomesCard } from '../Cards/Cards';
import experienceImg from '../../assets/pictures/explore/abseiling_medium.jpg';
import resturantImg from '../../assets/pictures/explore/resturant_medium.jpg';
import homeImg from '../../assets/pictures/explore/home_medium.jpg';

const experiencesData = [{
  img: experienceImg,
  title: 'Experiences',
  price: 52,
  description: 'A fantastic day out on Stanage Edge in the beautiful Peak district'
},
{
  img: resturantImg,
  title: 'Experiences',
  price: 25,
  description: 'A delicious meal to 2 with friends'
},
];

const homes = [{
  img: homeImg,
  title: 'Villa',
  price: 52,
  description: 'Light and spacious, weekend away',
  spaceType: 'Entire Villa',
  beds: '5 bed',
}];

class LandingContent extends React.Component {
  render() {
    return (
      <Container>
        <Carousel
          groupTitle="Experiences"
          card={ExperienceCard}
          {...experiencesData[0]} 
        />
        <Carousel
          groupTitle="Resturants"
          card={ExperienceCard}
          {...experiencesData[1]} 
        />
        <Carousel
          groupTitle="Homes"
          card={HomesCard}
          {...homes[0]} 
        />
      </Container>
    );
  }
};

export default LandingContent;

import React from 'react';
import 'font-awesome/css/font-awesome.css';
import Carousel from '../Carousel/Carousel';
import { Container } from './styles';
import { ExploreCards, ExperienceCard, HomesCard, DestinationCard } from '../Cards/Cards';
import experienceImg from '../../assets/pictures/explore/abseiling_medium.jpg';
import resturantImg from '../../assets/pictures/explore/resturant_medium.jpg';
import homeImg from '../../assets/pictures/explore/home_medium.jpg';
import londonImg from '../../assets/pictures/destinations/london_medium.jpg';
import newYorkImg from '../../assets/pictures/destinations/newYork_medium.jpg';
import parisImg from '../../assets/pictures/destinations/paris_medium.jpg';
import krakowImg from '../../assets/pictures/destinations/krakow_medium.jpg';
import tokyoImg from '../../assets/pictures/destinations/tokyo_medium.jpg';

const experiencesData = [{
  img: experienceImg,
  title: 'Experiences',
  price: 52,
  description: 'A fantastic day out on Stanage Edge in the beautiful Peak district',
},
{
  img: resturantImg,
  title: 'Experiences',
  price: 25,
  description: 'A delicious meal to 2 with friends',
},
{
  img: experienceImg,
  title: 'Experiences',
  price: 52,
  description: 'A fantastic day out on Stanage Edge in the beautiful Peak district',
},
{
  img: resturantImg,
  title: 'Experiences',
  price: 25,
  description: 'A delicious meal to 2 with friends',
},
{
  img: experienceImg,
  title: 'Experiences',
  price: 52,
  description: 'A fantastic day out on Stanage Edge in the beautiful Peak district',
},
{
  img: resturantImg,
  title: 'Experiences',
  price: 25,
  description: 'A delicious meal to 2 with friends',
},
{
  img: experienceImg,
  title: 'Experiences',
  price: 52,
  description: 'A fantastic day out on Stanage Edge in the beautiful Peak district',
},
{
  img: resturantImg,
  title: 'Experiences',
  price: 25,
  description: 'A delicious meal to 2 with friends',
},
];

const homes = [{
  img: homeImg,
  title: 'Villa',
  price: 52,
  description: 'Light and spacious, weekend away',
  spaceType: 'Entire Villa',
  beds: '5 bed',
},
{
  img: homeImg,
  title: 'Villa',
  price: 52,
  description: 'Light and spacious, weekend away',
  spaceType: 'Entire Villa',
  beds: '5 bed',
},
{
  img: homeImg,
  title: 'Villa',
  price: 52,
  description: 'Light and spacious, weekend away',
  spaceType: 'Entire Villa',
  beds: '5 bed',
},
{
  img: homeImg,
  title: 'Villa',
  price: 52,
  description: 'Light and spacious, weekend away',
  spaceType: 'Entire Villa',
  beds: '5 bed',
},
{
  img: homeImg,
  title: 'Villa',
  price: 52,
  description: 'Light and spacious, weekend away',
  spaceType: 'Entire Villa',
  beds: '5 bed',
},
{
  img: homeImg,
  title: 'Villa',
  price: 52,
  description: 'Light and spacious, weekend away',
  spaceType: 'Entire Villa',
  beds: '5 bed',
},
];

const destinations = [
  {
    img: londonImg,
    title: 'London',
  },
  {
    img: newYorkImg,
    title: 'NewYork',
  },
  {
    img: krakowImg,
    title: 'Krakow',
  },
  {
    img: tokyoImg,
    title: 'Tokyo',
  },
  {
    img: parisImg,
    title: 'Paris',
  },
];

class LandingContent extends React.Component {
  render() {
    return (
      <Container>
        <ExploreCards />
        <Carousel
          groupTitle="Experiences"
          card={ExperienceCard}
          cardCount={experiencesData.length}
          data={experiencesData}
        />
        <Carousel
          groupTitle="Resturants"
          card={ExperienceCard}
          cardCount={experiencesData.length}
          data={experiencesData}
        />
        <Carousel
          groupTitle="Homes"
          card={HomesCard}
          cardCount={homes.length}
          data={homes}
        />
        {/* <Carousel
          groupTitle="Featured Destinations"
          card={DestinationCard}
          {...destinations}
        /> */}
        <Carousel
          groupTitle="Experiences"
          card={ExperienceCard}
          cardCount={experiencesData.length}
          data={experiencesData}
        />
      </Container>
    );
  }
}

export default LandingContent;

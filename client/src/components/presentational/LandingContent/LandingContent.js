import React from 'react';
import 'font-awesome/css/font-awesome.css';
import Carousel from '../Carousel/Carousel';
// import ExperiencesCarousel from '../Carousel/ExperiencesCarousel';
// import HomesCarousel from '../Carousel/HomesCarousel';
import { Container } from './styles';
import experienceImg from '../../assets/pictures/explore/abseiling_medium.jpg';

const experiencesData = [{
  img: experienceImg,
  title: 'Experiences',
  price: 52,
  description: 'A fantastic day out on Stanage Edge in the beautiful Peak district'
}];


class LandingContent extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Carousel groupTitle="Experiences" {...experiencesData} />
          {/* <Carousel>
            <ExperiencesCarousel />
          </Carousel> */}
        </div>
        <div>
          <Carousel title="Homes" />
        {/*
        <HomesCarousel /> */}
        </div>
      </Container>
    );
  }
};

export default LandingContent;

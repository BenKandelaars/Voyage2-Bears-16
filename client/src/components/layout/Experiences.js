import React from 'react';
import { ExperienceCard } from '../presentational/Cards/Cards';
import experienceImg from '../assets/pictures/explore/abseiling_medium.jpg';
import resturantImg from '../assets/pictures/explore/resturant_medium.jpg';
import Carousel from '../presentational/Carousel/Carousel';

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

const Experiences = () => (
  <article>
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
  </article>
);

export default Experiences;

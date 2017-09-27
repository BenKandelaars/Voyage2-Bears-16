import React from 'react';
import ImageListItem from './ImageListItem';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import { CarouselList, CarouselItem, CarouselWrapper } from './style.js';

const CarouselListView = () => {
  return (
    <CarouselWrapper>
      <LeftArrow /> 
        <CarouselList>
          <CarouselItem>1</CarouselItem>
          <CarouselItem>2</CarouselItem>
          <CarouselItem>3</CarouselItem>
          <CarouselItem>4</CarouselItem>
          <CarouselItem>5</CarouselItem>
          <CarouselItem>6</CarouselItem>
        </CarouselList>
      <RightArrow />  
    </CarouselWrapper>
  );
};

export default CarouselListView;
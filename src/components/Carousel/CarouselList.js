import React from 'react';
import ImageListItem from './ImageListItem';
import { CarouselList, CarouselItem, Wrapper } from './style.js';

const CarouselListView = () => {
  return (
    <Wrapper>
      <CarouselList>
        <CarouselItem><ImageListItem /></CarouselItem>
        <CarouselItem><ImageListItem /></CarouselItem>
        <CarouselItem><ImageListItem /></CarouselItem>
        <CarouselItem><ImageListItem /></CarouselItem>
        <CarouselItem><ImageListItem /></CarouselItem>
        <CarouselItem><ImageListItem /></CarouselItem>
        <CarouselItem><ImageListItem /></CarouselItem>
      </CarouselList>
    </Wrapper>
  );
};

export default CarouselListView;
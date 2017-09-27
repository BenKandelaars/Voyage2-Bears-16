import React from 'react';
import ImageListItem from './ImageListItem';
import { Slider, SliderItem, Wrapper } from './style.js';

const ImageList = () => {
  return (
    <Wrapper>
      <Slider>
        <SliderItem><ImageListItem /></SliderItem>
        <SliderItem><ImageListItem /></SliderItem>
        <SliderItem><ImageListItem /></SliderItem>
        <SliderItem><ImageListItem /></SliderItem>
        <SliderItem><ImageListItem /></SliderItem>
        <SliderItem><ImageListItem /></SliderItem>
        <SliderItem><ImageListItem /></SliderItem>
      </Slider>
    </Wrapper>
  );
};

export default ImageList;
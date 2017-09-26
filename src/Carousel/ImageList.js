import React from 'react';
import ImageListItem from './ImageListItem';
import { Slider, SliderItem } from './style.js';

const ImageList = () => {
  return (
    <Slider>
      <SliderItem><ImageListItem /></SliderItem>
      <SliderItem><ImageListItem /></SliderItem>
      <SliderItem><ImageListItem /></SliderItem>
      <SliderItem><ImageListItem /></SliderItem>
      <SliderItem><ImageListItem /></SliderItem>
      <SliderItem><ImageListItem /></SliderItem>
      <SliderItem><ImageListItem /></SliderItem>
    </Slider>

  );
};

export default ImageList;
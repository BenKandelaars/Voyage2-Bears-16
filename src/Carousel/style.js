import styled from 'styled-components';

export const Container = styled.div`
  max-width: 80%;
`;


// Caroucel 

export const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

export const LeftArrowStyle = styled.div`
  position: absolute;
  top: 50%;
`;

export const RightArrowStyle = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  `;

export const CarouselList = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const CarouselItem = styled.div`
  flex: 1 0 auto;
  margin-right: 1.2rem;
`;

// Slider 

export const Wrapper = styled.div`
  
`;

export const Slider = styled.div`
  overflow: scroll;
  white-space: nowrap;
`;

export const SliderItem = styled.a`
  margin-left: 1.2rem;
`;


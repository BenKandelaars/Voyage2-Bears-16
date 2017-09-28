import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
`;

// Caroucel 

export const CarouselWrapper = styled.div`
  position: relative;
  // background-color: grey;
  width: 65%;
  margin: 0 auto;
  padding: 10px 0;
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

export const CarouselListWrapper = styled.div`
  overflow: hidden;
`;

export const CarouselList = styled.div`
  margin: 0 30px;
  display: flex;
  width: 100%;
  height: 100%;
  // transform: translateX(${props => {props.visible}});
  position: relative;
  z-index: -1;
 
`;

export const CarouselItem = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  margin-right: 1.2rem;
  width: 200px;
  height: 300px;
  background-color: #eff0f1;
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


import styled from 'styled-components';
// import theme from '../../../stylesConfig';

export const CarouselWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto 50px;
  position: relative;
`;

export const CarouselListWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

export const CarouselList = styled.div`
  white-space: nowrap;
  display: flex;
  
  @media (min-width: 460px) {
    width: 100%;
    transform: translateX(${props => (props.visible ? props.visible : 0)}px);
    transition:all .5s ease-in-out;
  }
  @media (max-width: 460px) {
    overflow-x: auto;
    padding-bottom: 20px;
  } 
`;
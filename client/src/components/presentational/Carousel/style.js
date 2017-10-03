import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding-left: 10px;
`;

export const CarouselTopStyle = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
`;

export const CarouselTitle = styled.h1`
  position: absolute;
  display: inline-block;
  margin: 0;
  top: 60%;
  transform: translateY(-60%);
  left: 0;
`;

export const SeeAllStyle = styled.span`
  position: absolute;
  margin: 0;
  top: 60%;
  transform: translateY(-60%);
  right: 0;
  display: inline-block;
  font-size: .9rem;
  padding-right: 20px;
  
`;

// Caroucel

export const CarouselWrapper = styled.div`
  max-width: 1080px;
  height: 350px;
  margin: 0 auto 50px;
  white-space: nowrap;
  position: relative;
`;

export const CarouselListWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  margin-left: -10px;
`;

export const CarouselList = styled.div`
  @media (min-width: 460px) {
    width: 100%;
    transform: translateX(${props => props.visible ? props.visible : 0}px);
    transition:all .5s ease-in-out;
  }
  @media (max-width: 460px) {
    overflow-x: auto;
    padding-bottom: 20px;
  } 
`;

export const CarouselItemOuter = styled.div`
  display: inline-block;
`;

export const CarouselItemWrapper = styled.div`
  margin: 0 10px;
`;

export const CarouselImg = styled.div`
  background-color: #034f84;
  width: 250px;
  height: 300px;
`;

export const CarouselImg2 = styled.div`
  background-color: #c94c4c;
  width: 250px;
  height: 300px;
`;

export const CarouselText = styled.div`
  background-color: grey;
  width: 250px;
  height: 50px;
`;

export const LeftArrowStyle = styled.div`
    position: absolute;
    top: 50%;
    left: -30px;
    transform: translateY(-50%);
    z-index: 1;
`;

export const RightArrowStyle = styled.div`
  @media (min-width: 420px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    display: block;
    z-index: 1;
  }
  display: none;
  `;


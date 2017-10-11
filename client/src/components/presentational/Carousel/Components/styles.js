import styled from 'styled-components';
// import theme from '../../../../stylesConfig';

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

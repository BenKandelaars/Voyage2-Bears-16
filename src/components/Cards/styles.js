import styled from 'styled-components';
import theme from '../../stylesConfig';

export const SectionStyles = styled.div`
  height: 200px;
  width: 100%;
  padding: 20px;
  // background-color: #bad1b6;
`;

export const ExploreCardContainer = styled.div`
  display: flex;

  div {
    margin-right: 10px;
  }

  div:last-child {
    margin-right: 0px;
  }

  @media (min-width: 1130px) {
    width: 850px;
  }
`;

export const ExploreCardWrapper = styled.div`
  height: 25vw;
  width: 38vw;
  background-color: white;
  border: 1px solid ${theme.GREY_LIGHT};
  border-radius: 5px;
  overflow: hidden;
  background-color: orange;  
  box-shadow: 5px 5px 25px -6px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  img {
    height: auto;
    width: 100%;
  }

  div {
    min-height: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: white;  
    padding-left: 10px;
    
    h4 {
      margin: 0px;
      color: ${theme.GREY_MEDIUM}
    }
  }

  @media (min-width: 745px) {
    height: 70px;
    width: auto;
    flex-direction: row;
    flex-grow: 1;

    img {
      height: 100%;
      width: auto;
    }
  }
`;

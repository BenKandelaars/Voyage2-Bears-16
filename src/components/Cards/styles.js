import styled from 'styled-components';
import theme from '../../stylesConfig';

export const SectionStyles = styled.div`
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
  margin: 20px 0px;
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

export const FeaturedDestinationContainer = styled.div`
  min-height: 200px;
  width: 100%;
  display: flex;

  div {
    margin-right: 15px;
  }

  div:last-child {
    margin-right: 0px;
  }
`;

export const DestinationWrapper = styled.div`
  display: inline-block;
  width: 28vw;
  display: flex;
  flex-direction: column;

  img {
      height: 40vw;
      object-fit: cover;
    }

  div {
    display: flex;
    

    h4 {
      display: block;
      min-height: 30%;
      margin: 10px 0px;
      color: ${theme.GREY_MEDIUM}    
    }
  }
 

   @media (min-width: 750px) {
     width: 22vw;

     img {
       height: 32vw;
     }
   }

   @media (min-width: 1130px) {
     width: 160px;
     
     img {
       height: 235px;
       object-position: 0 80%;
  }
`;


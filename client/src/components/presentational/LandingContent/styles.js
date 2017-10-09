import styled from 'styled-components';
import theme from '../../../stylesConfig';

export const Container = styled.div`
  max-width: 1080px;
  margin-top: 150px;
  border-bottom: 1px solid green;
  `;

/*
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
  margin: 0 auto 50px;
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

// Card styling
export const SectionStyles = styled.div`
  width: 100%;
  padding: 20px;
`;

export const ExploreContainer = styled.div`
  display: flex;
  margin: 20px 0px;
  
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
  cursor: pointer;
  
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

export const DestinationsContainer = styled.div`
  width: 100%;
  margin: 20px 0px;
  
  div {
    margin-right: 15px;
  }

  div:last-child {
    margin-right: 0px;
  }
`;

export const DestinationWrapper = styled.div` 
    display: inline-block; 
    cursor: pointer;
`;


export const DestinationItem = styled.div`
  width: 28vw;
  display: flex;
  flex-direction: column;
  
  img {
      height: 40vw;
      width: 28vw;
      
      object-fit: cover;
      object-position: 0 100%;      
    }

  div {
    display: flex;
    
    h4 {
      margin: 5px 0px;      
      display: block;
      min-height: 30%;
      color: ${theme.GREY_MEDIUM}    
    }
  }
 
   @media (min-width: 750px) {
     width: 22vw;

     img {
       height: 32vw;
       width: 22vw;       
      }
   }

   @media (min-width: 1130px) {
     width: 160px;
     
     img {
       height: 235px;
       width: 160px;       
  }
`;

export const ExperiencesContainer = styled.div`
  width: 100%;  
  display: flex;
  margin: 20px 0px;
`;

export const ExperienceCardWrapper = styled.div`
`;

export const ExperienceCardContainer = styled.div`
  margin: 0 10px;
`;

export const ExperienceWrapper = styled.div`
  width: 42vw;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  img {
    height: 68vw;
    width: 42vw;    
    object-fit: cover;
    object-position: 40% 0%;
  }

  div {    
      p {
    margin: 5px 0px;
    display: block;
    color: ${theme.GREY_MEDIUM};    
    
      b {
        color: ${theme.BLACK};
      }
    }
  }

 @media (min-width: 750px) {
   width: 22vw;

   img {
     height: 32vw;
     width: 22vw;     
    }
 }

 @media (min-width: 1130px) {
   width: 250px;
   
   img {
     height: 375px;
     width: 250px;     
    }
`;

export const Star = styled.span`
    color: #466728;
    margin: 2px 2px 2px 0px;
`;

export const Reviews = styled.span`
    padding-left: 5px;
    font-size: 0.8rem;
    color: ${theme.BLACK};
`;

export const HomesContainer = styled.div`
width: 100%;  
display: flex;
margin: 20px 0px;

`;

export const HomesCardWrapper = styled.div`
`;

export const HomesCardContainer = styled.div`
margin: 0 10px;
`;

export const HomesWrapper = styled.div`
width: 59vw;
display: flex;
flex-direction: column;
cursor: pointer;

img {
  height: 38vw;
  width: 59vw;    
  object-fit: cover;
  object-position: 40% 0%;
}

div {    
    p {
      margin: 5px 0px;
      display: block;
      color: ${theme.GREY_MEDIUM};    
  
      b {
        color: ${theme.BLACK};
      }
    }
}

@media (min-width: 750px) {
 width: 46vw;

 img {
   height: 30vw;
   width: 46vw;     
  }
}

@media (min-width: 1130px) {
 width: 335px;
 
 img {
   height: 235px;
   width: 335px;     
  }
`;



*/
import styled from 'styled-components';
import theme from '../../../stylesConfig';

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
  
  div {
    margin-right: 15px;
  }

  div:last-child {
    margin-right: 0px;
  }
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
    color: ${theme.GREEN};
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

div {
  margin-right: 15px;
}

div:last-child {
  margin-right: 0px;
}
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
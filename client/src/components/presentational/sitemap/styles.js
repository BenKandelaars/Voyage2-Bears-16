import styled from 'styled-components';

export const Container = styled.div`
  border-top: 1px solid #D1D1D1;  
  margin-bottom: 10px;
`;

export const Wrapper = styled.div `
  display: flex;
  padding: 50px 20px 40px 20px;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #D1D1D1;

  @media (min-width: 1130px) {
    width: 900px;
    margin: auto; 
  }

  article {
    margin-top: 0px;
    margin-right: 10px;
    padding-top: 0px;
    text-align: left;  
  }
`;

export const Lists = styled.article`
  padding-left: 60px;
  flex-basis: 24%;

  @media (max-width: 750px) {
    display: none;
  }

  h4 {
    margin-top: 0px;
    font-size: 0.9rem;  
    color: #4D4A4A;  
  }

  ul {
    list-style-type: none;
    text-align: left;  
    padding-left: 0px;
    font-size: 0.9rem;
    line-height: 1.25rem;
    color: #5d5a5a;
  }

`;

export const RegionalSelection = styled.article`
  flex-grow: 2;
  display: flex;
  flex-direction: column;

  select {
    font-size: 1.1rem;
    color: #5d5a5a;
    padding: 12px;
    margin-bottom: 16px;
    width: 100%;
  }

  @media (max-width: 750px) {
    flex-direction: row;
   
    select:first-child {
      margin-right: 20px;
    }
  }
`;


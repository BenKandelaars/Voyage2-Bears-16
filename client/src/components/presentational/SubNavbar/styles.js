import styled from 'styled-components';
import theme from '../../../stylesConfig';

export const Wrapper = styled.div`
  margin-top: 250px;
  width: 100%;

  a {
    margin-right: 30px;
    text-decoration: none;
    color: ${theme.BLACK};
    font-size: 0.8rem;
  }
`;

export const LinkStyles = styled.div `
  display: inline-block;

  a {  
    ${props => (
      props.selected ? `
        color: ${theme.GREEN};
        padding-bottom: 10px;
        border-bottom: 2px solid ${theme.GREEN};
      ` : ''
      )
    }
  }
`;


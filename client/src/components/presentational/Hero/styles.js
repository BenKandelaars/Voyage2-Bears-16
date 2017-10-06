import styled from 'styled-components';

export const HeroContainer = styled.div`
    margin: 0;

`;

export const HeaderContainer = styled.div`
    // max-width: 1080px;
    margin-top: 2em;
    margin-bottom: 2em;
    // margin-left: auto;
    // margin-right: auto;
`;

export const Header = styled.div`
    box-sizing: border-box;
    display: block;
    padding: 0.8em;

    h1 {
        color: #FF5A60;
        font-size: 1.7em;
        margin: 0;

        @media(min-width: 750px){
            font-size: 3.3em;
        }
    }
    
    p {
        font-size: 1.2em;
        margin: 0;

        @media(min-width: 750px){
            font-size: 3.2em;
            
        }
        @media(min-width: 1100px){
            max-width: 550px;
        }
    }
`;

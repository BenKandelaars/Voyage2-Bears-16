import styled from 'styled-components';

export const HeroContainer = styled.div`
    margin: 0;

`;

export const HeaderContainer = styled.div`
    max-width: 1080px;
    margin-top: 2em;
    margin-bottom: 2em;
    margin-left: auto;
    margin-right: auto;

`;

export const Header = styled.div`
    box-sizing: border-box;
    display: block;
    padding: 0.8em;
    

    h1 {
        color: #FF5A60;
        font0size: 0.7em;
        margin: 0;

        @media(min-width: 800px){
            font-size: 1.2em;
        }
    }
    p {
        font-size: 1.2em;
        margin: 0;

        @media(min-width: 800px){
            font-size: 1.8em;
        }
    }
`;

import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    border: 1px solid #DBDBDB;
    border-radius: 3px;
    margin: 0.8em;
    padding: 0;
    align-items: center;


`;
export const ButtonWrapper = styled.div`
    padding: 0.7em;
`;

export const Button = styled.div`
    background-color: #FF5A60;
    color: white;
    border-radius: 5px;
    padding:0.45em 0.45em;
    font-size: 1.4em;
   

    @media(max-width:1080px){
        display: none;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: 0.7em 0em;
    box-sizing: border-box;
    align-items: center;

    @media(min-width:750px){
        padding: 0.7em;
        width: 30%;

        :nth-last-child(-n+2){
            border-left: 1px solid #DBDBDB;
        }
    
    }
    
`;
export const Icon = styled.div`
    padding: 0em 0.3em;
    font-size: 1em ;

    @media(min-width:1080px){
        display: none;
    }
`;
export const Icon1 = Icon.extend`
    @media(max-width:750px){
        display:none;
        
    }
`;
export const Dot = styled.div`
    display: flex;
    font-size: 0.1em;
    display:none;
    padding: 0.4em;

    div {
        align-self: center;
    }

    @media(max-width:750px){
        display:block;
    }

`;
export const Logo = styled.div`
    color: #767676;
    display:block;

`;

export const InputWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
   
    @media(min-width:750px){
        width:100%;
    }
`;

export const InputPlusLabel = styled.div`
    display: flex;
    flex-flow: column wrap;
    
    input {
        display: flex;
        border: none;

        :focus{
            outline: none;
            placeholder: none;
        }
        @media(max-width:750px){
            max-width: 80px;
        }
        @media(max-width:1080px){
            height:100%;
        }
        
    }

    input::-webkit-input-placeholder {
        font-size: 1.25em;
        
        @media(max-width:750px){
            color: black;
        }
    }

    p {
        display: none;
        font-size: 1em;

        @media(min-width:1080px) {
            display: inline;
            padding: 0.2em 0em;
            margin: 0.2em 0em;
        }
    }
`;


//----------- Guest Dropdown Part ------------------

export const GuestWrapper = styled.div`
    position: relative !important;
    top: 0px;


    div {
        display: block;
    }

`;

export const GuestMenu = styled.div`
    background-color: #ffffff;
    position: absolute !important;
    z-index: 10;
    left: 0px;
    top: 73px;
    width: 300px;
    padding: 1.5em 0em;
    font-size: 1.25em;
    border: 1px solid #DBDBDB;
    
    div {
        display: block;
        padding: 0.8em 0.7em;
    }

`;

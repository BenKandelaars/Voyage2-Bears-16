import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    flex-flow: row no-wrap;
    border: 1px solid grey;
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
    flex-flow: row no-wrap;
    padding: 0.7em;
    
    @media(min-width: 800px){
        width: 30%;
    }

    :nth-last-child(-n+3){
        border-left: 1px solid grey;
    }

`;
export const Icon = styled.div`
    padding: 0em 0.3em;
    font-size: 1em ;

    @media(min-width:1080px){
        display: none;
    }
`;
export const LOGO = styled.div`
    color: grey;
    display:block;

    
`;

export const InputPlusLabel = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    
    input {
        border: none;
        :focus{
            outline: none;
            placeholder: none;
        }
        @media(max-width:1080px){
            height:100%;
        }
        
    }

    input::-webkit-input-placeholder {
        font-size: 1.35em;
    }

    select {
        border: none;
        :focus{
            outline: none;

        }
        @media(max-width:1080px){
            height:100%;
        }
    }

    p {
        display: none;
        font-size: 1em;
        @media(min-width:800px) {
            padding: 0.2em 0em;
            margin: 0.2em 0em;
        }
        @media(min-width:1080px) {
            display: inline;
        }
    }
`;
import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    flex-flow: row no-wrap;
    border: 1px solid grey;
    border-radius: 3px;
    margin-top: 2.5em;
    padding:1.2em;
    align-items: center;
`;

export const Button = styled.div`
    background: red;
    color: white;

    border-radius: 4px;
    padding:auto;
    text-align: center;
    veritcal-align: center;
    
`;

export const InputPlusLabel = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 30%;
    
    input {
        @media(max-width:800px){
            height:100%;
        }
        
    }
    select {
        @media(max-width:800px){
            height:100%;
        }
    }
    p {
        display: none;
        @media(min-width:800px) {
            display: inline;
        }
    }
    label {
        display: none;
        @media(min-width:800px) {
            display: inline;
        }
    }
`;
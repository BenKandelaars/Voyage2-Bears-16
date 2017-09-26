import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    flex-flow: row no-wrap;
    div {
        min-width: 10%;
    }
`;

export const Button = styled.button`
    background: red;
    color: white;
    border: 2px solid red
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;  
`;

export const InputPlusLabel = styled.div`
    display: flex;
    flex-flow: column wrap;
    input {
        
    }
`;
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

export const InputWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;

    @media(min-width:750px){
        width:100%;
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
        width: 34%;

        :nth-last-child(-n+4){
            border-left: 1px solid #DBDBDB;
        }
    
    }
    
`;

export const InputGroup2 = styled(InputGroup)`
    max-width:215px;
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

// ----------- Guest Dropdown Part ------------------

export const GuestWrapper = styled.div`
    position: relative !important;
    top: 0px;

    div {

        display: block;
    }

    @media(max-width:1079px){
        display:none;
    }
`;

export const GuestMenu = styled.div`
    background-color: #ffffff;
    position: absolute !important;
    z-index: 10;
    left: 0px;
    top: 73px;
    width: 250px;
    padding: 1.5em 0em;
    font-size: 1.25em;
    border: 1px solid #DBDBDB;
    
    div {
        display: block;
        padding: 0.8em 0.7em;
    }
`;

export const CounterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding:0;

    div {
        min-width:70px;
        margin:0;
        padding:0;
        display:flex;
        justify-content: space-between;
    }
    button {
        background: #ffffff;
        border:none;
        font-size: 1em;
    }
`;

// ------------ Overlay ------------------
export const Overlay = styled.div`  
height: 100%;
width: 0;
position: fixed; /* Stay in place */
z-index: 1; /* Sit on top */
left: 0;
top: 0;
background-color: rgb(252, 250, 250);
overflow-x: hidden; 
transition: 0.5s; 
`;

/* Position the content inside the overlay */
export const OverlayContent = styled.div`
position: relative;
top: 25%; 
width: 100%;
text-align: center;
margin-top: 30px;
`;


/* Position the close button (top right corner) */
export const CloseBTN = styled.button`
position: absolute;
top: 20px;
right: 45px;
font-size: 60px;
`;

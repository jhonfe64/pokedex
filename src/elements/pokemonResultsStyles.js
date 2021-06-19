import styled from 'styled-components';

const PokeResults = styled.div`
    width: 50%;
    padding: 20px;
    padding-bottom: 0;

    & button:nth-child(4) {
        background-color: #cff5fc;
        border: none;
        border-radius: 5px;
        color: #000000;
        padding: 10px 0;
        width: 100%;

        & svg {
            margin-top: 4px;
            padding-left: 12px;
        }
    }

    @media only screen and (max-width:817px){
        width: 100%;
        padding: 0;
    }

    
`

export default PokeResults;
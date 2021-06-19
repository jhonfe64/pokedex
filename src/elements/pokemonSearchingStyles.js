import styled from 'styled-components';
const PokeSearch = styled.div`

    & div:nth-child(1) {
        width: 100% !important;
        display: flex;
        margin-bottom: 20px;
        
        & input {
            border: 1px solid #ecf0f1;
            width: 90%;
            padding: 7px;
            border-radius: 5px 0px 0px 5px;
            border-right: none;

                &:focus {
                outline: 0;
            }
        }
    }

    & div + div {
        background-color: #f8d7da;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 20px;

        svg {
            padding-right: 10px;
        }
    }

    & button {
        width: 10%;
        border: none;
        background-color: red;
        border-radius: 0px 5px 5px 0px;
        color: #ffffff;
    }

    @media only screen and (max-width:817px){
        margin-top: 20px;
    }
`

export default PokeSearch;
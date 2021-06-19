import styled from 'styled-components';
const PokeDetails = styled.div`
    width: 50%;
    padding: 30px;
    background-color: aliceblue;
    border-radius: 10px;

    & div:first-child {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
        div {
            width: 20px;
            height: 20px;
            border-radius: 100%;
        }

        div.red {
            background-color: red;
            margin-right: 5px;
            box-shadow: 2px 2px 5px red;
        }

        div.yellow {
            background-color: yellow;
            margin-right: 10px;
            box-shadow: 2px 2px 5px yellow;
        }

        div.green {
            background-color: green;
            box-shadow: 2px 2px 5px green;
        }
    }

    & div.defaultImage {
        background-color: #ecf0f1;
        border-radius: 10px;
            img {
            width: 40%;
            display: block;
            margin: auto;
            padding: 50px 0;
        }
        & + div {
            background-color: #ecf0f1;
            padding: 30px;
            color: #000000;
            border-radius: 10px;
            font-size: 1.1rem;

            & h3 {
                margin:0;
                margin-bottom: 10px;
            }

            & span {
                font-weight: 300;
                text-transform: capitalize;
            }
        }
    }

    @media only screen and (max-width:817px){
        width: 100%;
        background: none;
        padding: 0;
    }
`

export default PokeDetails;
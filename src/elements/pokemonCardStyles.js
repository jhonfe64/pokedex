import styled from "styled-components";

const PokeCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    & div {
        width: 150px;
        margin-bottom: 40px;
        border: 1px solid #ecf0f1;
        padding: 10px 0;
        border-radius: 5px;

        @media only screen and (max-width:1327px){
            width: 45%;
        }

        @media only screen and (max-width:500px){
        width: 100%;
        }

        &:hover {
            box-shadow: 1px 1px 5px rgba(0,0,0,.3);
            transition: all .3s;
        }
    }

    & div img {
        display: block;
        margin: auto;
    }

    & div h3 {
        text-align: center;
        margin: 0;
        text-transform: capitalize;
    }
`

export default PokeCard;
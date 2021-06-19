import styled from "styled-components";

const PokedexMain = styled.div`
    width: 60%;
    margin: 30px auto;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    padding: 30px;
    border: 1px solid #ecf0f1;

    @media only screen and (max-width:1757px){
        width: 80%;
    }
    @media only screen and (max-width:1327px){
        width: 90%;
    }

    @media only screen and (max-width:817px){
        flex-wrap: wrap;
        padding: 15px;
        flex-direction: column-reverse;
    }

`

export default PokedexMain;
import styled from "styled-components";

const PokeFilters = styled.div`
    margin-bottom: 20px;
    
    & button {
        background-color: #ecf0f1;
        border: none;
        padding: 7px 40px;
        border-radius: 5px;
        color: #000000;
        cursor: pointer;

        &:hover {
            background-color: #bdc3c7;
            transition: all .3s;
        }
    }

`
export default PokeFilters;
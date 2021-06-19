import React from 'react';
import PokedexMain from '../elements/pokedexStyles';
import PokemonResults from './PokemonResults';
import PokemonDetails from './PokemonDetails';

function Pokedex() {
    return (
        <PokedexMain style={{display: 'flex'}}>
            <PokemonResults/>
            <PokemonDetails/>
        </PokedexMain>
    )
}

export default Pokedex

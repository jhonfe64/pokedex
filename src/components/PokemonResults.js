import React, {useContext, useEffect, useState} from 'react';
import {PaginationContext} from '../context/pagination';
//getting useFetch to fetch url
import useFetch from '../hooks/useFetch';
import PokemonCard from '../components/PokemonCard';
import PokeResults from '../elements/pokemonResultsStyles';
import Searching from '../components/Searching';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Filters from '../components/Filters'

function PokemonResults() {
    const {pokemosPerPage, updatePokemosPerPage} = useContext(PaginationContext);

    const [data] = useFetch(`https://pokeapi.co/api/v2/pokemon/?offset=${pokemosPerPage}?&limit=6`, pokemosPerPage);

    const loadMorePokemons = () => {
        //updating amount of pokemos to see in intervals of 9 elements
        updatePokemosPerPage(pokemosPerPage + 6);
    }

    return (
        <PokeResults>
            <Searching />
            <Filters />
            {
                data.results !== undefined && <PokemonCard data={data.results} />
            }
            <button onClick={loadMorePokemons}>See more pokemons <FontAwesomeIcon icon={faAngleDown} /></button>
        </PokeResults>
    )
}

export default PokemonResults

import React, {useContext} from 'react';
import PokeFilters from '../elements/pokemonFiltersStyles';
import {FilterContext} from '../context/filters';


function Filters() {

    const {updateFilters} = useContext(FilterContext);

    const handleFilter = (e) => {
        if(e.target.name === 'az'){
            updateFilters(true)
        }else if(e.target.name === 'random'){
            updateFilters(false)
        }
    }
    return (
        <PokeFilters>
            <button onClick={handleFilter} name="az">Sort A-Z</button>
        </PokeFilters>
    )
}

export default Filters;

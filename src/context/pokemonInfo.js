import React, {createContext, useState} from 'react';

const PokemonInfoContext = createContext();

function PokemonInfoContextProvider({children}){
    const [pokemonInfo, setPokemonInfo] = useState({})

    //Updating context function

    const  updatePokemonInfo = (pokemonInfo) => {
        setPokemonInfo(pokemonInfo);
    }

    return (
        <PokemonInfoContext.Provider value={{pokemonInfo, updatePokemonInfo}}>
            {children}
        </PokemonInfoContext.Provider>
    );
}

export {PokemonInfoContext, PokemonInfoContextProvider}

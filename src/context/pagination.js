import React, {createContext, useState} from 'react';

const PaginationContext = createContext();

function PaginationContextProvider({children}){
    const [pokemosPerPage, setPokemonsPerPage] = useState(6);

    //updating context
    const updatePokemosPerPage = (pokemonsPerPage) => {
        setPokemonsPerPage(pokemonsPerPage)
    }


    return (
        <PaginationContext.Provider value = {{pokemosPerPage, updatePokemosPerPage}}>
            {children}
        </PaginationContext.Provider>
    )
}

export {PaginationContext, PaginationContextProvider}



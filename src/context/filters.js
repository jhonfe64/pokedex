import React, {createContext, useState} from 'react';
const FilterContext = createContext();

function FilterContextProvider({children}){
    const [filters, setFilters] = useState(false);

    //Updating context
    const updateFilters = (filter) => {
        setFilters(filter)
    }

    return (
        <FilterContext.Provider value={{filters, updateFilters}}>
            {children}
        </FilterContext.Provider>
    )
}

export {FilterContext, FilterContextProvider}
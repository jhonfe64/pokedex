import React, {useEffect, useContext, useState} from 'react';
import {PokemonInfoContext} from '../context/pokemonInfo';
import useFetch from '../hooks/useFetch';
import PokeCard from '../elements/pokemonCardStyles';
import {FilterContext} from '../context/filters';


function PokemonCard({data}) {

  const {filters} = useContext(FilterContext);
  const {updatePokemonInfo} = useContext(PokemonInfoContext);
  let [pokemons, setPokemons] = useState([]);

//Getting info from custome hook fetch
function GetAllPokemons(pokemonName, dataParam){
  var [data] = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, dataParam);
  useEffect(()=>{
    setPokemons((pokemons)=> pokemons.concat(data));
  },[data])
}

const getPokemonName = () => {
  for(let i=0; i < data.length; i++){
    const pokemonName = (data[i].name);
    GetAllPokemons(pokemonName, data);
  }
}
getPokemonName();

const handlePokemonInfo = (pokeInfo) => {
  updatePokemonInfo({
    id: pokeInfo.id,
    name: pokeInfo.name,
    type: pokeInfo.types[0].type.name,
    abilities: pokeInfo.abilities,
    image: pokeInfo.sprites.front_default
  });
  window.scrollTo(0,0);
}

if(filters === true){
    //sorting pokemons by name
    pokemons.sort(function(a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    });
}
    
    return(
        <PokeCard>
            {
                pokemons.map((pokeInfo)=>{
                    return(
                      <div  key={pokeInfo.name}  onClick={()=>handlePokemonInfo(pokeInfo)}>
                        <img src={pokeInfo.sprites.front_default} alt={pokeInfo.name} />
                        <h3>{pokeInfo.name}</h3>
                      </div>
                    )
                })
            }
        </PokeCard>
    )
}

export default PokemonCard;

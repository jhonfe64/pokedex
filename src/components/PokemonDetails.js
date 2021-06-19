import React, {useContext} from 'react';
import PokeDetails from '../elements/pokemonDetailsStyles';
import {PokemonInfoContext} from '../context/pokemonInfo';

function PokemonDetails() {
  const {pokemonInfo} = useContext(PokemonInfoContext);
 

    return (
        <PokeDetails>
            <div>
                <div className="red"></div>
                <div className="yellow"></div>
                <div className="green"></div>
            </div>
           {
                Object.entries(pokemonInfo).length !== 0 ?
                <div>
                    <div className="defaultImage">
                        <img src={pokemonInfo.image} alt={pokemonInfo.name} />
                    </div>
                    <div>
                        <h3>Id: <span>{pokemonInfo.id}</span></h3>
                        <h3>Pokemon: <span>{pokemonInfo.name}</span></h3>
                        <h3>Pokemon type: <span>{pokemonInfo.type}</span></h3>
                        <div>
                        <h3>Abilities: </h3>
                        {
                            pokemonInfo.abilities.map((abilitie)=>{
                                return <h3><span>- {abilitie.ability.name}</span></h3>
                            })
                        }
                        </div>
                    </div>
                </div>
                :
                <div className="defaultImage">
                    <img src="./img/pokeBall.png" alt="pokeball" />
                </div>
           }
            
        </PokeDetails>
    )
}

export default PokemonDetails;

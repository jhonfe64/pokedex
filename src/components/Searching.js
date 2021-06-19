import React, {useState, useEffect, useContext} from 'react';
import PokeSearch from '../elements/pokemonSearchingStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faExclamation } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../hooks/useFetch';
import {PokemonInfoContext} from '../context/pokemonInfo';

function Searching() {
    //pokemonInfo context
    const {updatePokemonInfo} = useContext(PokemonInfoContext);

    const [pokemonName, setPokemonName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [searchingAlert, setSearchingAlert] = useState(false);
    const [btnState, setBtnState] = useState(false);


    var [data] = useFetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`, inputValue);

    const handleBtn = () => {
        setBtnState(true)
        if(pokemonName !== ''){
            setInputValue(pokemonName.trim());
            setSearchingAlert(false);
        }else{
            setSearchingAlert(true);
            setBtnState(false);
        }
    }

    const handleInputValue = (e) => {
        setPokemonName(e.target.value);
    }

    useEffect(()=>{ 
        if(data.name !== undefined && btnState === true ){
            setPokemonName('')
            setInputValue('')
            updatePokemonInfo({
                id: data.id,
                name: data.name,
                type: data.types[0].type.name,
                abilities: data.abilities,
                image: data.sprites.front_default
            })
        }
    },[data.name, btnState])

    return (
        <PokeSearch>
            <div>
                <input type="text" value={pokemonName} onChange={handleInputValue} placeholder="Pokemon name" />
                <button onClick={handleBtn}><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            {
                searchingAlert === true  &&  <div><FontAwesomeIcon icon={faExclamation} />Fill in the blank field</div>
                
            }
            {
              inputValue.length > 0 &&  btnState === true &&  <div><FontAwesomeIcon icon={faExclamation} />No pokemon found</div>
              
            }
        </PokeSearch>
    )
}

export default Searching

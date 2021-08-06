import React, { useEffect, useState } from 'react';
import HeaderPokePage from '../components/HeaderPokePage';
import DescPokemon from '../components/DescPokemon'
import { useParams } from 'react-router-dom';





function PokemonPage(){
    const [pokeData, setpokeData] = useState([])
    
    const { pokemon }=useParams();
    useEffect(async ()=>
        {const response = await fetch(`/v1/pokemon/${pokemon}`)
        const data = await response.json()
        setpokeData(data[0])
        }
    ,[])


        
        
        
        

    return(
        <section>
            <HeaderPokePage name={pokemon} num={`#${pokeData.number}`} />
            <DescPokemon  img={pokeData.sprite}/>
        </section>
    )
    
}

export default PokemonPage;
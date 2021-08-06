import React from 'react'
import PokemonFisico from './PokemonFisico'
import PokemonBaseStats from './PokemonBaseStats'

function DescPokemon(props){
    return(
        <section>
            <PokemonFisico img={props.img}/>
            <PokemonBaseStats/>
        </section>

    )
}

export default DescPokemon;
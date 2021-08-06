import React from 'react'
import PokeHabilidades from './PokeHabilidades'

function PokemonBaseStats(props){
    return(
        <div>
            <p>About</p>
            <div>
                <p><span></span></p>
                <p><span></span></p>
                <p><span></span></p>
            </div>
            <p></p>
            <div>
                <PokeHabilidades/>
            </div>
        </div>
    )
}

export default PokemonBaseStats;
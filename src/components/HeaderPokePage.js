import React from 'react'
import { Link } from 'react-router-dom';
import fondo from '../imagenes/fondoPokeball.svg'
import back from '../imagenes/arrow-left.svg'

function HeaderPokePage(props){

    

    return(
        <div>
            <Link to='/'><img src={back} /></Link>
            <h1>{props.name}</h1>
            <p>{props.num}</p>
            <img src={fondo}/>
        </div>
    )

}

export default HeaderPokePage;
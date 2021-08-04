import React from 'react'
import pokeball from '../imagenes/pokeball.svg'
import './styles/header.css'
class Header extends React.Component{
    render(){
        return(
            <div className='header-container'>
                <img src={pokeball} alt="Logo Pokeball" />
                <p>Pokédex</p>
                <button type='button'></button>
            </div>
        )
    }
}

export default Header;
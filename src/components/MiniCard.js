import React from 'react'
import './styles/minicard.css'

class MiniCard extends React.Component{
    state = {
        imagen:[],
        number:0,
        types:[1],
    }

    componentDidMount(){
        this.tomarPokeData(`${this.props.name}`)    
    }

    componentDidUpdate(prevProps){
        if (this.props.name !== prevProps.name) {
            this.tomarPokeData(this.props.name);
          }
        
    }

    async tomarPokeData(nombre){
        const response = await fetch(`/v1/pokemon/${nombre}`)
        const datos = await response.json()
        this.setState({
            imagen: datos[0].sprite,
            number: datos[0].number,
            types: datos[0].types[0]
        })
        console.log(this.state.types)
    }

    

    render(){
        
        const tipoPoke = `bg-${this.state.types}`
        
        return(
            <div className="miniCard">
                <span >#0{this.state.number}</span>
                <img src={this.state.imagen} alt={this.props.name}/>
                <p className={tipoPoke.toLowerCase()}>{this.props.name}</p>
                
            </div>
        )
    }
}

export default MiniCard;
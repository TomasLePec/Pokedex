import React from 'react'
import MiniCard from './MiniCard'
import PokemonPage from '../pages/PokemonPage'

/* class Pokemons extends React.Component{
    state = {
        data:[],
        filtrados:[],
        query:""
    }

    componentDidMount(){
        this.fetchPokemons()
    }

    fetchPokemons = async ()=> {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
        const data = await response.json()
        this.setState({data: data.results})
        console.log(this.state)
    }
    

    
    render(){
        
        const filtro = this.state.data.filter((pokes)=>{
            return pokes.name.includes(this.state.query)
            })
        
        return(
            <div>
            
            <label>Filtro</label>
            <input type="text" value={this.state.query} onChange={(e)=>{
                this.setState({query: e.target.value})
                console.log(this.state.query)
                
                this.setState({filtrados: filtro})
                console.log(this.state.filtrados)
                
            }}/>
            <h1>Holi</h1>
            
            
            </div>
            
        )

    }
} */




function Pokemons(){
    const [charge,setCharge] = React.useState(false)
    const [data,setData] = React.useState([])
    const [query,setQuery] = React.useState('')
    
    if(!charge){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
        .then(response => response.json())
        .then(data => setData(data.results),
        setCharge(true))
    }
    


    const filtrados = data.filter(poke =>{
        return poke.name.includes(query)    
    })
    console.log(filtrados)
    
       
    return (
        
            <div className='miniCard-container'>
                <label>Filtro</label>
                <input type="text" value={query} onChange={(e)=>{
                    setQuery(e.target.value)
                    console.log(query)
                }}/>
            
           { !query && charge ? 
               ( data.map(p =>
                
                <MiniCard name={p.name}/>)) 
               : (
                 filtrados.map(p => {   
                    return(<MiniCard name={p.name}/>)
                 })
                )
                
            }
            </div>
    )
}



export default Pokemons;
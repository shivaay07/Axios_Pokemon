import React,{useState,useEffect} from 'react';
import axios from 'axios';

const DisplayPokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(
        ()=>{
            // handleClick()
        },[]
    )

    // this is for axios 
    const handleClick = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(getResponse =>{
            
            console.log(getResponse)
            setPokemons(getResponse.data.results)

            })
            
        .catch((error) =>{
            console.log('Error:', error)
        })
    }

    let content = (
        pokemons.length ===0?
        <h3>please wait, fetching data</h3>
        :
        <ul>
            {pokemons.map(
                (poke,idx) =>{
                    return <li key={idx}>{poke.name}+"with index"+{idx}</li>
                        
                }
            )}
        </ul>
    )
    // this is fetch type method
    
    // const handleClick = () =>{
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
    //     .then(response => response.json())
    //     .then(getResponse =>{
            
    //         console.log(getResponse)
    //         setPokemons(getResponse.results)

    //     })
            
    //     .catch((error) =>{
    //         console.log('Error:', error)
    //     })
    // }
        
        

    return (
        <div>
            {/* {JSON.stringify(pokemons)} */}
            {/* <button onClick={handleClick}>Fetch Pokemon</button> */}
            <button onClick={handleClick}>Axios Pokemon</button>
            {content}
            {/* <ul>
                {pokemons.length> 0 && pokemons.map(
                    (poke,idx) =>{
                        return <li key={idx}>{poke.name}+"with index"+{idx}</li>
                        
                    }
                )}
            </ul> */}
        </div>
    )
}

export default DisplayPokemon;

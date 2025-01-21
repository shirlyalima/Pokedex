import React from 'react'
import Navbar from '../components/Navbar'
import PokemonCard from '../components/PokemonCard'
import { Box } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Grid from '@mui/material/Grid2'



export const Home = () => {
   const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);
  
  //API
  const getPokemons = () => {
    var endpoints = []
    for (var i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  }
   axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  //Constante de busca
  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if(name===""){
      getPokemons()
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  }

//Estilização Navbar e Cards
  return (
  <div>
    <Navbar pokemonFilter={pokemonFilter} />
    
     <Grid container spacing={2}>
      {pokemons.map((pokemon, key) => (
        <Grid size={4} key={key}>
        
          <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
           
      </Grid>      
        ))}
        </Grid>
     
    </div>
)
}

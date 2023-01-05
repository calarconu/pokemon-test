import logo from './logo.svg';
import './App.css';
import axios, {get} from 'axios';
import {useState} from "react";

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
  const [pokemonList, setPokemonList] = useState([]);

  function getPokemons() {
    axios.get(url).then((response) => {
      setPokemonList(response.data.results);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <div>
        <h1>Lista de pokemones</h1>
        <button onClick={() => getPokemons()}>Traer Pokemones</button>
      </div>
      {pokemonList.length === 0 ? 'No hay pokemones' : ''}
      {
        pokemonList.map((pokemon, index) => {
          return <p key={index}>{index + 1} {pokemon.name}</p>
        })
      }
    </div>
  );
}

export default App;

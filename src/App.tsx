import React, { useEffect, useState } from 'react';
import './App.css';
import { Pokemon } from './types/Pokemons';

import SearchBar from './components/SearchBar/SearchBar';
import { fetchPokemonList } from './api/fetchPokemonList';

function App() {
    const [pokemonData, setPokemonData] = useState<Pokemon>();
    const [pokemonList, setPokemonList] = useState<Pokemon[]>();
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            setPokemonList(await fetchPokemonList(9));
            setLoading(false);
        })();
    }, []);

    return <SearchBar setPokemonList={setPokemonList} setError={setError} setLoading={setLoading} />;
}

export default App;

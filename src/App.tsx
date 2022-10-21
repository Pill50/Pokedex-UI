import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { Pokemon } from './types/Pokemons';

import SearchBar from './components/SearchBar/SearchBar';
import { fetchPokemonList } from './api/fetchPokemonList';

function App() {
    const [pokemonData, setPokemonData] = useState<Pokemon>();
    const [pokemonList, setPokemonList] = useState<Pokemon[]>();
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState(1);
    const [showPagination, setShowPagination] = useState(true);
    const [disabledButton, setDisabledButton] = useState(false);

    const searchBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            setPokemonList(await fetchPokemonList(9));
            setLoading(false);
        })();
    }, []);

    useEffect(() => {
        setError(false);
    }, [pokemonList]);

    return (
        <SearchBar
            setPokemonList={setPokemonList}
            setError={setError}
            setLoading={setLoading}
            setPage={setPage}
            setShowPagination={setShowPagination}
            disabledButton={disabledButton}
            setDisabledButton={setDisabledButton}
            searchBarRef={searchBarRef}
        />
    );
}

export default App;

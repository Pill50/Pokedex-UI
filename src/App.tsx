import { useEffect, useState, useRef } from 'react';
import { Pokemon } from './types/Pokemons';

import SearchBar from './components/SearchBar/SearchBar';
import { fetchPokemonList } from './api/fetchPokemonList';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import { PokemonModal } from './components/PokemonModal';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import { Pokedex } from './components/Pokedex/Pokedex';

const cx = classNames.bind(styles);

function App() {
    const [modal, setModal] = useState(false);
    const [pokemonData, setPokemonData] = useState<Pokemon>();
    const [pokemonList, setPokemonList] = useState<Pokemon[]>();
    const [pokemonAmount, setPokemonAmount] = useState(9);
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
        <div className={cx('container')}>
            <Header />
            <SearchBar
                setPokemonList={setPokemonList}
                setError={setError}
                setLoading={setLoading}
                pokemonAmount={pokemonAmount}
                setPokemonAmount={setPokemonAmount}
                setPage={setPage}
                setShowPagination={setShowPagination}
                disabledButton={disabledButton}
                setDisabledButton={setDisabledButton}
                searchBarRef={searchBarRef}
            />
            <Pokedex
                setModal={setModal}
                setPokemonData={setPokemonData}
                pokemonList={pokemonList}
                setPokemonList={setPokemonList}
                pokemonAmount={pokemonAmount}
                setPokemonAmount={setPokemonAmount}
                error={error}
                loading={loading}
                setLoading={setLoading}
                page={page}
                setPage={setPage}
                showPagination={showPagination}
                setShowPagination={setShowPagination}
                searchBarRef={searchBarRef}
                disabledButton={disabledButton}
            />
            <Footer />
            {pokemonData && modal && <PokemonModal setModal={setModal} pokemonData={pokemonData} />}
        </div>
    );
}

export default App;

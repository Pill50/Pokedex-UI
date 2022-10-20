import React from 'react';
import className from 'classnames/bind';
import styles from './SearchBar.module.scss';
import { Pokemon } from '../../types/Pokemons';
import SearchField from '../SearchField/SearchField';

const cx = className.bind(styles);

type SearchBarProps = {
    setPokemonList: (data: Pokemon[]) => void;
    setError: (value: boolean) => void;
    setLoading: (value: boolean) => void;
};

function SearchBar(props: SearchBarProps) {
    return (
        <div>
            <SearchField
                setPokemonList={props.setPokemonList}
                setError={props.setError}
                setLoading={props.setLoading}
            />
        </div>
    );
}

export default SearchBar;

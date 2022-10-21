import React from 'react';
import className from 'classnames/bind';
import styles from './SearchBar.module.scss';
import { Pokemon } from '../../types/Pokemons';
import SearchField from '../SearchField/SearchField';
import HomeButton from '../HomeButton/HomeButton';
import SearchFilter from '../SearchFilter/SearchFilter';

const cx = className.bind(styles);

type SearchBarProps = {
    setPokemonList: (data: Pokemon[]) => void;
    setError: (value: boolean) => void;
    setLoading: (value: boolean) => void;
    setPage: (value: number) => void;
    setShowPagination: (value: boolean) => void;
    disabledButton: boolean;
    setDisabledButton: (value: boolean) => void;
    searchBarRef: React.MutableRefObject<HTMLDivElement | null>;
};

function SearchBar(props: SearchBarProps) {
    return (
        <div className={cx('container')} ref={props.searchBarRef}>
            <HomeButton
                setPokemonList={props.setPokemonList}
                setLoading={props.setLoading}
                setPage={props.setPage}
                setShowPagination={props.setShowPagination}
            />
            <SearchField
                setPokemonList={props.setPokemonList}
                setError={props.setError}
                setLoading={props.setLoading}
            />
            <SearchFilter />
        </div>
    );
}

export default SearchBar;

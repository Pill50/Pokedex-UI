import { SyntheticEvent, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchField.module.scss';

import { fetchPokemon } from '../../api/fetchPokemon';
import { Pokemon } from '../../types/Pokemons';
import { ReactComponent as SearchIcon } from '../../assets/images/icon-search.svg';

const cx = classNames.bind(styles);

type SearchFieldProps = {
    setPokemonList: (data: Pokemon[]) => void;
    setError: (value: boolean) => void;
    setLoading: (value: boolean) => void;
};

function SearchField(props: SearchFieldProps) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        props.setLoading(true);

        const requestPokemon = await fetchPokemon(inputValue.toLowerCase());

        if (requestPokemon.response && requestPokemon.data) {
            requestPokemon.response.ok
                ? props.setPokemonList([requestPokemon.data])
                : props.setError(requestPokemon.error);
        }
        props.setLoading(false);
        setInputValue('');
    };

    return (
        <form className={cx('container')} onSubmit={handleSubmit}>
            <input
                className={cx('searchFeild-input')}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Pikachu..."
            />
            <div className={cx('searchFeild-btn')}>
                <SearchIcon />
            </div>
        </form>
    );
}

export default SearchField;

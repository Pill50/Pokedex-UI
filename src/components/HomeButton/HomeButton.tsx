import classNames from 'classnames/bind';
import styles from './HomeButton.module.scss';

import { ReactComponent as HomeIcon } from '../../assets/images/icon-home.svg';
import { fetchPokemonList } from '../../api/fetchPokemonList';
import { Pokemon } from '../../types/Pokemons';

const cx = classNames.bind(styles);

type HomeButtonProps = {
    setPokemonList: (data: Pokemon[]) => void;
    setLoading: (value: boolean) => void;
    setShowPagination: (value: boolean) => void;
    setPage: (value: number) => void;
};

function HomeButton(props: HomeButtonProps) {
    const handleClick = async () => {
        props.setLoading(true);
        props.setPokemonList(await fetchPokemonList(1));
        props.setLoading(false);
        props.setPage(1);
        props.setShowPagination(true);
    };

    return (
        <div className={cx('home-btn', 'button')} onClick={handleClick}>
            <HomeIcon className={cx('home-icon')} />
            Home
        </div>
    );
}

export default HomeButton;

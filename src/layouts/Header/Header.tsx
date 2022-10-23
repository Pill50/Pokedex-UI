import { ReactComponent as PokemonLogo } from '../../assets/images/logo-pokemon.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/images/logo-linkedin.svg';
import { ReactComponent as GithubLogo } from '../../assets/images/logo-github.svg';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('container')}>
            <PokemonLogo />
            <div className={cx('contact')}>
                <a href="https://linkedin.com/in/tvphuc13" target="_blank" rel="noreferrer">
                    <LinkedinLogo />
                </a>
                <a href="https://github.com/Pill50" target="_blank" rel="noreferrer">
                    <GithubLogo />
                </a>
            </div>
        </div>
    );
}

export default Header;

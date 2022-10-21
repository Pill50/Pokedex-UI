import { ReactComponent as PokemonLogo } from '../../assets/images/logo-pokemon.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/images/logo-linkedin.svg';
import { ReactComponent as GithubLogo } from '../../assets/images/logo-github.svg';
import { ReactComponent as TelegramLogo } from '../../assets/images/logo-telegram.svg';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('container')}>
            <PokemonLogo />
            <div className={cx('contact')}>
                <a href="#">
                    <LinkedinLogo />
                </a>
                <a href="#">
                    <GithubLogo />
                </a>
                <a href="#">
                    <TelegramLogo />
                </a>
            </div>
        </div>
    );
}

export default Header;

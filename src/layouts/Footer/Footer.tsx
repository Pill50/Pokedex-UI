import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return <div className={cx('footer')}>Copyright by Phuc Pill @2022</div>;
}

export default Footer;

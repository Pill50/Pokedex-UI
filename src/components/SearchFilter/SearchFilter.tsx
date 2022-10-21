import className from 'classnames/bind';
import styles from './SearchFilter.module.scss';

const cx = className.bind(styles);

type SearchFilterProps = {};

function SearchFilter(props: SearchFilterProps) {
    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>Search from properties</h2>
        </div>
    );
}

export default SearchFilter;

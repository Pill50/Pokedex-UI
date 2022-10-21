import * as C from './style';
import usePagination from '@mui/material/usePagination';
import { ReactComponent as LeftArrowIcon } from '../../assets/images/icon-arrow-left.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/images/icon-arrow-right.svg';
import { Pokemon } from '../../types/Pokemons';
import { fetchPokemonList } from '../../api/fetchPokemonList';

type UsePaginationProps = {
    setPokemonList: (data: Pokemon[]) => void;
    setLoading: (value: boolean) => void;
    searchBarRef: React.MutableRefObject<HTMLDivElement | null>;
    page: number;
    setPage: (value: number) => void;
};

export default function UsePagination(props: UsePaginationProps) {
    const handleChange = async (e: React.ChangeEvent<unknown>, value: number) => {
        props.setPage(value);

        props.setLoading(true);
        props.setPokemonList(await fetchPokemonList(value));
        props.setLoading(false);

        let offset: any = props.searchBarRef.current;
        if (offset != null) {
            window.scrollTo({
                top: offset.offsetTop - 56,
            });
        }
    };

    const { items } = usePagination({
        count: 10,
        siblingCount: 0,
        page: props.page,
        onChange: handleChange,
    });

    return (
        <nav>
            <C.Pagination>
                {items.map(({ page, type, selected, ...item }: any, index: any) => {
                    let children = null;

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = <C.Ellipsis>...</C.Ellipsis>;
                    } else if (type === 'page') {
                        children = (
                            <C.Button {...item} selected={selected}>
                                {page}
                            </C.Button>
                        );
                    } else {
                        children = (
                            <C.Button {...item} navigation>
                                {type === 'previous' ? <LeftArrowIcon /> : <RightArrowIcon />}
                            </C.Button>
                        );
                    }

                    return <li key={index}>{children}</li>;
                })}
            </C.Pagination>
        </nav>
    );
}

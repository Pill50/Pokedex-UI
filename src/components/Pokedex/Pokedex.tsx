import UsePagination from '../Pagination';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import * as C from './style';
import { ErrorMessage } from '../../helper/ErrorMessage';
import { Loading } from '../../helper/Loading';
import { Pokemon } from '../../types/Pokemons';

type PokedexProps = {
    setModal: (value: boolean) => void;
    setPokemonData: (data: Pokemon) => void;
    pokemonList: Pokemon[] | undefined;
    setPokemonList: (data: Pokemon[]) => void;
    pokemonAmount: number;
    setPokemonAmount: (value: number) => void;
    error: boolean;
    loading: boolean;
    setLoading: (value: boolean) => void;
    page: number;
    setPage: (value: number) => void;
    showPagination: boolean;
    setShowPagination: (value: boolean) => void;
    disabledButton: boolean;
    searchBarRef: React.MutableRefObject<HTMLDivElement | null>;
};

export const Pokedex = (props: PokedexProps) => {
    if (props.error) return <ErrorMessage />;
    else
        return (
            <C.Wrapper>
                <div className="main-container">
                    {props.loading ? (
                        <Loading />
                    ) : (
                        <C.PokemonList>
                            {props.pokemonList &&
                                props.pokemonList.map((pokemon) => (
                                    <PokemonCard
                                        key={pokemon.id}
                                        pokemon={pokemon}
                                        setModal={props.setModal}
                                        setPokemonData={props.setPokemonData}
                                    />
                                ))}
                        </C.PokemonList>
                    )}
                    {props.pokemonList &&
                        props.pokemonList.length > 1 &&
                        props.loading === false &&
                        props.showPagination === true && (
                            <UsePagination
                                setPokemonList={props.setPokemonList}
                                setLoading={props.setLoading}
                                searchBarRef={props.searchBarRef}
                                page={props.page}
                                setPage={props.setPage}
                            />
                        )}
                </div>
            </C.Wrapper>
        );
};

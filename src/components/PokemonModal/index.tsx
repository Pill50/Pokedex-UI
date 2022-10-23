import React from 'react';
import * as C from './style';
import { PokemonType } from '../PokemonType/PokemonType';
import { ReactComponent as WeightIcon } from '../../assets/images/icon-weight.svg';
import { ReactComponent as RulerIcon } from '../../assets/images/icon-ruler.svg';
import { ReactComponent as DividerIcon } from '../../assets/images/divider-pokeball.svg';
import { ReactComponent as CloseIcon } from '../../assets/icon-close.svg';
import { Pokemon } from '../../types/Pokemons';
import { pokemonTypes } from '../../pokemonTypes';
import { SkeletonLoading } from '../../helper/SkeletonLoading';

type PokemonModalProps = {
    setModal: (value: boolean) => void;
    pokemonData: Pokemon;
};

export const PokemonModal = ({ setModal, pokemonData }: PokemonModalProps) => {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`;

    const [{ color }] = pokemonTypes.filter((type) => pokemonData.types[0].type.name.indexOf(type.name) !== -1);

    const formatStatName = (statName: string) => {
        switch (statName) {
            case 'hp':
                return 'HP';
            case 'attack':
                return 'Attack';
            case 'defense':
                return 'Defense';
            case 'special-attack':
                return 'Sp. Atk';
            case 'special-defense':
                return 'Sp. Def';
            case 'speed':
                return 'Speed';
        }
    };

    const formatPokemonId = (id: number) => {
        if (id < 10) return `#00${id}`;
        else if (id >= 10 && id < 99) return `#0${id}`;
        else return `#${id}`;
    };

    return (
        <C.Wrapper onClick={(e) => e.target === e.currentTarget && setModal(false)}>
            <C.Modal>
                <C.PokemonData>
                    <C.CardOverlay color={color} />
                    <C.PokemonImg>
                        <SkeletonLoading src={imgUrl} alt={pokemonData.name} />
                    </C.PokemonImg>
                    <C.PokemonNumber>{formatPokemonId(pokemonData.id)}</C.PokemonNumber>
                    <C.PokemonName>{pokemonData.name}</C.PokemonName>
                    <C.PokemonType>
                        {pokemonData.types.map(({ type }) => (
                            <PokemonType key={type.name} type={type.name} tabIndex={false} />
                        ))}
                    </C.PokemonType>
                    <C.PokemonFeatures>
                        <C.PokemonWeight>
                            <div>
                                <WeightIcon />
                                <span>{`${pokemonData.weight / 10}`} kg</span>
                            </div>
                            <span>Weight</span>
                        </C.PokemonWeight>
                        <C.PokemonHeight>
                            <div>
                                <RulerIcon />
                                <span>{`${pokemonData.height / 10}`} m</span>
                            </div>
                            <span>Height</span>
                        </C.PokemonHeight>
                    </C.PokemonFeatures>
                </C.PokemonData>

                <C.Divider>
                    <DividerIcon />
                </C.Divider>

                <C.PokemonStats>
                    <C.StatsTitle>Stats</C.StatsTitle>
                    <C.StatsList>
                        {pokemonData.stats.map(({ stat, base_stat }) =>
                            React.Children.toArray(
                                <li>
                                    <span>{formatStatName(stat.name)}</span>
                                    <span>{base_stat}</span>
                                    <C.ProgressBar>
                                        <C.ProgressBarFill base_stat={base_stat}></C.ProgressBarFill>
                                    </C.ProgressBar>
                                </li>,
                            ),
                        )}
                    </C.StatsList>
                </C.PokemonStats>
            </C.Modal>
        </C.Wrapper>
    );
};

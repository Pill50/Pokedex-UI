import { SyntheticEvent } from 'react';
import { pokemonTypes } from '../../pokemonTypes';
import * as C from './style';

type PokemonTypeProps = {
    type: string;
    tabIndex: boolean;
    handleClick?: (e: SyntheticEvent) => void;
};

export const PokemonType = (props: PokemonTypeProps) => {
    const [{ name, color }] = pokemonTypes.filter((item) => item.name === props.type);

    return name && color ? (
        <C.Type color={color} value={name} onClick={props.handleClick} tabIndex={props.tabIndex ? 0 : -1}>
            {name}
        </C.Type>
    ) : (
        <C.ErrorMessage>Ops, não foi possível encontrar o tipo desse pokémon.</C.ErrorMessage>
    );
};

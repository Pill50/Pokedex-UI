import { Pokemon } from '../types/Pokemons';

export const fetchPokemon = async (name: string) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;

    let response: Response | undefined;
    let data: Pokemon | null;
    let error: boolean;

    try {
        response = await fetch(URL);
        data = await response.json();
        error = false;
    } catch {
        data = null;
        error = true;
    }

    return { response, data, error };
};

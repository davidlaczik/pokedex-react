import { Pokemon, PokemonBatch } from 'types';

type PokemonContextType = {
	batch: PokemonBatch | null;
	pokemonList: Pokemon[];
	isLoading: boolean;
	itemCount: number;
	nextPage: () => void;
	previousPage: () => void;
};

export default PokemonContextType;

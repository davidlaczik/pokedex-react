import PokemonBatchResult from './PokemonBatchResult';

type PokemonBatch = {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonBatchResult[];
};

export default PokemonBatch;

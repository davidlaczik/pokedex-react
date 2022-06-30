import PokemonStat from './PokemonStat';
import PokemonType from './PokemonType';

type Pokemon = {
	id: number;
	name: string;
	height: number;
	weight: number;
	sprites: {
		other: {
			home: {
				front_default: string;
			};
			'official-artwork': {
				front_default: string;
			};
		};
	};
	stats: PokemonStat[];
	types: PokemonType[];
};

export default Pokemon;

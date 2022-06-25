import React from 'react';

import IPokedexResponse from 'types/IPokedexResponse';
import IPokemon from 'types/IPokemon';

export type PokemonContextType = {
	pagination: IPokedexResponse | null;
	pokemonList: IPokemon[];
	loading: boolean;
	nextPage: () => void;
	previousPage: () => void;
};

export const PokemonContext = React.createContext<PokemonContextType | null>(
	null,
);

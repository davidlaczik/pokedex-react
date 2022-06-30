/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { PokemonContextType } from 'types/context';

const initialState: PokemonContextType = {
	batch: null,
	pokemonList: [],
	isLoading: false,
	itemCount: 0,
	nextPage: () => {},
	previousPage: () => {},
};

export const PokemonContext =
	React.createContext<PokemonContextType>(initialState);

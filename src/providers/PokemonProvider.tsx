import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Pokemon, PokemonBatch } from 'types';
import { PokemonContextType } from 'types/context';

import { PokemonContext } from 'context/PokemonContext';

interface IPokemonProviderProps {
	children: React.ReactNode;
}

const PokemonProvider = (props: IPokemonProviderProps) => {
	const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
	const [batch, setBatch] = useState<PokemonBatch | null>(null);
	const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	// useEffect - Fetch Pokemon Batch
	useEffect(() => {
		const fetchBatch = async () => {
			setIsLoading(true);

			const response = await axios.get(url);

			setBatch(response.data);
		};

		fetchBatch();
	}, [url]);

	// useEffect - Fetch Pokemon List
	useEffect(() => {
		const fetchData = async () => {
			if (batch === null) {
				return;
			}

			const data: Pokemon[] = await axios.all(
				batch.results.map(async (item) => {
					const resp = await axios.get(item.url);

					return resp.data;
				}),
			);

			setPokemonList(data);
			setIsLoading(false);
		};

		fetchData();
	}, [batch]);

	const clearState = (url: string) => {
		setIsLoading(true);
		setUrl(url);
		setBatch(null);
		setPokemonList([]);
	};

	// Handlers
	const nextPageHandler = () => {
		if (batch?.next && !isLoading) {
			clearState(batch.next);
		}
	};

	const previousPageHandler = () => {
		if (batch?.previous && !isLoading) {
			clearState(batch.previous);
		}
	};

	const providerValues: PokemonContextType = {
		batch: batch,
		pokemonList: pokemonList,
		isLoading: isLoading,
		itemCount: batch?.count ?? 0,
		nextPage: nextPageHandler,
		previousPage: previousPageHandler,
	};

	return (
		<PokemonContext.Provider value={providerValues}>
			{props.children}
		</PokemonContext.Provider>
	);
};

export default PokemonProvider;

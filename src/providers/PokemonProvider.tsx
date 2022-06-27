import React, { useEffect, useState } from 'react';
import axios from 'axios';

import IPokedexResponse from 'types/IPokedexResponse';
import IPokemon from 'types/IPokemon';

import { PokemonContext, PokemonContextType } from 'context/PokemonContext';

interface IPokemonProviderProps {
	children: React.ReactNode;
}

const PokemonProvider = (props: IPokemonProviderProps) => {
	const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
	const [isLoading, setIsLoading] = useState(false);
	const [totalItemsCount, setTotalItemsCount] = useState(0);
	const [pagination, setPagination] = useState<IPokedexResponse | null>(null);
	const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

	// useEffect - Fetch Pokemon Pagination
	useEffect(() => {
		const fetchPokemon = async () => {
			setIsLoading(true);

			const response = await axios.get(url);

			setPagination(response.data);
		};

		fetchPokemon();
	}, [url]);

	// useEffect - Fetch Pokemon List
	useEffect(() => {
		const fetchData = async () => {
			if (pagination === null) {
				return;
			}

			await pagination.results.map(async (item) => {
				const response = await axios.get(item.url);

				setPokemonList((prev) => [...prev, response.data]);
			});

			setTotalItemsCount(pagination.count);

			setIsLoading(false);
		};

		fetchData();
	}, [pagination]);

	const nextPageHandler = () => {
		if (pagination?.next) {
			setUrl(pagination.next);
			setPagination(null);
			setPokemonList([]);
		}
	};

	const previousPageHandler = () => {
		if (pagination?.previous) {
			setUrl(pagination.previous);
			setPagination(null);
			setPokemonList([]);
		}
	};

	const providerValues: PokemonContextType = {
		pagination: pagination,
		pokemonList: pokemonList,
		loading: isLoading,
		totalItemsCount: totalItemsCount,
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

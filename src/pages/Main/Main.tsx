import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Header, Pagination } from 'layouts';
import { PokedexList } from 'components';

import IPokemon from 'types/IPokemon';
import IPokedexResponse from 'types/IPokedexResponse';

import styles from './Main.module.css';

const Main = () => {
	const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
	const [pokemon, setPokemon] = useState<IPokedexResponse | null>(null);
	const [pokeData, setPokeData] = useState<IPokemon[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	// useEffect - Fetch Pokemon List
	useEffect(() => {
		const fetchPokemon = async () => {
			setIsLoading(true);

			const response = await axios.get(url);

			setPokemon(response.data);
		};

		fetchPokemon();
	}, [url]);

	// useEffect - Fetch Pokemon Data
	useEffect(() => {
		const fetchData = async () => {
			if (pokemon === null) {
				return;
			}

			await pokemon.results.map(async (item) => {
				const response = await axios.get(item.url);

				setPokeData((prev) => [...prev, response.data]);
			});

			setIsLoading(false);
		};

		fetchData();
	}, [pokemon]);

	const nextClickHandler = () => {
		if (pokemon?.next === null) {
			return;
		}

		setUrl(pokemon!.next);

		setPokemon(null);
		setPokeData([]);
	};

	const previousClickHandler = () => {
		if (pokemon?.previous === null) {
			return;
		}

		setUrl(pokemon!.previous);

		setPokemon(null);
		setPokeData([]);
	};

	return (
		<React.Fragment>
			<Header title='Pokédex' />
			<Pagination
				previousOnClick={previousClickHandler}
				nextOnClick={nextClickHandler}
			/>
			<main className={styles.main}>
				{isLoading ? <h1>Loading</h1> : <PokedexList data={pokeData} />}
			</main>
		</React.Fragment>
	);
};

export default Main;

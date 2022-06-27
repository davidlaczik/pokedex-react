import React, { useContext } from 'react';

import { PokemonContext, PokemonContextType } from 'context/PokemonContext';

import { Header, Pagination } from 'layouts';
import { PokedexList } from 'components';

import styles from './Main.module.css';

const Main = () => {
	const pokemonContext = useContext(PokemonContext) as PokemonContextType;

	return (
		<React.Fragment>
			<Header title='Pokédex' />
			<Pagination
				previousOnClick={pokemonContext.previousPage}
				nextOnClick={pokemonContext.nextPage}
				totalItems={pokemonContext.totalItemsCount}
			/>
			<main className={styles.main}>
				{pokemonContext.loading ? (
					<h1>Loading</h1>
				) : (
					<PokedexList data={pokemonContext.pokemonList} />
				)}
			</main>
		</React.Fragment>
	);
};

export default Main;

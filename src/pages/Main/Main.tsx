import React, { useContext } from 'react';

import { PokemonContextType } from 'types/context';
import { PokemonContext } from 'context';
import { Header, Pagination } from 'layouts';
import { PokedexList, SkeletonPokemonList } from 'components';

import styles from './Main.module.css';

const Main = () => {
	const pokemonContext = useContext(PokemonContext) as PokemonContextType;

	return (
		<React.Fragment>
			<Header title='Pokédex' />
			<Pagination
				previousOnClick={pokemonContext.previousPage}
				nextOnClick={pokemonContext.nextPage}
				totalItems={pokemonContext.itemCount}
			/>
			<main className={styles.main}>
				{pokemonContext.isLoading && <SkeletonPokemonList />}
				{!pokemonContext.isLoading && (
					<PokedexList data={pokemonContext.pokemonList} />
				)}
			</main>
		</React.Fragment>
	);
};

export default Main;

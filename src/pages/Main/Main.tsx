import React, { useState } from 'react';

import { Header } from 'layouts';
import { PokedexList } from 'components';

import styles from './Main.module.css';
import IPokemon from 'types/IPokemon';

const Main = () => {
	const [pokeData, setPokeData] = useState<IPokemon[]>([]);

	return (
		<React.Fragment>
			<Header title='Pokédex' />
			<main className={styles.main}>
				<PokedexList data={pokeData} />
			</main>
		</React.Fragment>
	);
};

export default Main;

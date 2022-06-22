import React from 'react';

import { Header } from 'layouts';

import styles from './Main.module.css';

const Main = () => {
	return (
		<React.Fragment>
			<Header title='Pokédex' />
			<main className={styles.main}></main>
		</React.Fragment>
	);
};

export default Main;

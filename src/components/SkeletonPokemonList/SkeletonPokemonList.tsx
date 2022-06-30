import { SkeletonPokemonItem } from 'components';

import styles from './SkeletonPokemonList.module.css';

const SkeletonPokemonList = () => {
	const elements = new Array(20);

	return (
		<ul className={styles.list}>
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
			<SkeletonPokemonItem />
		</ul>
	);
};

export default SkeletonPokemonList;

import { SkeletonPokemonItem } from 'components';

import styles from './SkeletonPokemonList.module.css';

const SkeletonPokemonList = () => {
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

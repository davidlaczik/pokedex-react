import { Pokemon } from 'types';

import { PokedexListItem } from 'components';

import styles from './PokedexList.module.css';

interface IPokedexListProps {
	data: Pokemon[];
}

const PokedexList = (props: IPokedexListProps) => {
	return (
		<ul className={styles.list}>
			{props.data.map((item, index) => (
				<PokedexListItem key={index} pokemon={item} />
			))}
		</ul>
	);
};

export default PokedexList;

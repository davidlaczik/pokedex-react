import IPokemon from 'types/IPokemon';

import styles from './PokedexList.module.css';

interface IPokedexListProps {
	data: IPokemon[];
}

const PokedexList = (props: IPokedexListProps) => {
	return (
		<ul className={styles.list}>
			{props.data?.map((item) => (
				<li key={item.id}>{item.name}</li>
			))}
		</ul>
	);
};

export default PokedexList;

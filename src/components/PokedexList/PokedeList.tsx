import PokedexListItem from 'components/PokedexListItem';

import IPokemon from 'types/IPokemon';

import styles from './PokedexList.module.css';

interface IPokedexListProps {
	data: IPokemon[];
}

const PokedexList = (props: IPokedexListProps) => {
	return (
		<ul className={styles.list}>
			{props.data?.map((item, index) => (
				<PokedexListItem key={index} pokemon={item} />
			))}
		</ul>
	);
};

export default PokedexList;

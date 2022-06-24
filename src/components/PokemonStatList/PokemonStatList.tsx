import { PokemonStatListItem } from 'components';

import styles from './PokemonStatList.module.css';

interface IPokemonStatListProps {
	stats: {
		stat: {
			name: string;
		};
		base_stat: number;
	}[];
}

const PokemonStatList = (props: IPokemonStatListProps) => {
	return (
		<ul className={styles.list}>
			{props.stats.map((item, index) => (
				<PokemonStatListItem
					key={index}
					name={item.stat.name}
					value={item.base_stat}
				/>
			))}
		</ul>
	);
};

export default PokemonStatList;

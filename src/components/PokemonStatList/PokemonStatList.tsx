import { PokemonStat } from 'types';

import { PokemonStatListItem } from 'components';

import styles from './PokemonStatList.module.css';

interface IPokemonStatListProps {
	stats: PokemonStat[];
	fillColor: string;
}

const PokemonStatList = (props: IPokemonStatListProps) => {
	return (
		<ul className={styles.list}>
			{props.stats.map((item, index) => (
				<PokemonStatListItem
					key={index}
					name={item.stat.name}
					value={item.base_stat}
					fillColor={props.fillColor}
				/>
			))}
		</ul>
	);
};

export default PokemonStatList;

import styles from './PokemonStatListItem.module.css';

interface IPokemonStatListItem {
	value: number;
	name: string;
}

const PokemonStatListItem = (props: IPokemonStatListItem) => {
	const fillWidth = Math.round((props.value / 200) * 100) + '%';

	return (
		<div className='my-2 flex justify-between text-sm font-medium uppercase text-white'>
			<div className='w-full'>{props.name}</div>
			<div className={styles.bar}>
				<div className={styles.inner}>
					<div
						className={styles.fill}
						style={{
							width: fillWidth,
						}}></div>
				</div>
			</div>
			<div>{props.value}</div>
		</div>
	);
};

export default PokemonStatListItem;

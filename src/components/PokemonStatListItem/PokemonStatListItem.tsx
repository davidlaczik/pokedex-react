import styles from './PokemonStatListItem.module.css';

interface IPokemonStatListItem {
	value: number;
	name: string;
	fillColor: string;
}

const PokemonStatListItem = (props: IPokemonStatListItem) => {
	const fillWidth = Math.round((props.value / 200) * 100) + '%';

	return (
		<div className={styles.item}>
			<div className={styles['item__name']}>{props.name}</div>
			<div className={styles['item__bar']}>
				<div className={styles['bar__inner']}>
					<div
						className={`${styles['inner__fill']} ${props.fillColor}`}
						style={{
							width: fillWidth,
						}}></div>
				</div>
			</div>
			<div className={styles['item__value']}>{props.value}</div>
		</div>
	);
};

export default PokemonStatListItem;

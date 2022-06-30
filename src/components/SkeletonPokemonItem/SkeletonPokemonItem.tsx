import styles from './SkeletonPokemonItem.module.css';

const SkeletonPokemonItem = () => {
	return (
		<li className={styles.item}>
			<div className={styles['item__image']}></div>
			<div className={styles['item__information']}>
				<div className={styles['information__id']}></div>
				<div className={styles['information__name']}></div>
				<div className={styles['information__type']}>
					<div className={styles['type__item']}></div>
					<div className={styles['type__item']}></div>
				</div>
			</div>
		</li>
	);
};

export default SkeletonPokemonItem;

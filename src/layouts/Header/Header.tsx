import styles from './Header.module.css';

interface IHeaderProps {
	title: string;
}

const Header = (props: IHeaderProps) => {
	return (
		<header className={styles.header}>
			<div className={styles['header__container']}>
				<span className={styles['header__title']}>{props.title}</span>
				<input
					className={styles['header__search']}
					type='text'
					placeholder='Search for Pokemon'
				/>
			</div>
		</header>
	);
};

export default Header;

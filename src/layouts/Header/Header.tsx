import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './Header.module.css';

interface IHeaderProps {
	title: string;
}

const Header = (props: IHeaderProps) => {
	return (
		<header className={styles.header}>
			<div className={styles['header__container']}>
				<span className={styles['header__title']}>{props.title}</span>
				<a
					href='https://github.com/davidlaczik/pokedex-react'
					target={'_blank'}
					rel='noopener noreferrer'
					className={styles['header__title']}>
					<FontAwesomeIcon icon={faGithub} />
				</a>
			</div>
		</header>
	);
};

export default Header;

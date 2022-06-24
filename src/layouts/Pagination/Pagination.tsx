import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Pagination.module.css';

interface IPaginationProps {
	previousOnClick: () => void;
	nextOnClick: () => void;
}

const Pagination = (props: IPaginationProps) => {
	return (
		<nav className={styles.pagination}>
			<button
				className={styles['pagination__button']}
				onClick={props.previousOnClick}>
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>
			<button
				className={styles['pagination__button']}
				onClick={props.nextOnClick}>
				<FontAwesomeIcon icon={faChevronRight} />
			</button>
		</nav>
	);
};

export default Pagination;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Pagination.module.css';
import { useState } from 'react';

interface IPaginationProps {
	previousOnClick: () => void;
	nextOnClick: () => void;
	totalItems: number;
}

const Pagination = (props: IPaginationProps) => {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.round(props.totalItems / 20);

	const nextClickHandler = () => {
		if (currentPage + 1 > totalPages) {
			return;
		}

		setCurrentPage(currentPage + 1);

		props.nextOnClick();
	};

	const previousClickHandler = () => {
		if (currentPage - 1 < 1) {
			return;
		}

		setCurrentPage(currentPage - 1);
		props.previousOnClick();
	};

	return (
		<nav className={styles.pagination}>
			<button
				className={styles['pagination__button']}
				onClick={previousClickHandler}>
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>
			<div className={styles['pagination__page']}>
				{currentPage} / {totalPages}
			</div>
			<button
				className={styles['pagination__button']}
				onClick={nextClickHandler}>
				<FontAwesomeIcon icon={faChevronRight} />
			</button>
		</nav>
	);
};

export default Pagination;

import React from 'react';
import ReactDOM from 'react-dom';

import { PokemonStatList } from 'components';

import Pokemon from 'types/IPokemon';

import styles from './PokemonDetailModal.module.css';

interface IPokemonDetailModalProps {
	pokemon: Pokemon;
	onClose: () => void;
}

const portalElement = document.getElementById('modal') as HTMLElement;

const ModalOverlay = (props: IPokemonDetailModalProps) => {
	const pokemon = props.pokemon;

	return (
		<React.Fragment>
			<div className={styles.modal} onClick={props.onClose}>
				<div
					className={styles['modal__content']}
					onClick={props.onClose}>
					<img
						className={styles['content__image']}
						src={
							pokemon.sprites.other['official-artwork']
								.front_default
						}
						alt={pokemon.name}
					/>
					<div className={styles['content__information']}>
						<div className={styles['information__id']}>
							# {pokemon.id}
						</div>
						<div className={styles['information__name']}>
							{pokemon.name}
						</div>
						<div className={styles['information__type']}>
							{pokemon.types.map((item, index) => (
								<div
									key={index}
									className={styles['type__item']}>
									{item.type.name}
								</div>
							))}
						</div>
						<PokemonStatList stats={pokemon.stats} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

const PokemonDetailModal = (props: IPokemonDetailModalProps) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<ModalOverlay
					pokemon={props.pokemon}
					onClose={props.onClose}
				/>,
				portalElement,
			)}
		</React.Fragment>
	);
};

export default PokemonDetailModal;

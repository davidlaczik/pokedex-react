import React from 'react';
import ReactDOM from 'react-dom';

import { Pokemon } from 'types';
import { PokemonStatList } from 'components';

import { getPokemonBackgroundColor } from 'utils/pokemonUtils';

import styles from './PokemonDetailModal.module.css';

interface IPokemonDetailModalProps {
	pokemon: Pokemon;
	onClose: () => void;
}

const portalElement = document.getElementById('modal') as HTMLElement;

const ModalOverlay = (props: IPokemonDetailModalProps) => {
	const pokemon = props.pokemon;

	const bgColor = getPokemonBackgroundColor(pokemon.types[0].type.name);

	return (
		<React.Fragment>
			<div className={styles.modal} onClick={props.onClose}>
				<div
					className={styles['modal__content']}
					onClick={props.onClose}>
					<div className={styles['content__image']}>
						<img
							src={
								pokemon.sprites.other['official-artwork']
									.front_default
							}
							alt={pokemon.name}
						/>
					</div>
					<div className={styles['content__information']}>
						<div className={styles['information__name']}>
							# {pokemon.id} - {pokemon.name}
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
						<PokemonStatList
							stats={pokemon.stats}
							fillColor={bgColor}
						/>
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

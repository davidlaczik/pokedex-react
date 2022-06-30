import React, { useState } from 'react';

import { Pokemon } from 'types';
import { PokemonDetailModal } from 'modals';

import { getPokemonBackgroundColor } from 'utils/pokemonUtils';

import styles from './PokedexListItem.module.css';

interface IPokedexListItemProps {
	pokemon: Pokemon;
}

const PokedexListItem = (props: IPokedexListItemProps) => {
	// Variables & Constants
	const pokemon = props.pokemon;
	const bgColor = getPokemonBackgroundColor(pokemon.types[0].type.name);

	// States
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Methods
	const openModalHandler = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<React.Fragment>
			{isModalOpen ? (
				<PokemonDetailModal
					pokemon={pokemon}
					onClose={openModalHandler}
				/>
			) : (
				''
			)}
			<li className={styles.item} onClick={openModalHandler}>
				<div className={styles['item__image']}>
					<img
						src={
							pokemon.sprites.other['official-artwork']
								.front_default
						}
						alt={pokemon.name}
					/>
				</div>
				<div className={`${bgColor} ${styles['item__information']}`}>
					<div className={styles['information__id']}>
						# {pokemon.id}
					</div>
					<div className={styles['information__name']}>
						{pokemon.name}
					</div>
					<div className={styles['information__type']}>
						{pokemon.types.map((item, index) => (
							<span key={index} className={styles['type__name']}>
								{item.type.name}
							</span>
						))}
					</div>
				</div>
			</li>
		</React.Fragment>
	);
};

export default PokedexListItem;

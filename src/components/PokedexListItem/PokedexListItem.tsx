import { PokemonDetailModal } from 'modals';
import React, { useState } from 'react';

import IPokemon from 'types/IPokemon';

import styles from './PokedexListItem.module.css';

interface IPokedexListItemProps {
	pokemon: IPokemon;
}

const PokedexListItem = (props: IPokedexListItemProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const pokemon = props.pokemon;

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
				<div className={styles['item__information']}>
					<div className={styles['information__id']}>
						{pokemon.id}
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
				<div className={styles['item__image']}>
					<img
						src={
							pokemon.sprites.other['official-artwork']
								.front_default
						}
						alt={pokemon.name}
					/>
				</div>
			</li>
		</React.Fragment>
	);
};

export default PokedexListItem;

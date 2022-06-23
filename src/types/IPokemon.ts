interface IPokemon {
	id: number;
	name: string;
	height: number;
	weight: number;
	sprites: {
		other: {
			home: {
				front_default: string;
			};
			'official-artwork': {
				front_default: string;
			};
		};
	};
	stats: [
		{
			base_stat: number;
			stat: {
				name: string;
			};
		},
	];
	types: [
		{
			type: {
				name: string;
			};
		},
	];
}

export default IPokemon;

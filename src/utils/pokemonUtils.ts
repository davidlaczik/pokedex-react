export function getPokemonBackgroundColor(type: string): string {
	let bgColor = '';

	switch (type) {
		case 'grass':
			bgColor = 'bg-green-500/80';
			break;
		case 'fire':
			bgColor = 'bg-orange-500/80';
			break;
		case 'water':
			bgColor = 'bg-blue-500/80';
			break;
		case 'poison':
			bgColor = 'bg-purple-500/80';
			break;
		case 'electric':
			bgColor = 'bg-yellow-500/80';
			break;
		case 'fairy':
			bgColor = 'bg-pink-500/80';
			break;
		case 'ground':
			bgColor = 'bg-stone-500/80';
			break;
		case 'bug':
			bgColor = 'bg-fuchsia-500/80';
			break;
		default:
			bgColor = 'bg-slate-500/80';
			break;
	}

	return bgColor;
}

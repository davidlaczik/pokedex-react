import IPokedexResult from './IPokedexResult';

interface IPokedexResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: IPokedexResult[];
}

export default IPokedexResponse;

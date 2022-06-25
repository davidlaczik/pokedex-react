import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';

import { Main } from 'pages';
import PokemonProvider from 'providers/PokemonProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<PokemonProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main />} />
				</Routes>
			</BrowserRouter>
		</PokemonProvider>
	</React.StrictMode>,
);

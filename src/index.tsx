import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PokemonProvider } from 'providers';
import { Main } from 'pages';

import './index.css';

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

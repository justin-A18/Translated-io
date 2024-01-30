import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './assets/index.css';
import { TranslateProvider } from './context/TranslateProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<TranslateProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</TranslateProvider>
);

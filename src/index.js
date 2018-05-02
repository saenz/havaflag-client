// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
//import config from "./config";
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root')
if (rootElement == null) {
 	throw new Error('no root element')
} else {
	ReactDOM.render(
		<Router>
			<App />
		</Router>
		, rootElement
	);
}
//registerServiceWorker();

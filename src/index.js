// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
//import config from "./config";

ReactDOM.render(
	<Router>
		<App />
	</Router>
	, (document.getElementById('root'): any) 
);

//registerServiceWorker();

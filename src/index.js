import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import App from './App.jsx';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

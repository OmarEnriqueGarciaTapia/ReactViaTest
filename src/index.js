// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "./store/reducers";

// Css
import './styles/app.scss'

// Routes
import Routes from './config/routes';

// Store
let store = createStore(reducers, applyMiddleware(thunk));

const Root = document.getElementById( "root" );
ReactDOM.render(<Provider store={store}><Routes /></Provider> , Root );
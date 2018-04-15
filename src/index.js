import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import {syncHistoryWithStore } from 'react-router-redux';


import App from './App';
import About from './About';
import Track from './Track';
import './index.css';

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);
//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


//ReactDOM.render(
//    <Provider store={store}>
//        <App />
//    </Provider>,
//    document.getElementById('root')
//)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/tracks/:id" component={Track} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
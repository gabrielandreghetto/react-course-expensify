import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";

import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';

const history = createBrowserHistory();

const store = configureStore();

const jsx = (
    // <Router history={history}>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    // </Router>
)

ReactDOM.render(jsx , document.getElementById('app'));
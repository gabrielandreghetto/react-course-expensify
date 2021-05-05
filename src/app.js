import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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

store.dispatch(addExpense({ description: 'Water Bill', amount: 50 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 10, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 1095 }));

// store.dispatch(setTextFilter('bill'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('water'));
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Router history={history}>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </Router>
)

ReactDOM.render(jsx , document.getElementById('app'));
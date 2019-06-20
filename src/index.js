import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
// import routes from './routes'
import configureStore from './store/configureStore';
import { loadUrls } from './actions/urls.action';

//css imports
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import App_Home from './App_Home'
import App from './App';
import Token from './token';
import Login from './login';

const store = configureStore();
// var createHistory = require("history").createBrowserHistory;
// const appHistory = createHistory();

store.dispatch(loadUrls());

ReactDOM.render(
    <Provider store={store}>
        {/* <BrowserRouter routes={routes} /> */}
        <BrowserRouter>
            <Route path="/" component={App_Home} />
            <Route path="/login" component={Login} />
            <Route path="/app" component={App} />
            <Route path="*" component={Token} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

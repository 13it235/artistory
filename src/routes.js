import React from 'react';
// import { Router, Route } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import App_Home from './App_Home'
import App from './App';
import Token from './token';
import Login from './login';

export default (
    <BrowserRouter>
        <Route path="/" component={App_Home} />
        <Route path="/login" component={Login} />
        <Route path="/app" component={App} />
        <Route path="*" component={Token} />
    </BrowserRouter>
)
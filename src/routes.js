import React from 'react';
import { Router, Route } from 'react-router';
import App_Home from './App_Home'
import App from './App';
import Token from './token';

export default (
    <Router>
        <Route path="/" component={App_Home} />
        <Route path="/app" component={App} />
        <Route path="*" component={Token} />
    </Router>
)
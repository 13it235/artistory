import React from 'react';
import { Route } from 'react-router-dom';
import App_Home from './App_Home'
import App from './App';
import Token from './token';
import Login from './login';

export const Routes = () => {
    return (
        <div>
            <Route path="/" component={App_Home} />
            <Route path="/login" component={Login} />
            <Route path="/app" component={App} />
            <Route path="*" component={Token} />
        </div>
    )
}
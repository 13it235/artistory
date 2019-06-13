import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import artists from './artists.reducer';
import urls from './urls.reducer';

const rootReducer = combineReducers({
    artists,
    urls,
    routing: routerReducer
})

export default rootReducer;
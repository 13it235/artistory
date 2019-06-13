import * as types from '../actions/actionTypes';
import initialState from './initialState'

export default function urlReducers(state = initialState.urls, action) {
    switch (action.type) {
        case types.LOAD_URLS:
            return action.urls;
        default:
            return state;
    }
}
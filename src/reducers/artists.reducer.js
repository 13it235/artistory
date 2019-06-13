import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function artistReducer(state = initialState.artists, action){
    switch(action.type){
        case types.SEARCH_ARTIST:
            return action.artists;
        default : 
            return state;
    }
}
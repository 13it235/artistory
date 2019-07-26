import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function artistReducer(state = initialState.artists, action) {
    switch (action.type) {
        case types.SEARCH_ARTIST:
            return action.artists;
        case types.GET_ARTIST_BY_ID:
            return action.artist;
        case types.GET_ARTIST_ALBUMS:
            return action.albums;
        default:
            return state;
    }
}
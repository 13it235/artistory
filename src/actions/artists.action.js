import * as types from './actionTypes';
import axios from "axios";


/**Action creators : actions are just objects with type which are being created here */
export function searchArtistOnSpotifySuccess(artists) {
    return { type: types.SEARCH_ARTIST, artists };
}

export function getArtistByIdSuccess(artist) {
    return { type: types.GET_ARTIST_BY_ID, artist };
}

/**Actions */
export function searchArtistOnSpotify(searchString, callback) {
    return function (dispatch, getState) {
        axios({
            method: 'GET',
            url: 'https://api.spotify.com/v1/search?q=' + searchString + '&type=artist',
        })
            .then((res) => {
                dispatch(searchArtistOnSpotifySuccess(res.data));
                if (callback)
                    callback(res.data);
            })
            .catch((err) => {
                if (callback)
                    callback(err);
            })
    }
}

export function getArtistById(id, callback) {
    return function (dispatch, getState) {
        axios({
            method: 'GET',
            url: 'https://api.spotify.com/v1/artists/' + id,

        })
            .then((res) => {
                dispatch(searchArtistOnSpotifySuccess(res.data));
                if (callback)
                    callback(res.data);
            })
            .catch((err) => {
                if (callback)
                    callback(err);
            })
    }
}
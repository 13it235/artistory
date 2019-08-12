import * as types from './actionTypes';
import axios from "axios";


/**Action creators : actions are just objects with type which are being created here */
export function searchArtistOnSpotifySuccess(artists) {
    return { type: types.SEARCH_ARTIST, artists };
}

export function getArtistByIdSuccess(artist) {
    return { type: types.GET_ARTIST_BY_ID, artist };
}

export function getArtistsAlbumsSuccess(albums) {
    return { type: types.GET_ARTIST_ALBUMS, albums };
}

/**Actions */
export function searchArtistOnSpotify(searchString, callback) {
    return function (dispatch, getState) {
        var URLs = getState().urls
        axios({
            method: 'GET',
            url: URLs.baseUrl + URLs.version + 'search?q=' + searchString + '&type=artist'
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
        var URLs = getState().urls
        axios({
            method: 'GET',
            url: URLs.baseUrl + URLs.version + 'artists/' + id,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then((res) => {
                dispatch(getArtistByIdSuccess(res.data));
                if (callback)
                    callback(res.data);
            })
            .catch((err) => {
                if (callback)
                    callback(err);
            })
    }
}

export function getArtistsAlbums(id, callback) {
    return function (dispatch, getState) {
        var URLs = getState().urls
        axios({
            method: 'GET',
            url: URLs.baseUrl + URLs.version + 'artists/' + id + '/albums',

        })
            .then((res) => {
                dispatch(getArtistsAlbumsSuccess(res.data));
                if (callback)
                    callback(res.data);
            })
            .catch((err) => {
                if (callback)
                    callback(err);
            })
    }
}
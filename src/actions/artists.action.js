import * as types from './actionTypes';
import axios from "axios";
import cookie from 'react-cookie';

export function searchArtistOnSpotifySuccess(artists) {
    return { type: types.SEARCH_ARTIST, artists };
}

export function searchArtistOnSpotify(searchString, callback) {
    return function (dispatch, getState) {
        axios({
            method: 'GET',
            url: 'https://api.spotify.com/v1/search?q=' + searchString + '&type=artist',
            // headers: {
            //     'Authorization': 'Bearer ' + cookie.load('access_token')
            // }
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
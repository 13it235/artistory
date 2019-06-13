import * as types from './actionTypes';

export function loadUrlsSuccess(urls) {
    return { type: types.LOAD_URLS, urls };
}

export function loadUrls() {
    return function (dispatch) {
        let urls = {};
        urls = {
            authUrl: 'https://accounts.spotify.com/authorize?',
            clientId: 'eac2a98e461c4ccbbf7efe834809017a',
            redirectURi: 'http://localhost:3000/',
            scopes: [
                'user-read-private',
                'user-read-email',
                // 'user-library-modify'
            ]
        }
        return dispatch(loadUrlsSuccess(urls));
    }
}
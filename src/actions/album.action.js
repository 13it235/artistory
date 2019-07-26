import * as types from './actionTypes';
import axios from "axios";

export function getTracksOfAlbumSuccess(tracks) {
    return { type: types.GET_ALBUM_TRACKS, tracks };
}

export function getTracksOfAlbum(albumId, callback) {
    return function (dispatch, getState) {
        var URLs = getState().urls
        axios({
            method: 'GET',
            url: URLs.baseUrl + URLs.version + 'albums/' + albumId + '/tracks',
        })
            .then((res) => {
                dispatch(getTracksOfAlbumSuccess(res.data));
                if (callback)
                    callback(res.data);
            })
            .catch((err) => {
                if (callback)
                    callback(err);
            })
    }
}
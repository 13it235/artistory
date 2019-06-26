import * as types from './actionTypes';

export function Login(){
    return function (dispatch, getState){
        var urls = getState.urls;
        window.location.assign(this.state.login_url)
    }
}
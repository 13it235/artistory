import React, { Component } from 'react';
import './App.css';
import { hashHistory } from 'react-router';
import cookie from 'react-cookie';
import {connect} from 'react-redux';

const authUrl = 'https://accounts.spotify.com/authorize?'
const clientId = 'eac2a98e461c4ccbbf7efe834809017a';
const redirectURi = 'http://localhost:3000/';
const scopes = [
    'user-read-private',
    'user-read-email',
]

class App_Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login_url : ''
        }
    }

    componentWillMount() {
        if (cookie.load('access_token')) {
            hashHistory.push('/app');
        }
        else {
            // window.location.assign(login_url)
            // var urls = this.props.urls
            // this.setState({
            //     login_url : urls.authUrl + 'client_id=' + urls.clientId + '&response_type=token&redirect_uri=' 
            //     + urls.redirectURi + '&scope=' + urls.scopes.join("%20") + '&state=34fFs29kd09'
            // })
            this.setState({
                login_url : authUrl + 'client_id=' + clientId + '&response_type=token&redirect_uri=' 
                + redirectURi + '&scope=' + scopes.join("%20") + '&state=34fFs29kd09'
            })
        }
    }

    render() {
        return (
            <div className='loginContainer'>
                <div className='loginButton'
                    onClick={() => { window.location.assign(this.state.login_url) }}>Login</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      urls: state.urls
    }
  }
  
export default connect(mapStateToProps)(App_Home);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login_url: ''
        }
    }

    componentDidMount() {
        console.log("loading accesstoken", localStorage.getItem('access_token'))
        if (localStorage.getItem('access_token')) {
            this.props.history.push('/app');
        }
        else {
            var urls = this.props.urls
            this.setState({
                login_url: urls.authUrl + 'client_id=' + urls.clientId + '&response_type=token&redirect_uri='
                    + urls.redirectURi + '&scope=' + urls.scopes.join("%20") + '&state=34fFs29kd09'
            })
        }
    }

    render() {
        return (
            <div className='loginContainer'>
                <button className='loginButton'
                    onClick={() => { window.location.assign(this.state.login_url) }}>Login</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        urls: state.urls
    }
}

export default connect(mapStateToProps)(Login);
import React from 'react';
import './App.css';
import cookie from 'react-cookie';

class App_Home extends React.Component {

    componentDidMount() {
        if (cookie.load('access_token')) {
            this.props.history.push('/app');
        }
        else {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div></div>
        )
    }

}


export default App_Home;

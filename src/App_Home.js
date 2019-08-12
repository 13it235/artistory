import React from 'react';
import './App.css';

class App_Home extends React.Component {

    componentDidMount() {
        if (localStorage.getItem('access_token')) {
            this.props.history.push('/app');
        }
        else {
            this.props.history.push('/login');
        }
    }

    render() {
        return null;
    }

}


export default App_Home;

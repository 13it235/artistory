import React, { Component } from 'react';
import './App.css';
import Header from './header';
import SideBar from './sideBar';

// const base64 = 'ZWFjMmE5OGU0NjFjNGNjYmJmN2VmZTgzNDgwOTAxN2E6ZWVlYmM2YjJjYjg3NDEwYWE0NTdiZGUxYmE3NGI0MzM=';

class App extends Component {
  render() {
    return (
      <div className="app_container">
        <Header />
        <div className="row" >
          <SideBar className="col-sm-3" />
          <div className="app_content">
            dynamic content
            {/* {this.props.children} */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

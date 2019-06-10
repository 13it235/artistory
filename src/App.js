import React from 'react';
import './App.css';
import Header from './header';
import SideBar from './sideBar';

function App() {
  return (
    <div className="app_container">
      <Header/>
      <div className="row" >
        <SideBar className="col-sm-3"/>
        <div className="app_content">
            dynamic content
            {/* {this.props.children} */}
        </div>
      </div>
    </div>
  );
}

export default App;

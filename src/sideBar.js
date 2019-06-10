import React, { Component } from 'react';
import './styles/sideBar.css';
// import PropTypes from 'prop-types';

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist_img: ''
        }
    }

    render() {
        return (
            <div className="sideBar">
                <div className="sideBarItem row">
                    {
                        this.state.artist_img !== '' &&
                        <img className="col-sm-3" src={this.state.artist_img} alt="artist" />
                    }
                    {
                        this.state.artist_img === '' &&
                        <i className="fa fa-user"></i>
                    }
                    <div className="col-sm-9" style={{paddingTop : '10px'}}>
                        <h5 className="makePurple">BTS</h5>
                        <div style={{ fontSize: '13px' }}>Genre: K-POP</div>
                        <div style={{ fontSize: '13px' }}>Popularity: 80%</div>
                        <div style={{ fontSize: '13px' }}>Followers:
                             <p className="makePurple">20M</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar;
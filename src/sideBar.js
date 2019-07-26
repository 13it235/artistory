import React, { Component } from 'react';
import './styles/sideBar.css';

class SideBarItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist_img: ''
        }
    }

    render() {
        return (
            <div className="sideBarItem row"
                style={{ paddingTop: '6px' }}>
                <div className="col-sm-4">
                    {
                        this.props.artist.image !== '' &&
                        <img src={this.props.artist.image} alt="artist" />
                    }
                    {
                        this.props.artist.image === '' &&
                        <i className="fa fa-user"></i>
                    }
                </div>
                <div className="col-sm-8" style={{ paddingTop: '5px' }}>
                    <h5 className="makePurple"
                        style={{ marginBottom: '5px' }}>{this.props.artist.name}</h5>
                    <div style={{ fontSize: '13px',textOverflow : 'ellipsis', overflow : 'hidden', whiteSpace : 'nowrap' }}>
                    Genre: {this.props.artist.genre.join(',')}</div>
                    <div style={{ fontSize: '13px' }}>Popularity: {this.props.artist.popularity}%</div>
                    <div style={{ fontSize: '13px', display: 'flex' }}>Followers:
                                    <p className="makePurple" style={{ paddingLeft: '3px' }}>
                            {this.props.artist.followers}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBarItem;
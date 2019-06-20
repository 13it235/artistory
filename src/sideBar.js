import React, { Component } from 'react';
import './styles/sideBar.css';

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
                {
                    this.props.artists !== undefined && this.props.artists !== null &&
                    this.props.artists.map(artist =>
                        <div className="sideBarItem row" key={artist.id} style={{ paddingTop: '6px' }}>
                            <div className="col-sm-4">
                                {
                                    artist.image !== '' &&
                                    <img src={artist.image} alt="artist" />
                                }
                                {
                                    artist.image === '' &&
                                    <i className="fa fa-user"></i>
                                }
                            </div>
                            <div className="col-sm-8" style={{ paddingTop: '5px' }}>
                                <h5 className="makePurple"
                                    style={{ marginBottom: '5px' }}>{artist.name}</h5>
                                <div style={{ fontSize: '13px' }}>Genre: {artist.genre.join(',')}</div>
                                <div style={{ fontSize: '13px' }}>Popularity: {artist.popularity}%</div>
                                <div style={{ fontSize: '13px', display: 'flex' }}>Followers:
                                    <p className="makePurple" style={{ paddingLeft: '3px' }}>
                                        {artist.followers}</p>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        )
    }
}

export default SideBar;
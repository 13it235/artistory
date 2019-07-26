import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as artistActions from '../actions/artists.action';
import * as albumActions from '../actions/album.action';
import '../styles/artist.css';
import cookie from 'react-cookie';

class Artist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist: {},
            id: '',
            albums: [],
            albumSongs: [],
            selectedAlbum: ''
        }
    }

    componentDidMount() {
        this.getArtistById();
    }

    componentDidUpdate() {
        this.getArtistById();
    }

    getArtistById() {
        if (!cookie.load('access_token')) {
            this.props.history.push('/')
        }
        else {
            if (this.props.match.params.id && this.state.id !== this.props.match.params.id) {
                this.setState({ id: this.props.match.params.id })
                this.props.artistActions.getArtistById(this.props.match.params.id, res => {
                    console.log("by id", res);
                    this.setState({ artist: res });
                    this.getAlbumsOfTheArtist();
                })
            }
        }
    }

    getAlbumsOfTheArtist() {
        this.props.artistActions.getArtistsAlbums(this.props.match.params.id, res => {
            console.log("albums ", res);
            this.setState({ albums: res.items });
            this.getAlbumTracks(res.items[0].id, res.items[0].name);
        })
    }

    getAlbumTracks(id, name) {
        this.setState({ selectedAlbum: name })
        this.props.trackActions.getTracksOfAlbum(id, res => {
            console.log("tracks of that album", res);
            this.setState({ albumSongs: res.items });
        })
    }


    render() {
        return (
            <div className="artistContainer">
                {
                    this.state.artist !== {} && this.state.artist !== undefined &&
                    this.state.artist &&
                    <div className="artistBanner" style={this.state.artist.images !== undefined ?
                        { backgroundImage: `url(${this.state.artist.images[0].url})` } : {}}>
                        {/* <img src={this.state.artist.images !== undefined
                                ? this.state.artist.images[0].url : ''} /> */}
                        <div className="overlayArtist">Artist</div>
                        <div className="overlayName">{this.state.artist.name}</div>
                        <div className="content">
                            <div className="subHeader">Albums</div>
                            <div className="arrange">
                                <div className="albumGrid">
                                    {
                                        this.state.albums.map(album => {
                                            return <div className="gridItem" key={album.id}
                                                style={album.images !== undefined ?
                                                    { backgroundImage: `url(${album.images[0].url})` } : {}}>
                                                <div className="gridOverlay avoidTextOverflow">
                                                    <div>Album : {album.name}</div>
                                                    <div>Songs : {album.total_tracks}</div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                                {
                                    this.state.albumSongs.length > 0 &&
                                    <div className="albumDetails">
                                        <span className="trackHeader">{this.state.selectedAlbum}({this.state.albumSongs.length})</span>
                                        <div style={{overflow : 'auto'}}>
                                            {
                                                this.state.albumSongs.map(song => {
                                                    return <div className="albumItem avoidTextOverflow">{song.name}</div>
                                                }
                                                )
                                            }
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        artists: state.artists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        artistActions: bindActionCreators(artistActions, dispatch),
        trackActions: bindActionCreators(albumActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
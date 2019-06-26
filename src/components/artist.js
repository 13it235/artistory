import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as artistActions from '../actions/artists.action';
import '../styles/artist.css';
import cookie from 'react-cookie';

class Artist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist: {}
        }
    }

    componentDidMount() {
        if (!cookie.load('access_token')) {
            this.props.history.push('/')
        }
        else {
            if (this.props.match.params.id) {
                this.props.artistActions.getArtistById(this.props.match.params.id, res => {
                    console.log("by id", res);
                    this.setState({ artist: res });
                })
            }
        }
    }

    render() {
        return (
            <div className="artistContainer">
                {
                    this.state.artist !== {} && this.state.artist !== undefined &&
                    this.state.artist &&
                    <div>
                        <div className="artistBanner" style={this.state.artist.images ?
                            { backgroundImage: this.state.artist.images[0].url } : {}}>
                            {/* <img src={this.state.artist.images !== undefined
                                ? this.state.artist.images[0].url : ''} /> */}
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
        artistActions: bindActionCreators(artistActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
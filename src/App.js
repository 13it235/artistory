import React, { Component } from 'react';
import './App.css';
import Header from './header';
import SideBar from './sideBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as artistActions from './actions/artists.action';
import cookie from 'react-cookie';
import axios from 'axios';

// const base64 = 'ZWFjMmE5OGU0NjFjNGNjYmJmN2VmZTgzNDgwOTAxN2E6ZWVlYmM2YjJjYjg3NDEwYWE0NTdiZGUxYmE3NGI0MzM=';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      artists: []
    }

    this.searchResults = this.getArtists.bind(this)
  }

  componentDidMount() {
    if (!cookie.load('access_token')) {
      this.props.history.push('/')
    }
    else {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + cookie.load('access_token');

    }
  }


  getArtists(searchedTerm) {
    console.log("searchedTerm", searchedTerm);
    if (searchedTerm.length > 0) {
      var artists = [];
      this.props.artistActions.searchArtistOnSpotify(searchedTerm, res => {
        if (res.artists.items !== undefined && res.artists.items !== null) {
          res.artists.items.forEach(item => {
            artists.push({
              id: item.id,
              name: item.name,
              image: item.images.length > 0 ? item.images[0].url : '',
              followers: item.followers.total,
              genre: item.genres.length > 0 ? item.genres : ['Unavailable'],
              popularity: item.popularity
            })
          })
          console.log("what I want ", artists);
          this.setState({ artists: artists });
        }
      })
    }
  }

  render() {
    return (
      <div className="app_container">
        <Header searchValue={(event) => this.searchResults(event.target.value)} />
        <div className="row" >
          {
            this.state.artists &&
            <SideBar className="animated slideInLeft col-sm-3" artists={this.state.artists} />
          }
          <div className="app_content">
            dynamic content
            {this.props.children}
          </div>
        </div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

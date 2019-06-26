import React, { Component } from 'react';
import './App.css';
import Header from './header';
import SideBarItem from './sideBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as artistActions from './actions/artists.action';
import cookie from 'react-cookie';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Artist from './components/artist';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      artists: []
    }

    this.searchResults = this.getArtists.bind(this);
    this.selectedArtist = this.selectedArtist.bind(this);
  }

  componentDidMount() {
    if (!cookie.load('access_token')) {
      this.props.history.push('/')
    }
    else {
      var self = this;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + cookie.load('access_token');
      axios.interceptors.response.use(function (response) {
        return response;
      }, function (error) {
        if (error.response.status === 401) {
          alert('Session expired');
          cookie.remove('access_token');
          self.props.history.push('/login')
        }
      })
    }
  }

  getArtists(searchedTerm) {
    if (searchedTerm.length > 0) {
      var artists = [];
      this.props.artistActions.searchArtistOnSpotify(searchedTerm, res => {
        if (res.artists !== undefined && res.artists !== null) {
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
          this.setState({ artists: artists });
        }
      })
    }
  }

  selectedArtist(id) {
    this.setState({ id: id })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app_container">
          <Header searchValue={(event) => this.searchResults(event.target.value)} />
          <div className="row" >
            {
              this.state.artists &&
              <div className="col-sm-3" style={{ padding: '0px' }}>
                {/* <Link to={`/${this.state.id}`}>
                  <SideBar artists={this.state.artists} onClickArtist={(event) => { this.selectedArtist(event) }} />
                </Link> */}
                <div className="sideBar">
                  {
                    this.state.artists.map(artist => {
                      return (<Link to={`/app/${artist.id}`} key={artist.id}>
                        <SideBarItem artist={artist} />
                      </Link>)
                    }
                    )
                  }
                </div>
              </div>
            }
            <div className="col-sm-9 app_content">
              <Route path={`/app/:id`} component={Artist} />
            </div>
          </div>
        </div>
      </BrowserRouter>
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

import React, {Component} from 'react';

class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard">
                <div className="poster">
                    <h3>Artist</h3>
                    <h2>BTS</h2>
                </div>
                <div className="albums">
                    <h4>Albums</h4>
                    <div className="row">
                        <div className="col-sm-7"></div>
                        <div className="col-sm-5"></div>
                    </div>
                </div>
            </div>
        )
    }
}
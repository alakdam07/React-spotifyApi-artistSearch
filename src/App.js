
import React, { Component } from 'react';


class App extends Component {

  
   state = {
      query: "", // my query
      artist: null  // my response. 
    }
 

  search() {
   console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&offset=0&limit=20&type=artist&market=FI';
    var accessToken = 'BQBB68H-N2PJ0ThBlb2WRRxVfR_CObFx3dzbgSIngLfvgURanIR6ZUgJihWhsUCciJrHtchRqJGBdWJC9eMLO-LTXECDL_TUsRBX1MPJC4-ZEDDhXV4BrzffNU7Guwx2b3N8MFW4yrLDrWVSc0TPgNbgJTxpJgAtFYV7-1XGqQ&refresh_token=AQCcE9b2cP8b2lwOOtLDTMAXY16QHzUhk2g66-yYuFa2IBAHxOFC4_BLpQe_E8B7PWGAzOoMK8e0XPlN1ot4GLnjkao-U9D5cxcckSs2AstbMe87iB25DqGiXCxFKrAuc43oxw'

    var myOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(json => {
        const artist = json.artists.items[0];        
        this.setState({ artist });
      })

  }

  

  render() {

    let artist = {
      name: '',
      followers: {
        total: ''
      },
      external_urls:{
        spotify: ''
      },
      images:{
        
      },
     
      
    };

    if (this.state.artist !== null) {
      artist = this.state.artist;
    }

    return (
     
      <div className="container">

        <h1>lets find your Artist</h1>
        <hr />
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" 
              onChange={event => { this.setState({ query: event.target.value }) }}
            className="form-control" placeholder="Search for..." />
            <span className="input-group-btn">
              <button 
              onClick={()=> this.search()}
               className="btn" type="button">search</button>
            </span>
          </div>
        </div>
        <hr />
       
        <div className="card card-body mb-3">
          <div className="row">
          <div className="col-md-3">
          <div className="img-fluid mb-2" ></div>
          <a href="{artist.external_urls}" target="_blank" className="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div className="col-md-9">
          <ul className="list-group">
              <li className="list-group-item">Artist: {artist.name}</li>
              <li className="list-group-item">Followers: {artist.followers.total}</li>
              <li className="list-group-item">popularity: {artist.popularity}</li>
              <li className="list-group-item">Genre: {artist.genres}</li>
            </ul>
          </div>
          </div>
        </div>

        </div>
    )
  }
}
export default App;
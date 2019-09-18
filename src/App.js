
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
    var accessToken = 'BQB_fWWkrZSowY9Nc85lNwO4sQpoBVQYfMutB3AqGK0HQO3cqNb6y7SKZFqDCoiq96Vi-2mYBqh8oDcjPDZs8sRGNip_lHIpUs4TMudSGUWUxXvnTyaBVoni9N45kUsFtFJCfvXWN3s1OuQZshdgyVvIO7FBRfvXDh-AtNRhkg&refresh_token=AQAAhw2S_iyX9BuLUJ-V6C7HvIBG819DDVNsge77NALtCT6n0Yi7LtjW3dVVBajMzQ4-As78BWeCgBKEoV-8vcgzF8mAjEHHp5aGXU4lQgmoRdYNolPWVHLm8XkS2ypbCjuLPQ'

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

  getArtist(){
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&offset=0&limit=20&type=artist&market=FI';
    var accessToken = 'BQB87pe1zPvADMwsZg2dylwj3cCQdQLyCVCMtUO4j7To3Qkyk3QO_torizrp8eV6qab_ZajkKm1Lhbk8nJZYefVSTKmrVTZs-IDQ6LgyRWq8M1yF0K9xgt-kHh_Q79oZ5Ult84arGK-QMrVQHGELdu_KQjB4EitKfFoZ88cQtQ&refresh_token=AQBYZWFLm3HLvrR-snSgL8HoTfWlMmMXHZSARBVsSpQ1CE04yOzwNIN1Eauo_9ar9oSdPVRuvBiXnMdEYjUp4dy_DRuVRXXkud2qdCHKYc_iVRY5mt8X8xRXhU71zG-ynWdOyg'

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
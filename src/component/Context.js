
import React, { Component } from 'react';


class Conext extends Component {

  
   state = {
      query: "", // my query
      artist: null,   // my response. 
     
    }
 

  search() {
   console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&offset=0&limit=20&type=artist&market=FI';
    var accessToken = 'BQAfUwE7_DwcQKMKWLhopGimbHExfMUpkv8ElW0dy1Tt6voMabj0OiCbGYS7kLAXh5F830XZxsZOvXZz8-KS5FMSt6eSFgYervY9S8rDZA7Ok1wEsLRVXMKWq-qyIH4zqo_yBp83almZ6sVVwyZgvJB1uYwrXpWbcUp8KkjDfQ&refresh_token=AQAJlFn__LOYIAEVckospmd4_bZghdq1c7Kbiaexn9GgQQldKyQbuQcu3_uCenOXgNvETubCqC4GCXzR9HvNXNTR7ueumWjdXISkTPnbx4cHxVE-cEPWHZ_t3nsSVDhS8GbYnw'

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
      
      followers: {
        total: ''
      },
      
    images:[0].url
      
    };

    if (this.state.artist !== null) {
      artist = this.state.artist;
    }


    return (
     
      <div className="container">

        <h1>Lets find your artist</h1>
        <hr />
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" 
              onChange={event => { this.setState({ query: event.target.value }) }}
            className="form-control" placeholder="Search for..." />
            <span className="input-group-btn">
              <button 
              onClick={()=> this.search()}
            
                type="button">search</button>
            </span>
          </div>
        </div>
        <hr />
      
        <div className="card card-body mb-3">
        <div className="row">
        <div className="col-md-3">
        <div className="img-fluid mb-2" src={artist.images} style={{width:'160px',height: '160px'}}></div>
        <a href={artist.uri} target= "blank" className="btn btn-primary btn-block mb-4">View Profile</a>
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
export default Conext;
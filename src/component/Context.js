
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
    var accessToken = 'BQBtFi-_R-aHWc-1jBBVRDJoZ8p24uzVcRR5h8Wq1tO1PbaBCNXLwb7KPcNzKwJixKxjHcOAYugPQ4iH01GiRHze_7QELblo8kE7nQx85jXtjxOLTuT9RiBa0mP1V-QaTs4ovDWuQ3cBMEw6b-8Gtv-zSrFgWZLx6gGfZph8kg&refresh_token=AQAZEpiF5olwWGvLsYTj84SYu935aZrq1gjpKF8SPMaE7LK2JX5-xdAr3pePq2NGnrUhO4AcFDqsVSjeL0gNAAtRh7ATX45iAPYew5PLBkD-Qt4lYpe-Zd8KbG5CD4iqk-6I4w'

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
      
     uri:'',

     images:[0],
     
     
      
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
        <div className="img-fluid mb-2" src={artist.images} style={{width:'100px',height: '140px'}}></div>
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
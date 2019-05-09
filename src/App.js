import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import axios from 'axios';

export default class App extends Component {
  
  constructor() {
		super();
		this.state = {
			gifs: []
		};
	} 
	
	componentDidMount() {
		// -------------------------------------
		// REQUEST DATA USING THE FETCH API
		// -------------------------------------
		// fetch(
    //   "http://api.giphy.com/v1/gifs/trending?api_key=D4PpoOdRYYNkQB51SYP6tH6o66yuMdcM"
    // )
    //   .then(response => response.json())
    //   .then(responseData => {
    //     this.setState({ gifs: responseData.data });
    //   })
    //   .catch(error =>
    //     console.log("Error fetching and parsing data", error)
		//   );
		
		// -------------------------------------
		// REQUEST DATA USING AXIOS
		// -------------------------------------
		axios
      .get(
        "http://api.giphy.com/v1/gifs/trending?api_key=D4PpoOdRYYNkQB51SYP6tH6o66yuMdcM"
      )
      .then(response => {
				// handle success
        this.setState({ gifs: response.data.data });
      })
      .catch(error => {
        // handle error
        console.log('Error fetching and parsing data', error);
      })
      .finally(function() {
        // always executed
      });
	}

	performSearch = (query) => {
		axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=D4PpoOdRYYNkQB51SYP6tH6o66yuMdcM`
      )
      .then(response => {
        // handle success
        this.setState({ gifs: response.data.data });
      })
      .catch(error => {
        // handle error
        console.log("Error fetching and parsing data", error);
      })
      .finally(function() {
        // always executed
      });
	}







  render() { 
		console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

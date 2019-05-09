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
      .then(function(response) {
        // handle success
      })
      .catch(function(error) {
        // handle error
        console.log(error);
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
            <SearchForm />      
          </div>   
        </div>    
        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}

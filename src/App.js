import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const key = ``

class App extends Component {

  newsRequest = () => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`)
    .then((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div >

        <h1>Test</h1>

      </div>
    );
  }
}

export default App;

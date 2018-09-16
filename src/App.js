import React, { Component } from 'react';
import Title from './components/Title';
import Display from './components/Display';
import Navbar from './components/Navbar';
import './App.css';
import axios from 'axios';

const key = ``;

class App extends Component {

  newsRequest = () => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`)
    .then((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Title/>
        <Display />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Title from './components/Title';
import Display from './components/Display';
import CategoryFilter from './components/CategoryFilter';
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
      <div>
        <Title/>
        <CategoryFilter/>
        <Display/>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Title from './components/Title';
import Navbar from './components/Navbar';
import CategoryFilter from './components/CategoryFilter';
import './App.css';
import axios from 'axios';
import News from './components/News';
import {BrowserRouter as Router, Route} from 'react-router-dom';

let keys = require('./config.js')

class App extends Component {
  state = {
    articles: []
  }

  componentDidMount = (req, res) => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${keys.reuters}`)
    .then(res => {
      this.setState({articles: res.data.articles});
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route />
          <Route />
          <Route />
        </div>
      </Router>
    );
  }
}

export default App;

// <Title/>
// <CategoryFilter/>
// <News
// articles={this.state.articles}
// />

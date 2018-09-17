import React, { Component } from 'react';
import Title from './components/Title';
import Display from './components/Display';
import Navbar from './components/Navbar';
import CategoryFilter from './components/CategoryFilter';
import './App.css';
import axios from 'axios';

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
      <div>
        <Navbar />
        <Title/>
        <CategoryFilter/>
        <Display 
        articles={this.state.articles}
        />
        <ul>
          <li>{this.state.articles.map(article =>  {
              return <li><a href={article.url} >{article.title}</a></li>
          }) 
          }</li>
        </ul>

      </div>
    );
  }
}

export default App;

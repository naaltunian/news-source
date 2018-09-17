import React from 'react';
import DisplayArticle from './DisplayArticle';
import axios from 'axios';
import CategoryFilter from './CategoryFilter';

let keys = require('./config.js');

class Display extends React.Component {
  state = {
    articles: []
  }

  componentDidMount = (req, res) => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${keys.reuters}`)
    .then(res => {
      this.setState({articles: res.data.articles});
    });
    console.log(res);
  }

  render() {
    return(
      <div>
        <CategoryFilter />
        <ul>
          {this.state.articles.map(article =>  {
            return <li key={article.title}><a href={article.url} >{article.title}</a></li>})
          }
        </ul>
      </div>
      );
    }
  }

export default Display;

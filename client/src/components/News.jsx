import React from 'react';
import DisplayArticle from './DisplayArticle';
import axios from 'axios';
import CategoryFilter from './CategoryFilter';

let keys = require('./config.js');

class Display extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    axios.get(`/api`)
    .then(({data}) => {
      this.setState({articles: data})
      console.log(this.state.articles);
    }).catch(err => {
      console.log(err.message);
    });
  }

  render() {
    return(
      <div>
        <CategoryFilter />
          {this.state.articles.map((article) => {
            return <DisplayArticle article={article} />
          })}
      </div>
      );
    }
  }

export default Display;

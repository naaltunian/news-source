import React from 'react';
import DisplayArticle from './DisplayArticle';
import axios from 'axios';
import CategoryFilter from './CategoryFilter';

let keys = require('./config.js');

class Display extends React.Component {
  state = {
    articles: []
  }

  componentDidMount(req, res) {
    axios.get(`/api`)
    .then(({data}) => {
      this.setState({articles: data})
    }).catch(err => {
      console.log(err.message);
    });
    console.log(res);
  }

  render() {
    return(
      <div>
        <CategoryFilter />
        <ul>
          {this.state.articles.map(article =>  {
            return(
                <div>
                    {article.urlToImage && <img key={article.title} src={article.urlToImage} alt={article.title} width='300px' height='200px'/>}
                    {article.title && <h4 key={article.title}><a href={article.url} >{article.title}</a></h4>}
                    {article.author && <p key={article.title}>By: {article.author}</p>}
                    {article.description && <p key={article.title}>{article.description}</p>}
                </div>
            )
          })
          }
        </ul>
      </div>
      );
    }
  }

export default Display;

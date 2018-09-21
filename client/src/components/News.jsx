import React from 'react';
import DisplayArticle from './DisplayArticle';
import axios from 'axios';
import CategoryFilter from './CategoryFilter';
import {Grid} from 'semantic-ui-react'

let keys = require('./config.js');

const words = {
  margin: '40px'
}

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
        <div className="background" style={words}>
          <CategoryFilter />
        </div>
        <Grid columns='equal' centered>
          {this.state.articles.map((article) => {
            return <DisplayArticle article={article} />
          })}
        </Grid>
      </div>
      );
    }
  }

export default Display;

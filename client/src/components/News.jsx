import React from 'react';
import DisplayArticle from './DisplayArticle';
import axios from 'axios';
import CategoryFilter from './CategoryFilter';
import {Grid} from 'semantic-ui-react'
import { timingSafeEqual } from 'crypto';

const words = {
  margin: '40px'
}

class Display extends React.Component {
  state = {
    articles: [],
    category: ''
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
        <div style={words}>
          <CategoryFilter  />
        </div>
        <Grid className="background" columns='equal' centered>
          {this.state.articles.map((article, index) => {
            return <DisplayArticle key={index} article={article} />
          })}
        </Grid>
      </div>
      );
    }
  }

export default Display;

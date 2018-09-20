import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'

const cards = {
  width: '300px',
  height: '400px'
}



const DisplayArticle = (props) => {
    return (
      
        <Grid columns='equal' divided>
          <Grid.Column>
            <Grid.Row stretched>
              <Segment>
                {props.article.urlToImage && <img key={props.article.title} src={props.article.urlToImage} alt={props.article.title} width='300px' height='200px'/>}
                {props.article.title && <h4 key={props.article.title}><a href={props.article.url} >{props.article.title}</a></h4>}
                {props.article.author && <p key={props.article.title}>By: {props.article.author}</p>}
                {props.article.description && <p key={props.article.title}>{props.article.description}</p>}
              </Segment>
            </Grid.Row>
          </Grid.Column>
        </Grid>
   
    );
  }

  export default DisplayArticle;

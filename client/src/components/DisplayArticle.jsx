import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'

const cards = {
  width: '300px',
  height: '400px',
  wordWrap: 'normal'
}





const DisplayArticle = (props) => {
    return (
     <div style={cards}>
          <Grid.Column >
            <Grid.Row>
              <Segment >
                {props.article.urlToImage && <img key={props.article.title} src={props.article.urlToImage} alt={props.article.title} width='300px' height='200px'/>}
                {props.article.title && <h4 key={props.article.title}><a href={props.article.url} >{props.article.title}</a></h4>}
                {props.article.author && <p key={props.article.title}>By: {props.article.author}</p>}
                {props.article.description && <p key={props.article.title}>{props.article.description}</p>}
              </Segment>
           </Grid.Row>
          </Grid.Column>
        </div>
    );
  }

  export default DisplayArticle;

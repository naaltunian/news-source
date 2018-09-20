import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'

const cards = {
  width: '300px',
  height: '450px',
  margin: '10px'
}





const DisplayArticle = (props) => {
    return (
     <div style={cards}>
          <Grid.Column >
            <Grid.Row >
              <Card style={cards}>
                {props.article.urlToImage && <Image key={props.article.title} src={props.article.urlToImage} alt={props.article.title} width='300px' height='200px'/>}
                {props.article.title && <h4 key={props.article.title}><a href={props.article.url} >{props.article.title}</a></h4>}
                {props.article.author && <p key={props.article.title}>By: {props.article.author}</p>}
                {props.article.description && <p key={props.article.title}>{props.article.description}</p>}
              </Card>
           </Grid.Row>
          </Grid.Column>
        </div>
    );
  }

  export default DisplayArticle;

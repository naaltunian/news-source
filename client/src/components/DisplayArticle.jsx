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
    {props.article.urlToImage ? <Image src={props.article.urlToImage} width='300px' height='200px'/> : <Image  src='https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-0.3.5&s=58c415f3926f83db083eff8967fac94b&auto=format&fit=crop&w=975&q=80' width='300px' height='200px'/> }
                {props.article.title && <h4><a target='to_blank'href={props.article.url} >{props.article.title}</a></h4>}
                {props.article.author && <p>By: {props.article.author}</p>}
                {props.article.source.name && <p>{props.article.source.name}</p>}
                {props.article.description && <p>{props.article.description}</p>}
              </Card>
           </Grid.Row>
          </Grid.Column>
        </div>
    );
  }

  export default DisplayArticle;

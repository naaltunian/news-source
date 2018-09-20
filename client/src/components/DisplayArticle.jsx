import React from 'react';

const DisplayArticle = (props) => {
    return (
      <div>
          {props.article.urlToImage && <img key={props.article.title} src={props.article.urlToImage} alt={props.article.title} width='300px' height='200px'/>}
          {props.article.title && <h4 key={props.article.title}><a href={props.article.url} >{props.article.title}</a></h4>}
          {props.article.author && <p key={props.article.title}>By: {props.article.author}</p>}
          {props.article.description && <p key={props.article.title}>{props.article.description}</p>}
      </div>
    );
  }

  export default DisplayArticle;

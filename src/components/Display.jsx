import React from 'react';
import DisplayArticle from './DisplayArticle';

const Display = (props) => {
  return(
    <div>
      <ul>
        <li>{props.articles.map(article =>  {
            return <li><a href={article.url} >{article.title}</a></li>
        }) 
        }</li>
      </ul>
    </div>
  );
}

export default Display;

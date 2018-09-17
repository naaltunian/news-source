import React from 'react';
import DisplayArticle from './DisplayArticle';

const Display = (props) => {
  return(
    <div>
      <ul>
        {props.articles.map(article =>  {
            return <li key={article.title}><a href={article.url} >{article.title}</a></li>
        })
        }
      </ul>
    </div>
  );
}

export default Display;

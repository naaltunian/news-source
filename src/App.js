import React, { Component } from 'react';
import Title from './components/Title';
import DisplayArticle from './components/DisplayArticle';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Title/>
        <CategoryFilter/>
        <DisplayArticle/>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Title from './components/Title';
import DisplayArticle from './components/DisplayArticle';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Title/>
        <DisplayArticle/>
      </div>
    );
  }
}

export default App;

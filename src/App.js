import React, { Component } from 'react';
import Title from './components/Title';
import Navbar from './components/Navbar';
import './App.css';
import News from './components/News';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News}/>
        </div>
      </Router>
    );
  }
}

export default App;

// <Title/>
// <CategoryFilter/>
// <News
// articles={this.state.articles}
// />

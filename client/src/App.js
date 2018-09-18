import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import News from './components/News';
import About from './components/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={News} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News}/>
        </div>
      </Router>
    );
  }
}

export default App;

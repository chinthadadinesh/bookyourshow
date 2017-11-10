import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Banner from './Banner'
import Boxoffice from './Boxoffice'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
        <Banner/>
        <Boxoffice/>
      </div>
    );
  }
}

export default App;

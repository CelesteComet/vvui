import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Store from './store/store';

// Components
import Header from './components/header';

class App extends Component {
  render() {
    
    window.store = Store;

    return(
      <Provider store={ Store }>
        <Header />
      </Provider>
    );
  }
}

export default App;

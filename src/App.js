import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Store from './store/store';


// API
import { Items } from './fakeData/vvitems'

// Components

import Header from './components/header';
import VVList from './components/vvlist';

class App extends Component {
  constructor() {
    super();

    this.state = {

      // Window Size State
      windowSize: {
        width: null,
        height: null
      },
      // List Items State
      listItems: Items.map((item, index) => {
        let mItem = {};
        mItem.verified = false;
        mItem.data = item;
        mItem.active = false;
        mItem.window = null;
        mItem.windowActive = false;
        return mItem;
      })

    }

    this.handleVerify = this.handleVerify.bind(this);
    this.setWindowSize = this.setWindowSize.bind(this);
    this.openWindows = this.openWindows.bind(this);
    this.getRecords = this.getRecords.bind(this);
    this.openWindow = this.openWindow.bind(this);

  }

  handleVerify(index) {
    let spliced = this.state.listItems.splice(index, 1)[0];
    spliced.verified = true;
    spliced.window.close();
    spliced.windowActive = false;
    this.state.listItems.push(spliced);
    this.setState({
      listItems: this.state.listItems 
    })
  }

  setWindowSize(e) {
    e.preventDefault();
    this.setState({
      windowSize: {
        height: window.outerHeight,
        width: window.outerWidth,
        left: window.screenX,
        top: window.screenY
      }
    })
  }


  openWindows(e) {
    e.preventDefault();

    let windowHeight = this.state.windowSize.height;
    let windowWidth = this.state.windowSize.width;
    let windowLeft = this.state.windowSize.left;
    let windowTop = this.state.windowSize.top;

    this.state.listItems.reverse().forEach((item) => {
      if(!item.verified) {
        item.window = window.open(item.data.url, null, "height=" + windowHeight + ",width=" + windowWidth)
        item.window.moveTo(windowLeft, windowTop);
      }
    })

    this.setState({
      listItems: this.state.listItems.reverse()
    })
  }

  openWindow(index) {
    let windowHeight = this.state.windowSize.height;
    let windowWidth = this.state.windowSize.width;
    let windowLeft = this.state.windowSize.left;
    let windowTop = this.state.windowSize.top;
    // if window is already open, open it normally and return
    if(this.state.listItems[index].window) {
      //this.state.listItems[index].window.focus();

      // Make all items not have windowActive of false.
      this.state.listItems.forEach((item) => {
        item.windowActive = false;
      })

      // Let the clicked item have a windowActive of true.
      this.state.listItems[index].windowActive = true;


    } else {
      this.state.listItems[index].window = window.open(this.state.listItems[index].data.url, null, "height=" + windowHeight + ",width=" + windowWidth);
      this.state.listItems[index].window.moveTo(windowLeft, windowTop);

      // Make all items not have windowActive of false.
      this.state.listItems.forEach((item) => {
        item.windowActive = false;
      })

      // Let the clicked item have a windowActive of true.
      this.state.listItems[index].windowActive = true;
    }



    this.setState({
      listItems: this.state.listItems
    })




  }

  getRecords() {
    let newItems = Items.map((item, index) => {
      let mItem = {};
      mItem.verified = false;
      mItem.data = item;
      return mItem;
    })
    this.setState({
      listItems: newItems.concat(this.state.listItems)
    })
  }


  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    
    console.log(this.state.listItems)

    return(
      <myApp>
        <Header 
          setWindowSize={this.setWindowSize} 
          openWindows={this.openWindows} 
          getRecords={this.getRecords} 
           />
        <VVList 
          listItems={this.state.listItems}
          handleVerify={this.handleVerify} 
          openWindow={this.openWindow}/>
      </myApp>
    );
  }
}

export default App;

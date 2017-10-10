import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddFriend />
        <FriendsList />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import GiphyList from './GiphyList';
import SearchGifs from './SearchGifs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Giffy Search App</h1>
        <SearchGifs />
      </div>
    );
  }
}

export default App;

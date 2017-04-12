import React, { Component } from 'react';

import SearchGifs from './SearchGifs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Search Giphy</h1>
        <SearchGifs />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios'

class SearchGifs extends Component {
  constructor() {
    super()
    this.state = {
      gif: ''
    }
  }

  handleSubmit(e) {

    if(e.keyCode === 13) {
      axios.get(`http://api.giphy.com/v1/gifs/search?q=${e.target.value}&api_key=dc6zaTOxFJmzC `)
      .then(res => {
        console.log(res);
      })
    }
  }

  render() {
    return (
      <div className='SearchGifs'>
        <input className='search-gifs'
          type='text'
          placeholder='search for a gif'
          onKeyUp={this.handleSubmit}/>
      </div>
    );
  }
}

export default SearchGifs;

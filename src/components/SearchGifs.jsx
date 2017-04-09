import React, { Component } from 'react';
import axios from 'axios'

class SearchGifs extends Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  handleSubmit(e) {
    if(e.keyCode === 13) {
      axios.get(`http://api.giphy.com/v1/gifs/search?q=${e.target.value}&api_key=dc6zaTOxFJmzC `)
      .then(res => {
        const gifs = res.data.data
        this.setState({
          gifs
        })
      })
    }
  }

  render() {
    return (
      <div className='SearchGifs'>
        <input className='search-gifs'
          type='text'
          placeholder='search for a gif'
          onKeyUp={(e) => this.handleSubmit(e)}/>
      </div>
    );
  }
}

export default SearchGifs;

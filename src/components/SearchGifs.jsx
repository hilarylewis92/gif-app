import React, { Component } from 'react';
import axios from 'axios'

class SearchGifs extends Component {
  constructor() {
    super()
    this.state = {
      gif: ''
    }
  }

  handleChange(e) {
    this.setState({
      gif: e.target.value
    })
  }

  handleSubmit(e) {
    if(e.keyCode === 13) {
      axios.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
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
          onChange={(e) => this.handleChange(e)}
          onKeyUp={this.handleSubmit}/>
      </div>
    );
  }
}

export default SearchGifs;

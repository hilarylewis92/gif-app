import React, { Component } from 'react';
import axios from 'axios'
import { TweenLite, Linear } from 'gsap'

import GiphyList from './GiphyList';

class SearchGifs extends Component {
  constructor() {
    super()
    this.state = {
      gifs: null
    }
  }

  handleSubmit(e) {
    if(e.keyCode === 13) {
      this.gsapAnimation()
      axios.get(`https://api.giphy.com/v1/gifs/search?q=${e.target.value}&api_key=dc6zaTOxFJmzC `)
      .then(res => {
        const gifs = res.data.data
        this.setState({
          gifs
        })
      })
    }
  }

  gsapAnimation() {
    TweenLite.to('.SearchGifs', 1,
      {
        margin: 0,
        ease: Linear.easeNone,
      }
    )
  }

  render() {
    const { gifs } = this.state

    return (
      <div className='SearchGifs'>
        <input className='search-gifs'
          type='text'
          placeholder='enter a keyword, then press enter'
          onKeyUp={(e) => this.handleSubmit(e)}/>

        {gifs ?
          <GiphyList
            gifs={gifs}
          />
          : null
        }

      </div>
    );
  }
}

export default SearchGifs;

import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import Sharable from './Sharable'

var masonryOptions = {
  transitionDuration: 1
}

class GiffyList extends Component {
  render() {
    const { gifs } = this.props
    const gif = gifs.map(gif => {
      return (
        <li className='gif-list-item'
          key={gif.id}>
          <a href={gif.embed_url}
            target='_blank'>
            <img className='single-gif'
              src={gif.images.downsized.url}
              type='gif'
              alt='giphy'
            />
          </a>
          <Sharable
            shareUrl={gif.embed_url}
          />
        </li>
      )
    })

    return (
      <Masonry
        className={'gif-list'}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {gif}
      </Masonry>
    )
  }
}

export default GiffyList

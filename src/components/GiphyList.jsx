import React, { Component } from 'react';

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
        </li>
      )
    })

    return (
      <div className="GiffyList">
        <ul className='gif-list'>
          {gif}
        </ul>
      </div>
    );
  }
}

export default GiffyList;

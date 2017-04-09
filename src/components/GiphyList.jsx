import React, { Component } from 'react';
import axios from 'axios'

class GiffyList extends Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  // componentDidMount() {
  //   axios.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
  //   .then(res => {
  //     const gifs = res.data.
  //   })
  // }


  render() {
    return (
      <div className="GiffyList">
        <h2>Giffy List</h2>
      </div>
    );
  }
}

export default GiffyList;

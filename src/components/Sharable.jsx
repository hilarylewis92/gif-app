import React, { Component } from 'react'
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share'

class Sharable extends Component {
  render() {
    const { FacebookShareButton, TwitterShareButton } = ShareButtons
    const { FacebookShareCount } = ShareCounts
    const FacebookIcon = generateShareIcon('facebook')
    const TwitterIcon = generateShareIcon('twitter')
    const { shareUrl } = this.props

    return (
      <div className="Sharable">
        <FacebookShareButton
          url={shareUrl}
          className="share-btn facebook-share-btn">
          <FacebookIcon
            size={32}
            round />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          className="share-btn twitter-share-button">
          <TwitterIcon
            size={32}
            round />
        </TwitterShareButton>
      </div>
    )
  }
}

export default Sharable

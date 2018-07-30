// Code YouTubeDebugger Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class YouTubeDebugger extends React.Component {
  constructor(){
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: '1080p' }
      }
    }
  }
  updateBitrate = () => {
    this.setState({
      settings: Object.assign(...this.state.settings, bitrate: 12)
    })
  }

  updateResolution = () => {
    // change to 720p
    this.setState({
      settings: Object.assign(...this.state.settings, video: {'resolution': '720p'})
    })
  }
  render(
    return (
      <button className='bitrate' onClick={}>Change Bitrate</button>
      <button className='resolution' onClick={}>Change Resolution</button>
    )
  )
}

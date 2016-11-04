import React from 'react'

import TweetActions from '../actions/TweetActions'

class TweetBox extends React.Component {
  constructor (props) {
    super(props)

    this.sendTweet = this.sendTweet.bind(this)
  }
  sendTweet (e) {
    e.preventDefault()
    TweetActions.sendTweet(this.refs.tweetTextArea.value)
    this.refs.tweetTextArea.value = ''
  }
  render () {
    return (
      <div className='row'>
        <form className='col s12' onSubmit={this.sendTweet}>
          <div className='input-field col s12'>
            <textarea
              id='tweet-textarea'
              className='materialize-textarea'
              ref='tweetTextArea'
            />
            <label htmlFor='tweet-textarea'>What's happening</label>
            <button type='submit' className='btn right'>Tweet</button>
          </div>
        </form>
      </div>
    )
  }
}

export default TweetBox

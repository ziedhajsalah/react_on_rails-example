/* global $ */
import React from 'react'
import ReactOnRails from 'react-on-rails'

import TweetBox from './components/TweetBox'
import TweetsList from './components/TweetsList'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      tweets: []
    }
    this.addTweet = this.addTweet.bind(this)
  }
  addTweet (tweet) {
    $.post('/tweets', { tweet })
      .success(addedTweet => {
        let tweets = this.state.tweets
        tweets.unshift(addedTweet)
        this.setState({ tweets })
      })
      .error(error => console.log(error))
  }
  componentDidMount () {
    $.ajax('/tweets')
      .success(data => this.setState({tweets: data}))
      .error(error => console.log(error))
  }
  render () {
    return (
      <div>
        <TweetBox sendTweet={this.addTweet} />
        <TweetsList tweets={this.state.tweets} />
      </div>
    )
  }
}

ReactOnRails.register({ App })


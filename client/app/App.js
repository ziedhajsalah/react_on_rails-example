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
    let ids = this.state.tweets.map(tweet => parseInt(tweet.id))
    let id = ids.reduce((p, n) => {
      if (n > p) return n
      return p
    }, 0)

    let newTweet = {
      id: (id + 1).toString(),
      name: 'Zied Haj Salah',
      body: tweet
    }

    let tweets = this.state.tweets
    tweets.push(newTweet)
    this.setState({ tweets })
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


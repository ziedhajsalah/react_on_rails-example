import React from 'react'
import ReactOnRails from 'react-on-rails'

import TweetBox from './components/TweetBox'
import TweetsList from './components/TweetsList'

import TweetStore from './stores/TweetStore'
import TweetActions from './actions/TweetActions'

let getAppState = () => {
  return { tweets: TweetStore.getAll() }
}

class App extends React.Component {
  constructor () {
    super()

    this.state = { tweets: [] }
    this._onChange = this._onChange.bind(this)
  }
  componentDidMount () {
    TweetActions.getAllTweets()
    this.setState(getAppState())
    TweetStore.addChangeListener(this._onChange)
  }
  componentWillUnmount () {
    TweetStore.removeChangeListener(this._onChange)
  }
  _onChange () {
    this.setState(getAppState())
  }
  render () {
    return (
      <div>
        <TweetBox />
        <TweetsList tweets={this.state.tweets} />
      </div>
    )
  }
}

ReactOnRails.register({ App })


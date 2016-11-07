import React from 'react'
import { Link } from 'react-router'

import TweetBox from './TweetBox'
import TweetsList from './TweetsList'

import TweetStore from '../stores/TweetStore'
import TweetActions from '../actions/TweetActions'

let getAppState = () => {
  return { tweets: TweetStore.getAll() }
}

class Index extends React.Component {
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
        <Link to='/follow'> who to follow</Link>
        <TweetBox />
        <TweetsList tweets={this.state.tweets} />
      </div>
    )
  }
}

export default Index

import React from 'react'
import Tweet from './Tweet'

class TweetsList extends React.Component {
  render () {
    return (
      <div className='row'>
        <ul className='collection'>
          {this.props.tweets.map(tweet => (
            <Tweet key={tweet.id} {...tweet} />
          ))}
        </ul>
      </div>
    )
  }
}

TweetsList.propTypes = {
  tweets: React.PropTypes.array
}

export default TweetsList


import AppDispatcher from '../dispatcher'

export default {
  receivedTweets (rawTweets) {
    AppDispatcher.dispatch({
      rawTweets,
      actionType: 'RECEIVED_TWEETS'
    })
  },
  receivedOneTweet (tweet) {
    AppDispatcher.dispatch({
      tweet,
      actionType: 'RECEIVED_ONE_TWEET'
    })
  }
}

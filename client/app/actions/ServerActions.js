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
  },
  receivedUsers (rawUsers) {
    AppDispatcher.dispatch({
      rawUsers,
      actionType: 'RECEIVED_USERS'
    })
  }
}

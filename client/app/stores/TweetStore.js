import AppDispatcher from '../dispatcher'
import AppEventEmitter from './AppEventEmitter'

let _tweets = []

class TweetEventEmitter extends AppEventEmitter {
  getAll () {
    return _tweets
  }
}

let TweetStore = new TweetEventEmitter()

AppDispatcher.register(action => {
  switch (action.actionType) {
    case 'RECEIVED_TWEETS':
      _tweets = action.rawTweets
      TweetStore.emitChange()
      break
    case 'RECEIVED_ONE_TWEET':
      _tweets.unshift(action.tweet)
      TweetStore.emitChange()
      break
    default:
      //
  }
})

export default TweetStore

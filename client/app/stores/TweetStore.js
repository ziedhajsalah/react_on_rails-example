import AppDispatcher from '../dispatcher'
import { EventEmitter } from 'events'

let _tweets = []
class TweetEventEmitter extends EventEmitter {
  getAll () {
    return _tweets
  }
  emitChange () {
    this.emit('CHANGE')
  }
  addChangeListener (cb) {
    this.on('CHANGE', cb)
  }
  removeChangeListener (cb) {
    this.removeListener('CHANGE', cb)
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

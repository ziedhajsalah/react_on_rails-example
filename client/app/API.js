import $ from 'jquery'
import ServerActions from './actions/ServerActions'

export default {
  getAllTweets () {
    $.get('/tweets')
      .success(data => ServerActions.receivedTweets(data))
      .error(error => console.log(error))
  },
  createTweet (tweet) {
    $.post('/tweets', { tweet })
      .success(tweet => ServerActions.receivedOneTweet(tweet))
      .error(error => console.log('ther is an error', error))
  },
  getAllUsers () {
    $.get('/followers/random')
      .success(data => ServerActions.receivedUsers(data))
      .error(error => console.log(error))
  }
}

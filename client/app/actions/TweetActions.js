import API from '../API'

export default {
  getAllTweets () {
    API.getAllTweets()
  },
  sendTweet (tweet) {
    API.createTweet(tweet)
  }
}

import React from 'react'

class TweetBox extends React.Component {
  render () {
    return (
      <div className='row'>
        <form className='col s12'>
          <div className='input-field col s12'>
            <textarea id='tweet-textarea' className='materialize-textarea' />
            <label htmlFor='tweet-textarea'>What's happening</label>
            <button className='btn rigth'>Tweet</button>
          </div>
        </form>
      </div>
    )
  }
}

export default TweetBox

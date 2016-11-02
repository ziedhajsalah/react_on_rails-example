import React from 'react'
import ReactOnRails from 'react-on-rails'

import TweetBox from './components/TweetBox'

const App = (props) => (
  <div className='container'>
    <TweetBox />
  </div>
)

ReactOnRails.register({ App })

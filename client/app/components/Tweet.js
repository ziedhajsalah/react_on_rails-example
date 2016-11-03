import React from 'react'

import moment from 'moment'
import md5 from 'js-md5'

class Tweet extends React.Component {
  render () {
    let hash = md5(this.props.email)
    let gravatar = 'https://www.gravatar.com/avatar/' + hash
    let time = moment(this.props.created_at).fromNow()
    return (
      <li className='collection-item avatar'>
        <img className='circle' src={gravatar} />
        <span className='title'>{this.props.name}</span>
        <p>{this.props.body}</p>
        <time className='right'>{time}</time>
      </li>
    )
  }
}

Tweet.propTypes = {
  name: React.PropTypes.string,
  body: React.PropTypes.string
}

export default Tweet


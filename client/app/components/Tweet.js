import React from 'react'

class Tweet extends React.Component {
  render () {
    return (
      <li className='collection-item avatar'>
        <i className='material-icons circle'>person_pin</i>
        <span className='title'>{this.props.name}</span>
        <p>{this.props.body}</p>
      </li>
    )
  }
}

Tweet.propTypes = {
  name: React.PropTypes.string,
  body: React.PropTypes.string
}

export default Tweet


import React from 'react'
import md5 from 'js-md5'
import { Link } from 'react-router'

import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'

const getAppState = () => {
  return { users: UserStore.getAll() }
}

export default class Follow extends React.Component {
  constructor (props) {
    super(props)

    this.state = { users: [] }

    this._onChange = this._onChange.bind(this)
  }
  componentDidMount () {
    UserActions.getAllUsers()
    UserStore.addChangeListener(this._onChange)
  }
  componentWillUnmount () {
    UserStore.removeChangeListener(this._onChange)
  }
  _onChange () {
    this.setState(getAppState())
  }
  render () {
    const users = this.state.users.map(user => {
      const gravatar = user.email
        ? 'http://www.gravatar.com/avatar/' + md5(user.email)
        : ''
      const displayUser = user.first_name || user.last_name
        ? user.first_name + ' ' + user.last_name
        : user.email
      return (
        <li key={user.id} className='collection-item avatar'>
          <img src={gravatar} className='circle' />
          <span className='title'>{displayUser}</span>
        </li>
      )
    })
    return (
      <div>
        <h3>who to follow</h3>
        <Link to='/'>back</Link>
        <ul className='collection'>
          {users}
        </ul>
      </div>
    )
  }
}

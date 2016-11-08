import React from 'react'
import { Link } from 'react-router'

import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'
import UserBox from './UserBox'

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
      return <UserBox key={user.id} user={user} />
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

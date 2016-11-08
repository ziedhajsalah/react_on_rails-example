import React from 'react'
import md5 from 'js-md5'

const UserBox = (props) => {
  const gravatar = props.user.email
    ? 'http://www.gravatar.com/avatar/' + md5(props.user.email)
    : ''
  const displayUser = props.user.first_name || props.user.last_name
    ? props.user.first_name + ' ' + props.user.last_name
    : props.user.email

  return (
    <li className='collection-item avatar'>
      <img src={gravatar} className='circle' />
      <span className='title'>{displayUser}</span>
    </li>
  )
}
export default UserBox


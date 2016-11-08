import AppDispatcher from '../dispatcher'
import AppEventEmitter from './AppEventEmitter'

let _users = []

class UserEventEmitter extends AppEventEmitter {
  getAll () {
    return _users
  }
}

let UserStore = new UserEventEmitter()

AppDispatcher.register(action => {
  switch (action.actionType) {
    case 'RECEIVED_USERS':
      _users = action.rawUsers
      UserStore.emitChange()
      break
    default:
      //
  }
})

export default UserStore


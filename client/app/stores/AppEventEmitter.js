import { EventEmitter } from 'events'

export default class AppEventEmitter extends EventEmitter {
  emitChange () {
    this.emit('CHANGE')
  }
  addChangeListener (cb) {
    this.on('CHANGE', cb)
  }
  removeChangeListener (cb) {
    this.removeListener('CHANGE', cb)
  }
}


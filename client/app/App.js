import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import ReactOnRails from 'react-on-rails'

import Index from './components/Index'
import Follow from './components/Follow'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Index} />
    <Route path='/follow' component={Follow} />
  </Router>
)

ReactOnRails.register({ App })


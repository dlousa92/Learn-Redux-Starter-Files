import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import css from './styles/style.styl'

import Main from './components/Main'
import Photogrid from './components/Photogrid'
import Single from './components/single'

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Photogrid} />
      <Route path='/view/:postId' component={Single} />
    </Route>
  </Router>
)

render(router, document.getElementById('root'))

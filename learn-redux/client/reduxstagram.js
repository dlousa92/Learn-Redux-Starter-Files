import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'
import css from './styles/style.styl'

import Main from './components/Main'
import Photogrid from './components/Photogrid'
import Single from './components/single'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Main}>
        <IndexRoute component={Photogrid} />
        <Route path='/view/:postId' component={Single} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))

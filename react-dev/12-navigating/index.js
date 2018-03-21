import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Home from './modules/Home'
import List from './modules/List'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/list" component={List}/>
      <Route path="/list/:param" component={List}/>
    </Route>
  </Router>
), document.getElementById('app'))

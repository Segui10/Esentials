import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, Switch } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Home from './modules/Home'
import Root from './modules/Root'
import Details from './modules/Details'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/esential'

render(
  <Root />
, document.getElementById('app'))

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, Switch } from 'react-router'
import App from './App'
import About from './About'
import ListCon from '../container/list-container'
import CartCon from '../container/list-cart'
import DetailsCon from '../container/details-container'
import Home from './Home'
import Details from './Details'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../reducers/esential'
import thunk from 'redux-thunk';
import { loadOffer, loadList, loadShops, addCart } from '../actions';

const store = createStore(rootReducer, applyMiddleware(thunk)); 
store.dispatch(loadOffer());
store.dispatch(loadList());
store.dispatch(loadShops());


class Root extends React.Component{
  
  render() {
    
    return (
        <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/list" component={ListCon}/>
            <Route path="/list/:param" component={ListCon}/>
            <Route path="/details/:param" component={DetailsCon}/>
            <Route path="/cart" component={CartCon}/>
          </Route>
        </Router>
        </Provider>
    );
  }
}

export default Root;
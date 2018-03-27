import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, Switch } from 'react-router'
import App from './App'
import About from './About'
import Home from './Home'
import List from './List'
import Details from './Details'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../reducers/esential'
import axiosMiddleware from 'redux-axios-middleware';
import clients from '../clients';

const store = createStore(rootReducer,applyMiddleware(
    axiosMiddleware(clients),
  )); 

class Root extends React.Component{
    constructor(props){
      super(props);
      this.state = {                
        offerProducts:store.getState().products
      };  
         
    } 


  
  render() {
    return (
        <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} store={this.state.offerProducts}/>
            <Route path="/about" component={About}/>
            <Route path="/list" component={List}/>
            <Route path="/list/:param" component={List}/>
            <Route path="/details/:param" component={Details}/>
          </Route>
        </Router>
        </Provider>
    );
  }
}

export default Root;
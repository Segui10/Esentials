import React from 'react'
import NavLink from './NavLink'
import * as actionCreators from '../actions/index';
import {connect} from 'react-redux'


class App extends React.Component{
  constructor(props){
    super(props);
    
  } 
  render() {

   
    return (
      <div>
       <div className="titleCont">
        <h1 className="title">Essential</h1>
        </div>
        <ul role="nav" className="menu" id="navbar">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/list">Componentes</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return state;
}

export default connect (mapStateToProps, actionCreators)(App);

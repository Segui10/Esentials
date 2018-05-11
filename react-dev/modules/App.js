import React from 'react'
import NavLink from './NavLink'
import * as actionCreators from '../actions/index';
import {connect} from 'react-redux'
import LoginCon from '../container/login-container'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  } 

  _onButtonClick() {
    let show=this.state.showComponent
    if(show==true){show=false}else{show=true}
    this.setState({
      showComponent: show,
    });
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
          <li><NavLink to="/makepc">MakePC</NavLink></li>
          <li><a onClick={this._onButtonClick}>Login</a></li>
           <LoginCon show={this.state.showComponent}/>
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

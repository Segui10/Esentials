import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../actions/index';
import Login from '../modules/Login';


const mapStateToProps=(state)=>{
    console.log(state);
    return state.user;
  }

class LoginCon extends React.Component{
    constructor(props){
        super(props);
        this.state = {                
            store: this.props,
        };  
      } 

      componentWillReceiveProps(nextProps){
          this.setState({
            store:nextProps
          })
      }

render(){
    return(
        <Login list={this.state.store.list} ></Login>
    )
}
};

export default connect (mapStateToProps, actionCreators)(LoginCon);
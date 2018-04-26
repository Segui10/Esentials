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
            show: this.props.show
        };  
      } 

      componentWillReceiveProps(nextProps){
          this.setState({
            store:nextProps
          })
      }

render(){
    console.log(this.state.show);
    return(
        <Login show={this.state.show} register={this.props.registerUser}></Login>
    )
}
};

export default connect (mapStateToProps, actionCreators)(LoginCon);
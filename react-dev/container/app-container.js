import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../actions/index';
import App from '../modules/App';


const mapStateToProps=(state)=>{
    return state;
  }

class AppCon extends React.Component{
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
        <App  user={this.state.store}></App>
    )
}
};

export default connect (mapStateToProps, actionCreators)(AppCon);
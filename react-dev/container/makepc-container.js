import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../actions/index';
import Makepc from '../modules/Makepc';


const mapStateToProps=(state)=>{
    return state.productsList;
  }
  

class MakepcCon extends React.Component{
    constructor(props){
        super(props);
        this.state = {                
            products: this.props,
        };  
      } 

      componentWillReceiveProps(nextProps){
          this.setState({
            products:nextProps
          })
      }

render(){
    
    return(
        <Makepc list={this.state.products.list}></Makepc>
    )
}
};

export default connect (mapStateToProps, actionCreators)(MakepcCon);
import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../actions/index';
import Cart from '../modules/Cart';


const mapStateToProps=(state)=>{
    console.log(state);
    return state.cart;
  }

class CartCon extends React.Component{
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
        <Cart list={this.state.store.list} ></Cart>
    )
}
};

export default connect (mapStateToProps, actionCreators)(CartCon);
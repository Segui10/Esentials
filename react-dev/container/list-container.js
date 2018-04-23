import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../actions/index';
import List from '../modules/List';


const mapStateToProps=(state)=>{
    console.log(state);
    return state.productsList;
  }
  

class ListCon extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
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
        <List list={this.state.products.list} addcart={this.props.addCart}></List>
    )
}
};

export default connect (mapStateToProps, actionCreators)(ListCon);
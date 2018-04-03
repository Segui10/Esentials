import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../actions/index';
import Details from '../modules/Details';


const mapStateToProps=(state)=>{
    return state;
  }

class DetailsCon extends React.Component{
    constructor(props){
        super(props);
        this.state = {                
            store: this.props.productsList,
            params:this.props.params.param,
            shops:this.props.shopsList,
        };  
      } 

      componentWillReceiveProps(nextProps){
        console.log("nextProps");
          console.log(nextProps);
          this.setState({
            store:nextProps.productsList,
            params:nextProps.params.param,
            shops:nextProps.shopsList,
          })
      }


render(){
    
    let product={};
    this.state.store.list.map((item, i) => {
        
        if(item.id==this.state.params){
            product=item;
        }
      })
      console.log(product);
      
    return(
        <Details shops={this.state.shops.list} product={product} store={this.state.store.list}></Details>
    )
}
};

export default connect (mapStateToProps, actionCreators)(DetailsCon);
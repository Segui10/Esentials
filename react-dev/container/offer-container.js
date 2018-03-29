import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../actions/index';
import Offer from '../modules/Offer';


const mapStateToProps=(state)=>{
    console.log(state);
    return state.productsOffer;
  }

class OfferCon extends React.Component{
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
        <Offer list={this.state.store.list} ></Offer>
    )
}
};

export default connect (mapStateToProps, actionCreators)(OfferCon);
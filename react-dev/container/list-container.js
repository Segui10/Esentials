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
        <List list={this.state.store.list} ></List>
    )
}
};

export default connect (mapStateToProps, actionCreators)(ListCon);
import { combineReducers } from 'redux';
import axios from 'axios';

const server="localhost"
//const server="145.239.199.9"

const initialState = {
  user: {
    error: null,
    user: null
  },
  productsOffer: {
    list: []
  },
  productsList: {
    list: []
  },
  shopsList: {
    list: []
  },
  cart: {
    list: [],
    total: 0
  }
};

function userReducer (state = initialState.user, action) {
  if(action.type==='GET_USER'){
    return [
      ...state,
      {
        error: action.error,
        user: action.user
      }
    ][0]
  
  }else{
    return state
  }
}
function productsOfferReducer (state = initialState.productsOffer, action) {
  if(action.type==='CHANGE_OFFER'){
    return [
      ...state,
      {
        list: action.list
      }
    ][0]
  
  }else{
    return state
  }
  
}
function productsListReducer (state = initialState.productsList, action) {
  if(action.type==='CHANGE_LIST'){
    return [
      ...state,
      {
        list: action.list
      }
    ][0]
  
  }else{
    return state
  }
}
function shopsListReducer (state = initialState.shopsList, action) {
  if(action.type==='CHANGE_SHOPS'){
    return [
      ...state,
      {
        list: action.list
      }
    ][0]
  
  }else{
    return state
  }
}
function cartReducer (state = initialState.cart, action) {
  if(action.type==='CHANGE_CART'){
    let list=state.list;
    let total=state.total;
    total++;
    console.log(action.list);
    list.push(action.list)
    return [
      ...state,
      {
        list: list,
        total: total
      }
    ][0]
  
  }else{
    return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  productsOffer: productsOfferReducer,
  productsList: productsListReducer,
  shopsList: shopsListReducer,
  cart: cartReducer
});

export default rootReducer;
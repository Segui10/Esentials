import { combineReducers } from 'redux';
import axios from 'axios';

const server="localhost"
//const server="145.239.199.9"

const initialState = {
  user: {
    error: null,
    email: null
  },
  products: {
    list: [],
    loading: true,
    error: null
  },
  currentProduct: {
    product: null,
    loading: true,
    error: null
  },
  cart: {
    items: [],
    total: 0
  }
};

function userReducer (state = initialState.user, action) {
  return state;
}
function productsReducer (state = initialState.products) {
  axios.get(`http://`+server+`:8069/esential/json?offer=True`)
      .then(res => {
        state.list = res.data;
      })
  return state;
}
function currentProductReducer (state = initialState.currentProduct, action) {
  return state;
}
function cartReducer (state = initialState.cart, action) {
  return state;
}

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  currentProduct: currentProductReducer,
  cart: cartReducer
});

export default rootReducer;
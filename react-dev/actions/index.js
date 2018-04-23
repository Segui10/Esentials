import axios from 'axios';

//const server="localhost"
const server="145.239.199.9"

export function loadOffer(){
 return(dispatch)=>{
   return   axios.get(`http://`+server+`:8069/esential/json?offer=True`)
   .then(res => {
     dispatch(changeOffert(res.data));
   })
 }
}


export function changeOffert(res){
  return{
    type:"CHANGE_OFFER",
    list:res
  }
}


export function loadList(){
  return(dispatch)=>{
    return   axios.get(`http://`+server+`:8069/esential/json`)
    .then(res => {
      dispatch(changeList(res.data));
    })
  }
 }
 
 
 export function changeList(res){
   return{
     type:"CHANGE_LIST",
     list:res
   }
}

export function loadShops(){
  return(dispatch)=>{
    return   axios.get(`http://`+server+`:8069/esential/shop/json`)
    .then(res => {
      dispatch(changeShops(res.data));
    })
  }
 }
 
 
 export function changeShops(res){
   return{
     type:"CHANGE_SHOPS",
     list:res
   }
}

export function addCart(item){
  console.log(item)
  return(dispatch)=>{
    dispatch(changeCart(item));
  }
 }

 
 
 export function changeCart(res){
   return{
     type:"CHANGE_CART",
     list:res
   }
 }


import React from 'react'
import ListSameName from './ListSameName';
import ReactScrollbar from 'react-scrollbar-js';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

 
const params = {v: '3.exp', key: 'AIzaSyAr19JxZytntqoTZgkLVyDos4QMTAw0I74'};

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {                
      components: [],
      params:this.props.params,
      shops:[],
      coords:{},
      sticky: {},
      status:0,
      price:0,
      lat:0,
      lgt:0,
    };      
    this.UserList = this.UserList.bind(this);
    this.GetShops = this.GetShops.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    let that=this;
    window.onscroll = function() {that.myFunction()};
    
  } 

  componentWillReceiveProps(newProps){
    this.setState({
      params: newProps.params.param,
    }); 
    this.UserList(newProps.params.param);
  }

  componentDidMount() {
    this.UserList();
    this.GetShops();
    let sticky = document.getElementById("navbar").offsetTop;
    this.setState({
      sticky: sticky,
    }); 
    this.componentWillUnmount=this.componentWillUnmount.bind(this);
  }

  componentWillUnmount(){
    navbar.classList.remove("sticky");
    component.classList.remove("sticky2");
  }
  
  myFunction() {
    if (window.pageYOffset >= this.state.sticky) {
      navbar.classList.add("sticky");
      component.classList.add("sticky2");
    } else {
      navbar.classList.remove("sticky");
      component.classList.remove("sticky2");
    }
  }
  

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
 
  onDragEnd(e) {
    console.log('onDragEnd', e);
  }
 
  onCloseClick() {
    console.log('onCloseClick');
  }
 
  onClick(e) {
    console.log('onClick', e);
  }

  UserList(param) {
    let params=this.state.params.param;
    if(param){
      params=param;
    }
    var xmlhttp = new XMLHttpRequest();
      //var url = "http://localhost:8069/esential/json?id="+params;
      var url = "http://145.239.199.9:8069/esential/json?id="+params;
    
    let that=this;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            
            that.setState({
              components: myArr[0],
              price: myArr[0].price,
              status: myArr[0].status,
            });
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'text/plain');
    xmlhttp.send();
  }

  GetShops() {
    let params=this.state.params.param;
    var xmlhttp = new XMLHttpRequest();
      //var url = "http://localhost:8069/esential/shop/json";
      var url = "http://145.239.199.9:8069/esential/shop/json";
    
    let that=this;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            that.setState({
              shops:myArr,
            });
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'text/plain');
    xmlhttp.send();
  }

  statusBar(st){
    if(st==100){return (<div className="st100"></div>);
    }else if(st<=25){return (<div className="st0"></div>);
    }else if(st<=50){return (<div className="st25"></div>);
    }else if(st<=75){return (<div className="st50"></div>);
    }else if(st<100){return (<div className="st75"></div>);
    }
  }
 

  render() {
    this.state.shops.map((item, i) => {
      if(item.id==this.state.components.shop){
        this.state.coords={
          lat:item.lat,
          lng:item.lon,
          name:item.name,
        };
      }
    })
    return (
      <div className="content">
        <div>
        
        <div>
      <div className="dname" id="component">{ this.state.components.name }</div>
      <div className="dcard" key={this.state.components.id}>
        <div className="dimage">
          <img src={ this.state.components.img } className="imgDetails" alt=""/>
        </div>
        <div className="dinfo">
        <div className="descCont1">
          <div className="dprice">{ this.state.price }€</div>
        </div>
        <div className="descCont2">
          <div className="dstatus">Estado<div className="barst">{this.statusBar(this.state.status)}</div><div className="statusVar"></div></div>
          <div className="dstatus">Tipo<div className="barst">{this.state.components.type}</div></div>
          <div className="dstatus">Marca<div className="barst">{this.state.components.marca}</div></div>
          <div className="dstatus">Fecha<div className="barst">{this.state.components.date}</div></div>
          </div>
          <div className="descCont3">
          <div className="shopCardDet">Carrito</div>
          <div className="shopCardDet">Comprar</div>
          </div>
          <div className="descCont4">
          <div className="ddesc">Descripcion<div className="descCont">{ this.state.components.description}</div></div>
          </div>
        </div>
        <div className="offer">A otro precio</div>
        <ReactScrollbar className="myScrollbar">
        <ListSameName name={this.state.components.name}/>
        </ReactScrollbar>
      </div>
      
      </div>
        
        </div>
        <div className="maps">
        <Gmaps
        width={'100%'}
        height={'360px'}
        lat={this.state.coords.lat}
        lng={this.state.coords.lng}
        zoom={15}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={this.state.coords.lat}
          lng={this.state.coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={this.state.coords.lat}
          lng={this.state.coords.lng}
          content={this.state.coords.name}
          onCloseClick={this.onCloseClick} />
      </Gmaps>
      </div>
      </div>
    );
  }
}
export default List;
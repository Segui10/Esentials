import React from 'react'
import Contact from './Contact';
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
    };      
    this.UserList = this.UserList.bind(this);
    this.GetShops = this.GetShops.bind(this);
  } 

  componentDidMount() {
    this.UserList();
    this.GetShops();
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

  UserList(event) {
    let params=this.state.params.param;
    var xmlhttp = new XMLHttpRequest();
      var url = "http://localhost:8069/esential/json?id="+params;
      //var url = "http://145.239.199.9:8069/esential/json?id="+params;
    
    let that=this;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            that.setState({
              components: myArr,
              componentsOriginal: myArr,
            });
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'text/plain');
    xmlhttp.send();
  }

  GetShops(event) {
    let params=this.state.params.param;
    var xmlhttp = new XMLHttpRequest();
      var url = "http://localhost:8069/esential/shop/json";
      //var url = "http://145.239.199.9:8069/esential/shop/json";
    
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
    console.log(this.state.components[0]);
    const component = this.state.components.map((item, i) => (
      <div>
      <div className="dname">{ item.name }</div>
      <div className="dcard" key={item.id}>
        <div className="dimage">
          <img src={ item.img } className="imgDetails" alt=""/>
        </div>
        <div className="dinfo">
        <div className="descCont1">
          <div className="dprice">{ item.price }€</div>
        </div>
        <div className="descCont2">
          <div className="dstatus">Estado<div className="barst">{this.statusBar(item.status)}</div><div className="statusVar"></div></div>
          <div className="dstatus">Tipo<div className="barst">{item.type}</div></div>
          <div className="dstatus">Marca<div className="barst">{item.marca}</div></div>
          <div className="dstatus">Fecha<div className="barst">{item.date}</div></div>
          </div>
          <div className="descCont3">
          <div className="shopCardDet">Carrito</div>
          <div className="shopCardDet">Comprar</div>
          </div>
          <div className="descCont4">
          <div className="ddesc">Descripcion<div className="descCont">{ item.description}</div></div>
          </div>
        </div>
      </div>
      </div>
    ));
    
    this.state.shops.map((item, i) => {
      if(item.id==this.state.components[0].shop){
        this.state.coords={
          lat:item.lat,
          lng:item.lon,
          name:item.name,
        };
      }
    })
    return (
      <div>
        <div>{ component }</div>
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
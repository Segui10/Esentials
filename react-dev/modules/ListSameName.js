import React from 'react'
import NavLink from './NavLink'
import ReactScrollbar from 'react-scrollbar-js';

class ListSameName extends React.Component{
  constructor(props){
    super(props);
    this.state = {                
      components: [],
      componentsOriginal:[],
      name:props.name,
    };      
    this.UserList = this.UserList.bind(this);
  } 

  componentDidMount() {
    this.UserList();
  }



  shopCartAdd(event) {
    console.log(event);
  }

  UserList(event) {
    let name=this.state.name;
    var xmlhttp = new XMLHttpRequest();

      //var url = "http://localhost:8069/esential/json?name="+name;
      var url = "http://145.239.199.9:8069/esential/json?name="+name;

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

  search(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let componentName=this.state.components;
    this.setState({
        [name]: value
    }); 

    if(this.state.search.length>value.length){
      componentName=this.state.componentsOriginal;
    }
    
    componentName=this.filterItems(value,componentName,this.state.filter);
    this.setState({
        components: componentName,
        search: value
    });
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
    const component = this.state.components.map((item, i) => (
      <div className="scard" key={item.id}>
        <div className="imgListSame"><img src={ item.img } alt="" className="imgList"/></div>
        <div className="dstatus">Estado<div className="barst">{this.statusBar(item.status)}</div><div className="statusVar"></div></div>
        <NavLink to={'/details/'+item.id} className="ladetails">Detalles</NavLink>
      </div>
    ));
    return (
      <div>
      <div>{ component }</div>
      </div>
    );
  }
}
export default ListSameName;
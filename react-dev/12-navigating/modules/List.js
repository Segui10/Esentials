import React from 'react'
import NavLink from './NavLink'

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {                
      components: [],
      componentsOriginal:[],
      search:"",
      params:this.props.params,
      filter:'name'
    };      
    this.UserList = this.UserList.bind(this);
    this.search=this.search.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);  
  } 

  componentDidMount() {
    this.UserList();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value,
      search:'',
      components:this.state.componentsOriginal,
    });
  }

  shopCartAdd(event) {
    console.log(event);
  }

  UserList(event) {
    let params=this.state.params.param;
    var xmlhttp = new XMLHttpRequest();
    if(params){
      var url = "http://localhost:8069/esential/json?type="+params;
      //var url = "http://145.239.199.9:8069/esential/json"+params;
    }else{
      var url = "http://localhost:8069/esential/json";
      //var url = "http://145.239.199.9:8069/esential/json";
    }
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

filterItems(query,array,filter) {
    return array.filter(function(el) {
      let cName='';
        switch(filter){
          case 'name':
          cName=el.name;
          break;
          case 'type':
          cName=JSON.stringify(el.type);
          break;
          case 'price':
          cName=JSON.stringify(el.price);
          break;
          default:
          cName=el.name;
          break;
        }
        
        return cName.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}

  render() {
    const component = this.state.components.map((item, i) => (
      <div className="card" key={item.id}>
        <div className="lname">{ item.name }</div>
        <div className="limage"><img src={ item.img } alt="" className="imgList"/></div>
        <div className="linfo">
          <div className="liname">Informacion</div>
          <div className="lstatus">Estado: { item.status }</div>
          <div className="lprice">Precio: { item.price }</div>
          <div className="ltype">Tipo: { item.type}</div>
        </div>
        <NavLink to={'/details/'+item.id} className="detailButtonList">Detalles</NavLink>
        <a className="shopcartButtonList" onClick={(e)=>this.shopCartAdd(item)}>Carrito</a>
      </div>
    ));
    return (
      <div>
        <div className="searchList">
        <input type="text" id="idFirstName" className="inputSearchList" placeholder="Search" name="search" value={this.state.search} onChange={this.search} />
        <select className="comboBoxList" name="filter" onChange={this.handleInputChange}>    
          <option value="name" defaultValue>Nombre</option>
          <option value="price">Precio</option>
          <option value="type">Tipo</option>
        </select>
        </div>
      <div>{ component }</div>
      </div>
    );
  }
}
export default List;
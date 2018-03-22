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
    };      
    console.log(this.props);
    this.UserList = this.UserList.bind(this);
    this.search=this.search.bind(this);
  } 

  componentDidMount() {
    this.UserList();
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
    
    componentName=this.filterItems(value,componentName);
    this.setState({
        components: componentName,
        search: value
    });
}

filterItems(query,array) {
    return array.filter(function(el) {
        let cName=el.name;
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
        <div className="ldetails">
        <NavLink to={'/details/'+item.id} className="catElement">Detalles</NavLink>
        </div>
      </div>
    ));
    return (
      <div>
        <div className="searchList">
        <input type="text" id="idFirstName" className="inputSearchList" placeholder="Search" name="search" value={this.state.search} onChange={this.search} />
        </div>
      <div>{ component }</div>
      </div>
    );
  }
}
export default List;
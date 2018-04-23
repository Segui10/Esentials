import React from 'react'
import NavLink from './NavLink'

class List extends React.Component{
  constructor(props){
    super(props);
    let filter="name";
    let search="";
    console.log(window);
    if (window.location.pathname.split('/')[2]){
      filter="type";
      search=window.location.pathname.split('/')[2];
    }
    this.state = {                
      components: this.props.list,
      componentsOriginal:this.props.list,
      search:search,
      params:this.props.params,
      filter:filter,
      sticky:{},
    };
    this.search=this.search.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);  
    let that=this;
    window.onscroll = function() {that.myFunction()};
    this.componentWillUnmount=this.componentWillUnmount.bind(this);
  } 

  componentWillReceiveProps(nextProps){
    this.setState({
      components:nextProps.list,
      componentsOriginal:nextProps.list,
    })
  }

  componentDidMount() {
    let sticky = document.getElementById("navbar").offsetTop;
    this.setState({
      sticky: sticky,
    }); 
  }

  componentWillUnmount(){
    navbar.classList.remove("sticky");
    search.classList.remove("sticky2");
  }

  myFunction() {
    if (window.pageYOffset >= this.state.sticky) {
      navbar.classList.add("sticky");
      search.classList.add("sticky2");
    } else {
      navbar.classList.remove("sticky");
      search.classList.remove("sticky2");
    }
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
    this.props.addcart(event);
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
      <div className="content">
        <div className="searchList" id="search">
        <input type="text" id="idFirstName" className="inputSearchList" placeholder="Search" name="search" value={this.state.search} onChange={this.search} />
        <select className="comboBoxList" name="filter" onChange={this.handleInputChange}>    
          <option value="name">Nombre</option>
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
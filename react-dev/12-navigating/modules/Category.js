import React from 'react';
import NavLink from './NavLink'


class Category extends React.Component{
  constructor(props){
    super(props);
    this.state = {                
      cat: [],
      catOrifinal:[],
      search:"",
    };      
    this.componentDidMount=this.componentDidMount.bind(this);
    this.search=this.search.bind(this);
  } 

  componentDidMount() {
    let categories=[
      {name:'Grafica',url:'/list/Grafica'},{name:'Raton',url:'/list/Raton'},
      {name:'Procesador',url:'/list/Procesador'},{name:'Auriculares',url:'/list/Auriculares'},
      {name:'Ram',url:'/list/Ram'},{name:'Pantallas',url:'/list/Pantalla'},
      {name:'HDD',url:'/list/HDD'},{name:'Cables',url:'/list/Cables'},
      {name:'PlacaBase',url:'/list/PlacaBase'},{name:'Refrigeracion',url:'/list/Refrigeracion'},
      {name:'FuenteAlimentacion',url:'/list/FuenteAlimentacion'},{name:'Teclado',url:'/list/Teclado'},
    ];
    this.setState({
      cat: categories,
      catOrifinal: categories,
    }); 
  }


  search(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let componentName=this.state.cat;
    this.setState({
        [name]: value
    }); 

    if(this.state.search.length>value.length){
      componentName=this.state.catOrifinal;
    }
    
    componentName=this.filterItems(value,componentName);
    this.setState({
        cat: componentName,
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
    const categories = this.state.cat.map((item, i) => (
      <div className="catElementCont"><NavLink to={item.url} className="catElement">{item.name}</NavLink></div>
    ));
    return (
      <div>
        <div className="searchCat">
        <input type="text" id="idFirstName" className="inputSearchCat" placeholder="Search" name="search" value={this.state.search} onChange={this.search} />
        </div>
        <div className="catBox">
          {categories}
        </div>
      </div>
    );
  }
}
export default Category;
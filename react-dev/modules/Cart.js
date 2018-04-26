import React from 'react'
import NavLink from './NavLink'

class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state = {                
      components: this.props.list,
      componentsOriginal:this.props.list,
      search:"",
      params:this.props.params,
      filter:'name',
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
  }
  myFunction() {
    if (window.pageYOffset >= this.state.sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
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
      <div>
      <div className="cardCart" key={item.id}>
      <div className="cartDataContainer">
        <div className="cimage"><img src={ item.img } alt="" className="imgList"/></div>
        <div className="cartData">
        <div className="cname">{ item.name }</div>
        <div className="cstatus">{ item.status }</div>
        <div className="ctype">{ item.type}</div>
        </div>
        </div>
        <div className="cprice">{ item.price }</div>
      </div>
      <hr className="separatorCart"/>
      </div>
    ));
    return (
      <div className="hcontent ">
      <div className="cartPaper">
      <div className="cnData">
        <div className="cnimage">Picture</div>
        <div className="cnname">Name</div>
        <div className="cstatus">Status</div>
        <div className="ctype">Type</div>
        <div className="cnprice">Price</div>
        </div>
      { component }
      </div>
      </div>
    );
  }
}
export default Cart;
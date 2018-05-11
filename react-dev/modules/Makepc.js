import React from 'react'
import NavLink from './NavLink'

class Makepc extends React.Component{
  constructor(props){
    super(props);
    let grafica=[];
    let monitor=[];
    this.props.list.forEach(element => {
      switch(element.type){
        case 'Grafica':
        grafica.push(element);
        break;
        case 'Monitor':
        monitor.push(element);
        break;
      }
    });
    console.log([['Grafica',grafica],['Monitor',monitor]]);
    this.state = {                
      components: [['Grafica',grafica],['Monitor',monitor]],
      componentsOriginal:this.props.list,
      params:this.props.params,
      grafica:[],
      monitor:[],
      filter:'name',
      sticky:{},
    };      
    this.handleInputChange = this.handleInputChange.bind(this);  
    let that=this;
    window.onscroll = function() {that.myFunction()};
    this.componentWillUnmount=this.componentWillUnmount.bind(this);
  } 

  componentWillReceiveProps(nextProps){
    let grafica=[];
    let monitor=[];
    nextProps.list.forEach(element => {
      switch(element.type){
        case 'Grafica':
        grafica.push(element);
        break;
        case 'Monitor':
        monitor.push(element);
        break;
      }
    });
    console.log([['Grafica',grafica],['Monitor',monitor]]);
    this.setState({
      components:[['Grafica',grafica],['Monitor',monitor]],
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


 

  render() {
    console.log(this.state.components[0][1][0]);
    const component = this.state.components.map((item, i) => (
      <div>
        {item[0]}
      <select>
        {item[1].map((element, x)=>(
          <option value={item[1][x].name}>{item[1][x].name}</option>
        ))}
      </select>
      </div>
    ));
    return (
      <div className="hcontent ">
      <h1>Make your pc</h1>
      <div className="cartPaper">
      { component }
      </div>
      </div>
    );
  }
}
export default Makepc;
import React from 'react'
import NavLink from './NavLink'

class Makepc extends React.Component{
  constructor(props){
    super(props);
    let grafica=[];
    let monitor=[];
    let procesador=[];
    let ram=[];
    let hdd=[];
    let placabase=[];
    let fuente=[];
    this.props.list.forEach(element => {
      switch(element.type){
        case 'Grafica':
        grafica.push(element);
        break;
        case 'Monitor':
        monitor.push(element);
        break;
        case 'Procesador':
        procesador.push(element);
        break;
        case 'Ram':
        ram.push(element);
        break;
        case 'HDD':
        hdd.push(element);
        break;
        case 'PlacaBase':
        placabase.push(element);
        break;
        case 'FuenteAlimentacion':
        fuente.push(element);
        break;
      }
    });
    this.state = {                
      components: [['Grafica',grafica],['Monitor',monitor],['Procesador',procesador],
        ['Ram',ram],['HDD',hdd],['PlacaBase',placabase],['FuenteAlimentacion',fuente]],
      componentsOriginal:this.props.list,
      params:this.props.params,
      grafica:[],
      monitor:[],
      procesador:[],
      ram:[],
      hdd:[],
      placabase:[],
      fuente:[],
      filter:'name',
      sticky:{},
      ddr:"DDR4",
      socket:1051
    };      
    this.handleInputChange = this.handleInputChange.bind(this);  
    let that=this;
    window.onscroll = function() {that.myFunction()};
    this.componentWillUnmount=this.componentWillUnmount.bind(this);
  } 

  componentWillReceiveProps(nextProps){
    let grafica=[];
    let monitor=[];
    let procesador=[];
    let ram=[];
    let hdd=[];
    let placabase=[];
    let fuente=[];
    nextProps.list.forEach(element => {
      switch(element.type){
        case 'Grafica':
        grafica.push(element);
        break;
        case 'Monitor':
        monitor.push(element);
        break;
        case 'Procesador':
        procesador.push(element);
        break;
        case 'Ram':
        ram.push(element);
        break;
        case 'HDD':
        hdd.push(element);
        break;
        case 'PlacaBase':
        placabase.push(element);
        break;
        case 'FuenteAlimentacion':
        fuente.push(element);
        break;
      }
    });
    this.setState({
      components:[['PlacaBase',placabase],['Procesador',procesador],['Ram',ram],
        ['Grafica',grafica],['FuenteAlimentacion',fuente],['HDD',hdd],['Monitor',monitor]],
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
    console.log(value);
    console.log(this.state.componentsOriginal);
    let grafica=[];
    let monitor=[];
    let procesador=[];
    let ram=[];
    let hdd=[];
    let placabase=[];
    let fuente=[];
    let socket=this.state.socket;
    let ddr=this.state.ddr;
    this.state.componentsOriginal.forEach(element => {
      if(value==element.id){
        if(element.type=="PlacaBase"){
          socket=element.socket;
          ddr=element.ddr;
          this.setState({
            socket:element.socket,
            ddr:element.ddr
          })
        }
      }
    });
    console.log(this.state.socket);
    console.log(this.state.ddr);
    this.state.componentsOriginal.forEach(element => {
      switch(element.type){
        case 'Grafica':
        grafica.push(element);
        break;
        case 'Monitor':
        monitor.push(element);
        break;
        case 'Procesador':
        if(socket==element.socket){
          procesador.push(element);
        }
        break;
        case 'Ram':
        if(ddr==element.ddr){
          ram.push(element);
        }
        break;
        case 'HDD':
        hdd.push(element);
        break;
        case 'PlacaBase':
        placabase.push(element);
        break;
        case 'FuenteAlimentacion':
        fuente.push(element);
        break;
      }
    });
    this.setState({
      components:[['PlacaBase',placabase],['Procesador',procesador],['Ram',ram],
      ['Grafica',grafica],['FuenteAlimentacion',fuente],['HDD',hdd],['Monitor',monitor]],
    })
  }


 

  render() {
    console.log(this.state.components[0][1][0]);
    const component = this.state.components.map((item, i) => (
      <div>
        <div className="mkname">{item[0]}</div>
      <select className="mkop" onChange={this.handleInputChange}>
        {item[1].map((element, x)=>(
          <option value={item[1][x].id}>{item[1][x].name}</option>
        ))}
      </select>
      <hr className="separatorCart"/>
      </div>
    ));
    return (
      <div className="hcontent ">
      <div className="cartPaper">
      <div className="makepc">
      { component }
      </div>
      </div>
      </div>
    );
  }
}
export default Makepc;
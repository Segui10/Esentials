import React from 'react'
import NavLink from './NavLink'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {                
      sticky: {},
    };      
    this.componentDidMount=this.componentDidMount.bind(this);
    let that=this;
    window.onscroll = function() {that.myFunction()};

  } 

  componentDidMount() {
    let navbar = document.getElementById("navbar");
    let sticky = navbar.offsetTop;
    this.setState({
      sticky: sticky,
    }); 
  }


  myFunction() {
    if (window.pageYOffset >= this.state.sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  render() {
    return (
      <div>
       <div className="titleCont">
        <h1 className="title">Essential</h1>
        </div>
        <ul role="nav" className="menu" id="navbar">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/list">Componentes</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;

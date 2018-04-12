import React from 'react';
import Slider from "react-slick";
import OfferCon from '../container/offer-container'
import Category from './Category';
import Contact from './Contact';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {                
      sticky: {},
    };      
    this.componentDidMount=this.componentDidMount.bind(this);
    this.componentWillUnmount=this.componentWillUnmount.bind(this);
    let that=this;
    window.onscroll = function() {that.myFunction()};
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

  render() {
    return (
      <div className="hcontent">
        <div className="offer">Ofertas</div>
          <OfferCon/>
        <div className="sliderOp"></div>
        <div className="offer">Categorias</div>
          <Category/>
        <div className="sliderOp"></div>
          <Contact/>
      </div>
    );
  }
}
export default Home;
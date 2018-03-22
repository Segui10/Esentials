import React from 'react';
import Slider from "react-slick";
import Offer from './Offer';
import Category from './Category';
import Contact from './Contact';



class Home extends React.Component{

  render() {
    
    return (
      <div>
        <div className="coverPage"></div>
        <div className="offer">Ofertas</div>
          <Offer/>
        <div className="sliderOp"></div>
        <div className="offer">Categorias</div>
          <Category/>
        <div className="sliderOp"></div>
        <div className="offer">Contacto</div>
          <Contact/>
      </div>
    );
  }
}
export default Home;
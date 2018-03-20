import React from 'react';
import Slider from "react-slick";
import Offer from './Offer';


class Home extends React.Component{

  render() {
    return (
      <div>
        <div className="coverPage">
        
        </div>
        <div className="offer">Ofertas</div>
        <Offer/>
        <div className="sliderOp"></div>
        <div className="offer">Categorias</div>
        <div className="sliderOp"></div>
        <div className="offer">Contacto</div>
      </div>
    );
  }
}
export default Home;
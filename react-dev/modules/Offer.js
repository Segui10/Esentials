import React from 'react'
import Slider from "react-slick";
import NavLink from './NavLink'


class Offer extends React.Component{
  constructor(props){
    console.log("offer");
    super(props);
    this.state = {                
      components: this.props.list,
    };      
  } 

  componentWillReceiveProps(nextProps){
    this.setState({
      components:nextProps.list
    })
}

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      touchMove: true,
      arrows:false,
    };
    const component = this.state.components.map((item, i) => (
      <div className="ocard" key={item.id}>
      <div className="omarg"></div>
      <div className="omargr"></div>
        <div className="oname">{ item.name }</div>
        <div className="oimage"><img src={ item.img } className="imgOfert" alt="" /></div>
        
        <div className="offerCont1">
        <div className="oinfo">
          <div className="oiname">Informacion</div>
          <div className="ostatus">Estado: { item.status }</div>
          <div className="oprice">Precio: { item.price }</div>
          <div className="otype">Tipo: { item.type}</div>
        </div>
        <div className="oinfo">
          <div className="oiname">Descripcion</div>
          <div className="otype">{ item.description}</div>
        </div>

        </div>
        <div className="offerCont2">
        <div className="shopcartButtonOffer">Carrito</div>
        <NavLink to={'/details/'+item.id} className="detailButtonOffer">Detalle</NavLink>
        </div>

      </div>
    ));

    return (
      <div className="ocontent">
        <Slider {...settings}>
          { component }
        </Slider>
      </div>
    );
  }
}
export default Offer;
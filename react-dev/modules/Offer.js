import React from 'react'
import Slider from "react-slick";
import NavLink from './NavLink'


class Offer extends React.Component{
  constructor(props){
    super(props);
    this.state = {                
      components: [],
    };      
    
    this.UserList = this.UserList.bind(this);
  } 

  componentDidMount() {
    this.UserList();
    
  }

  UserList() {
    var xmlhttp = new XMLHttpRequest();
    //var url = "http://localhost:8069/esential/json?offer=True";
    var url = "http://145.239.199.9:8069/esential/json?offer=True";
    let that=this;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            console.log(myArr);
            that.setState({
              components: myArr
            });
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'text/plain');
    xmlhttp.send();
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
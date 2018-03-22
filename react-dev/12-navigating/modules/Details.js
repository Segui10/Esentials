import React from 'react'

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {                
      components: [],
      params:this.props.params,
    };      
    console.log(this.props.params);
    this.UserList = this.UserList.bind(this);
  } 

  componentDidMount() {
    this.UserList();
  }

  UserList(event) {
    let params=this.state.params.param;
    var xmlhttp = new XMLHttpRequest();
      var url = "http://localhost:8069/esential/json?id="+params;
      //var url = "http://145.239.199.9:8069/esential/json?id="+params;
    
    let that=this;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            that.setState({
              components: myArr,
              componentsOriginal: myArr,
            });
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'text/plain');
    xmlhttp.send();
  }

 

  render() {
    const component = this.state.components.map((item, i) => (
      <div className="ocard" key={item.id}>
      <div className="omarg"></div>
      <div className="omargr"></div>
        <div className="oname">{ item.name }</div>
        <div className="oimage"><img src={ item.img } className="imgOfert" alt="" /></div>
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
    ));
    return (
      <div>
        <div>{ component }</div>
      </div>
    );
  }
}
export default List;
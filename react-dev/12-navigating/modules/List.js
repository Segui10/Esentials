import React from 'react'

class List extends React.Component{
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

  UserList(event) {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:8069/esential/json";
    //var url = "http://145.239.199.9:8069/esential/json";
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
    const component = this.state.components.map((item, i) => (
      <div className="card" key={item.id}>
        <div className="lname">{ item.name }</div>
        <div className="limage"><img src={ item.img } alt=""  width="100px" height="100px"/></div>
        <div className="linfo">
          <div className="liname">Informacion</div>
          <div className="lstatus">Estado: { item.status }</div>
          <div className="lprice">Precio: { item.price }</div>
          <div className="ltype">Tipo: { item.type}</div>
        </div>
        <div className="ldetails">
          
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
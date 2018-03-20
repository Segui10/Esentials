import React from 'react'

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {                
      components: [],
      componentsOriginal:[],
      search:"",
    };      
    
    this.UserList = this.UserList.bind(this);
    this.search=this.search.bind(this);
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
              components: myArr,
              componentsOriginal: myArr,
            });
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'text/plain');
    xmlhttp.send();
  }

  search(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let componentName=[];
    let newComponentMap=[];
    console.log(value);
    this.setState({
        [name]: value
    }); 
    if(this.state.search.length>value.length){
        this.state.componentsOriginal.map((name) =>
            console.log(name)
        );
    }else{
        this.state.components.map((name) =>
          console.log(name)
        );
    }
    
    componentName=this.filterItems(value,componentName);
    componentName.map((student) =>
      newComponentMap.push([student[0],student[2],student[3]])
    );
    console.log(studentName);
    this.setState({
        searchmap: newMapStudent,
        search: value
    });
}

filterItems(query,array) {
    return array.filter(function(el) {
        console.log(el);
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}

  render() {
    const component = this.state.components.map((item, i) => (
      <div className="card" key={item.id}>
        <div className="lname">{ item.name }</div>
        <div className="limage"><img src={ item.img } alt="" className="imgList"/></div>
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
        <input type="text" id="idFirstName" name="search" value={this.state.search} onChange={this.search} />
      <div>{ component }</div>
      </div>
    );
  }
}
export default List;
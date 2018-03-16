import React from 'react'

class Home extends React.Component{
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
      <div>
        <h1>{ item.name }</h1>
      </div>
    ));
    return (
      <div>
      <div>Home</div>
      <div>{ component }</div>
      </div>
    );
  }
}
export default Home;
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router'
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : 'grey'
  }
};
 
Modal.setAppElement('#modal')

class Login extends React.Component {
  constructor() {
    super();
    console.log(this.props);
    this.state = {
      modalIsOpen: false,
      rUser:"",
      rEmail:"",
      rPassword:"",
      lEmail:"",
      lPassword:""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value,
    });
  }

  hashcode(str) {
    let hash = 0, i, chr;
    if (str.length === 0) {
      return hash;
    }
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }

  handleSubmit(event) {
    const target = event.target
    const name = target.name;
    switch(name){
      case "register":
      let data = {
        "params": {
          user:{
            "name":this.state.rUser,
            "email":this.state.rEmail,
            "password":this.hashcode(this.state.rPassword)
          }  
        }
      }
      console.log(1);
      console.log(data);
      this.props.register(data);
      break;
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({modalIsOpen: true});
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
 
  closeModal() {
    this.setState({modalIsOpen: false});
  } 

 
 
  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
        <div className="modalLogin">
          
        <div className="formRegister">
          <h1 >Register</h1>
            <form name="register">
              <div className="modalName" >User</div><br/>
              <input className="inputModal" type="text" required onChange={this.handleInputChange} name="rUser"/>
              <div className="modalName" > Email</div><br/>
              <input className="inputModal" type="email" required onChange={this.handleInputChange} name="rEmail"/>
              <div className="modalName" >Password</div><br/>
              <input className="inputModal" type="password" required onChange={this.handleInputChange} name="rPassword"/>
              <input type="button" name="register" value="Submit" className="modalButton" onClick={this.handleSubmit}/>
            </form>
          </div>
          
          <div className="formLogin" onClick={this.handleSubmit}>
          <h1 >Login</h1>
            <form >
              <div className="modalName" >Email</div><br/>
              <input className="inputModal" type="email" required name="lEmail" onChange={this.handleInputChange}/>
              <div className="modalName" >Password</div><br/>
              <input className="inputModal" type="password" required name="lPassword" onChange={this.handleInputChange}/>
              <input type="submit" name="login" value="Submit" className="modalButton"/>
            </form>
          </div>

          <hr className="separator"/>

        <div className="socialLogin"></div>
        </div>
        </Modal>
      </div>
    );
  }
}

export default Login;
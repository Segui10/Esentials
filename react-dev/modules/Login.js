import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import NavLink from './NavLink';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
Modal.setAppElement('#modal')

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: true
    };
 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h1 >Login</h1>
          <div>
            <form>
              Email
              <input />
              Password
              <input />
            </form>
          </div>
          <h1 >Register</h1>
          <div>
            <form>
              User
              <input />
              Email
              <input />
              Password
              <input />
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Login;
import React from 'react';


class Contact extends React.Component{
  constructor(props){
    super(props);

    this.state = {                
            name: "",
            description: "",
            email: "",
    }        
    
    this.handleInputChange = this.handleInputChange.bind(this);   
    this.handleSubmit = this.handleSubmit.bind(this);      

}

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
}

handleSubmit(event) {
        
}

  render() {
    
    return (
      <div>
        <div className="contactBox">
        <form id="newGradedTask" onSubmit={this.handleSubmit}>
         <input type="text" className="inputContact" name="name" placeholder="Nombre" value={this.state.name} onChange={this.handleInputChange} required/> 
         <input type="text" className="inputContact" name="email" placeholder="Correo" value={this.state.email} onChange={this.handleInputChange} required/> 
         <input type="area" className="inputContact" name="description" placeholder="Contenido" value={this.state.description} onChange={this.handleInputChange} required/> 
         <input type="submit" className="submitContact" value="Save"/>
        </form> 
        </div>
      </div>
    );
  }
}
export default Contact;
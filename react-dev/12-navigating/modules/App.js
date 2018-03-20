import React from 'react'
import NavLink from './NavLink'

class App extends React.Component{
  render() {
    return (
      <div>
        <h1>Esential</h1>
        <ul role="nav" className="menu">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/list">Componentes</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;

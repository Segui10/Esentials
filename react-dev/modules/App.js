import React from 'react'
import NavLink from './NavLink'

class App extends React.Component{

  render() {
    return (
      <div>
       <div className="titleCont">
        <h1 className="title">Essential</h1>
        </div>
        <ul role="nav" className="menu" id="navbar">
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

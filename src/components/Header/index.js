import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <div className="div">
        <div className="logo">
          <h2>Okan Keskin</h2>
        </div>
        <nav>
          <ul className='nav-ul'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cv">CV</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
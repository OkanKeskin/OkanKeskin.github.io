import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <div className="div">
        <div className="logo">
          <h1>Okan Keskin</h1>
        </div>
        <nav>
          <ul className='nav-ul'>
            <li><Link className='btn' to="/">Home</Link></li>
            <li><Link className='btn' to="/cv">CV</Link></li>
            <li><Link className='btn' to="/portfolio">Portfolio</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
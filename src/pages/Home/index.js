import React from 'react'

//css
import './style.css'
import logo from './nah.jpeg'

function Home() {
  return (
    <div className='home'>
        <div className="foto">
            <img width={500} src={logo} alt="nah" />
        </div>
    </div>
  )
}

export default Home
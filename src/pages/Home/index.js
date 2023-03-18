import React from 'react'

//css
import './style.css'

//image
import logo from './assets/nah.jpeg'

function Home() {
  return (
    <div className='home'>
        <div className="foto">
            <img width={200} src={logo} alt="nah" />
        </div>
    </div>
  )
}

export default Home
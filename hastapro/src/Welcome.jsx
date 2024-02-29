import React from 'react'
import './css/Welcome.css'
import banner1 from './assets/banner1.jpg'

const Welcome = () => {
  return (
    <div className='container'>
       <div className="text">
          <h1>Somos Hasta Pro</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus quas itaque corrupti iusto!</p>
       </div>
       <div className="banner1">
          <img src={banner1} alt="banner1" />
       </div>
    </div>
  )
}

export default Welcome
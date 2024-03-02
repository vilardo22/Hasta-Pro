import React from 'react'
import './css/Welcome.css'
import banner1 from './assets/banner1.jpg'

const Welcome = () => {
  return (
    <div className='container-1'>
       <div className="container-banner">
          <div className="texto">
          <h1>Somos Hasta Pro</h1>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing !</p>
          </div>
                 <img src={banner1} alt="banner1" />
            
         </div>
       
         
       
    </div>
  )
}

export default Welcome
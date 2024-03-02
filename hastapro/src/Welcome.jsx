import React from 'react'
import './css/Welcome.css'
import banner1 from './assets/banner1.jpg'

const Welcome = () => {
  return (
    <div className='container'>
       <div className="container-banner">
        
                <h1>Somos Hasta Pro</h1>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus quas itaque corrupti iusto!</p>
            <img src={banner1} alt="banner1" />
            
         </div>
       
         
       
    </div>
  )
}

export default Welcome
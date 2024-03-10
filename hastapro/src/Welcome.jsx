import React from 'react'
import './css/Welcome.css'
import './css/Welcome2.css'
import hero from './assets/HeroImage.png'

const Welcome = () => {
  return (
      <div className="wrapperContainer wrapperContainer-hero">
        <section className="heroBanner">
            <div className="header_content">
                <h1 className="hero_title">Unindo <span className='verde'>tradição</span> e <span className='verde'>inovação</span>, onde cada lance semeia <span className='verde'>prosperidade</span> no coração da <span className='verde'>pecuária</span></h1>
            </div>
            <img src={hero} alt="Mulher segurando flores" /> {/* Corrigido aqui */}
        </section>
    </div>
  )
}

export default Welcome

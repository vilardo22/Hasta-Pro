 import React from 'react'
 import './css/QuemSomos.css'
 import logofundo from './assets/logo3.png'
 import fundo from './assets/fundo.png'
import logofundo1 from "./assets/logofelipe1.png"


const QuemSomos = () => {
  return (
    <div className="container-4">
        <div className="title1">
            <h1>Quem Somos</h1>
        </div>
        <div className="container-conteudo1">
            <div className="texto">
            <h1>Lorem ipsum dolor sit</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reiciendis. Commodi architecto ex, repudiandae in mollitia quae quos culpa quis. Laudantium tempora nostrum maiores mollitia veritatis eaque. Sint, nobis quae!</p>
                </div>
                <div className="logo1">
                <img src={logofundo} alt="texto" />
                {/* <img src={logofundo1} alt="logo" /> */}
                </div>
        </div>
    </div>
  )
}

export default QuemSomos
import React from 'react'
import marreta from "./assets/marreta.png"
import "./css/Sistema.css"
const Resultados = () => {
  return (
    <div className="container-8">
        <div className="titles">
            <h1>Resultados</h1>
        </div>
        <div className="container-cards2">
            <div className="card1">
                <img src={marreta} alt="icone" />
                <h3>1000</h3>
                <p>Lorem Ipsum</p>
             </div>
            <div className="card1">
                <img src={marreta} alt="icone" />
                <h3>2000</h3>
                <p>Lorem Ipsum</p>
             </div>
            <div className="card1">
                <img src={marreta} alt="icone" />
                <h3>3000</h3>
                <p>Lorem Ipsum</p>
             </div>
        </div>
    </div>
  )
}

export default Resultados
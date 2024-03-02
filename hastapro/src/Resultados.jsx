import React from 'react'
import marreta from "./assets/marreta.png"
const Resultados = () => {
  return (
    <div className="container-4">
        <div className="title">
            <h1>Resultados</h1>
        </div>
        <div className="container-cards">
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
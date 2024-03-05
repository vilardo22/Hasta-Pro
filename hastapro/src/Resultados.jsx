import React from 'react'
import marreta from "./assets/marreta.png"
import "./css/Resultados.css"
const Resultados = () => {
  return (
    <>

      <div className="container-8">
        <h1 className='titles2'>Resultados</h1>
        <div className="container-cards2">
          <div className="card1">
            <ul className='lista1'>
              <li>
                <img src={marreta} alt="icone" />
                <h3>1000</h3>
                <p>Receita Movimentada</p>
              </li>
            </ul>
          </div>
          <div className="card1">
            <ul className='lista1'>
              <li>
                <img src={marreta} alt="icone" />
                <h3>1000</h3>
                <p>Lorem Ipsum</p>
              </li>
            </ul>

          </div>
          <div className="card1">
            <ul className='lista1'>
              <li>
                <img src={marreta} alt="icone" />
                <h3>1000</h3>
                <p>Lorem Ipsum</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resultados
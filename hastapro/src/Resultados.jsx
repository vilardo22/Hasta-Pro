import React from 'react'
import marreta from "./assets/marreta.png"
import "./css/Resultados.css"
import "./css/Resultados2.css"
const Resultados = () => {
  return (


    <>

      <h1 class="main-title2">Resultados</h1>

      <section class="pricing2">
        <div class="pricing-plan2">
          <h2 class="class-plan__title2">Banco de Dados</h2>
          <div class="pricing-plan__features2">
          {/* <img src={marreta} alt="marreta" /> */}
            </div>
            

        </div>

        <div class="pricing-plan2">
          <h2 class="class-plan__title2">Premium</h2>
          <div class="pricing-plan__features2">
            {/* <img src={marreta} alt="marreta" /> */}
            </div>

        </div>

        <div class="pricing-plan2">
          <h2 class="class-plan__title2">Deluxe</h2>
          <div class="pricing-plan__features2">
          {/* <img src={marreta} alt="marreta" /> */}
            </div>

        </div>
      </section>
    </>

  )
}

export default Resultados
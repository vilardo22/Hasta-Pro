import React from 'react'
import marreta from "./assets/dado.png"
import "./css/Resultados.css"
import "./css/Resultados2.css"
const Resultados = () => {
  return (


    <>

      <h1 class="main-title2" id="Resultados">Resultados</h1>

      <section class="pricing2">
        <div class="pricing-plan2">
          <h1 class="class-plan__title3">Receita</h1>
          <div class="pricing-plan__features2">
          <img src={marreta} alt="marreta" />
            </div>
            <h2 class="class-plan__title2"><span>1Bi</span></h2>
            <h2 class="class-plan__title2"> Vendas no ano</h2>
        </div>

        <div class="pricing-plan2">
          <h1 class="class-plan__title3">Confiança</h1>
          <div class="pricing-plan__features2">
            <img src={marreta} alt="marreta" />
            </div>
            <h2 class="class-plan__title2"><span>40</span></h2>
            <h2 class="class-plan__title2"> Leiloeiras pelo País</h2>


        </div>

        <div class="pricing-plan2">
          <h1 class="class-plan__title3">Contratos</h1>
          <div class="pricing-plan__features2">
          <img src={marreta} alt="marreta" />
            </div>
            <h2 class="class-plan__title2"><span>1500</span></h2>
            <h2 class="class-plan__title2"> Contratos Mensais</h2>        </div>
      </section>
    </>

  )
}

export default Resultados
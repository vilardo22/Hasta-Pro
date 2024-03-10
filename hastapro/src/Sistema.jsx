import React from 'react'
import logoBc from "./assets/logobc.png"
import "./css/Sistema.css";
import "./css/Sistema2.css";

const Sistema = () => {
    return (
        <>

            <h1 class="main-title">Nosso Sistema</h1>

            <section class="pricing">
                <div class="pricing-plan">
                    <h2 class="class-plan__title">Banco de Dados</h2>
                    <ul class="pricing-plan__features">
                        <li>1 Website</li>
                        <li>1GB de Armazenamento</li>
                        <li>10GB de transferência</li>
                    </ul>
                    
                </div>

                <div class="pricing-plan">
                    <h2 class="class-plan__title">Premium</h2>
                    <ul class="pricing-plan__features">
                        <li>5 Website</li>
                        <li>3GB de Armazenamento</li>
                        <li>Transferência ilimitada</li>
                        <li>10 horas de suporte mensais</li>
                    </ul>
                    
                </div>

                <div class="pricing-plan">
                    <h2 class="class-plan__title">Deluxe</h2>
                    <ul class="pricing-plan__features">
                        <li>10 Website</li>
                        <li>30GB de Armazenamento</li>
                        <li>Transferência ilimitada</li>
                        <li>30 horas de suporte mensais</li>
                        <li>Email personalizado</li>
                    </ul>
                    
                </div>
            </section>
        </>
    )
}

export default Sistema
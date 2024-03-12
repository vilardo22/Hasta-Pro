import React from 'react'
import logoBc from "./assets/logobc.png"
import "./css/Sistema.css";
import "./css/Sistema2.css";

const Sistema = () => {
    return (
        <>

            <h1 class="main-title" id='Sistema'>Nosso Sistema</h1>

            <section class="pricing">
                <div class="pricing-plan">
                    <h2 class="class-plan__title">Integração e Funcionalidades do Sistema</h2>
                    <ul class="pricing-plan__features">
                        <li>Acesso ao banco de dados em nuvem</li>
                        <li>Integração com contratos digitais e WhatsApp, tudo dentro do sistema</li>
                        <li>Funcionalidades disponíveis para bovinos, equinos, caprinos e outros produtos agrícolas.</li>
                        <li>Relatórios configuráveis para atender às necessidades específicas.</li>
                        <li>Fechamento dos leilões simplificado e facilitado</li>
                    </ul>
                    
                </div>

                <div class="pricing-plan">
                    <h2 class="class-plan__title">Gerenciamento de Vendas e Transações</h2>
                    <ul class="pricing-plan__features">
                        <li>Gravação de genealogias para controle e registro.</li>
                        <li>Gerenciamento simples de vendas, inclusive em condomínios.</li>
                        <li>Suporte para múltiplos vendedores ou compradores por lote.</li>
                        <li>Controle de comissões para assessores, pisteiros e leiloeiros.</li>
                    </ul>
                    
                </div>

                <div class="pricing-plan">
                    <h2 class="class-plan__title">Benefícios e Versatilidade do Sistema</h2>
                    <ul class="pricing-plan__features">
                        <li>Acesso direto e integrado a um banco de dados em nuvem.</li>
                        <li>Facilidade na integração com contratos digitais e WhatsApp.</li>
                        <li>Relatórios configuráveis para atender diversas necessidades.</li>
                        <li>Simplificação do fechamento de leilões</li>
                        <li>Suporte para gravação de genealogias e gerenciamento de vendas em condomínios.</li>
                        <li>Controle de comissões para vários envolvidos no processo de venda.</li>
                        <li>Adequado para diferentes tipos de animais e produtos agrícolas.</li>
                    </ul>
                    
                </div>
            </section>
        </>
    )
}

export default Sistema
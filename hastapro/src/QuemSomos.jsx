import React from 'react';
// import './css/QuemSomos.css';
import './css/QuemSomos2.css';
import logofundo from './assets/1234.png';
import fundo from './assets/fundo.png';
import logofundo1 from "./assets/logofelipe1.png";

const QuemSomos = () => {
  return (
    <>
      <h1 id="QuemSomos" class="main-title1">Sobre Nós</h1> {/* Adicionando o id ao elemento h1 */}
      <div className="container-4">
        <div className="container-conteudo1">
          <div className="texto">
            <h1>Somos uma equipe</h1>
            <p> comprometida e apaixonada pelo mundo dos leilões, com uma trajetória consolidada nas maiores empresas leiloeiras do Brasil. Com mais de 25 anos de experiência neste mercado dinâmico, trazemos um conhecimento profundo e uma expertise que nos permite oferecer serviços de alta qualidade aos nossos clientes.

Nosso sistema foi desenvolvido ao longo de mais de 15 anos, passando por constantes validações, atualizações e inovações. Estamos sempre buscando maneiras de aprimorar nossos processos e tecnologias para garantir a eficiência e a segurança em todas as transações.

Acima de tudo, valorizamos o relacionamento com nossos clientes. Nosso compromisso é prestar o melhor atendimento, entendendo suas necessidades e oferecendo soluções personalizadas para cada situação. Estamos aqui para ajudá-lo a alcançar seus objetivos no mundo dos leilões, com profissionalismo, transparência e dedicação.

Seja bem-vindo à nossa equipe. Estamos ansiosos para trabalhar juntos e proporcionar experiências únicas e satisfatórias em sua empresa."</p>
          </div>
          <div className="logo1">
            <img src={logofundo} alt="texto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default QuemSomos;

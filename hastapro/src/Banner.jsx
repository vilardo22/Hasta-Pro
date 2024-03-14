import React, { useState, useEffect } from 'react';
import banner1 from './assets/banner1.png';
import banner2 from './assets/banner2.png'; // Substitua pelo caminho correto da sua imagem
import banner3 from './assets/banner2.png'; // Substitua pelo caminho correto da sua imagem
import './css/Banner.css';
import './css/Banner2.css';

const Banner = () => {
    const [count, setCount] = useState(1);
    const totalBanners = 3; // Total de banners que você tem

    useEffect(() => {
        // Troca a imagem a cada 2 segundos
        const interval = setInterval(() => {
            setCount(current => current < totalBanners ? current + 1 : 1);
        }, 2000);

        // Limpa o intervalo quando o componente desmonta
        return () => clearInterval(interval);
    }, [totalBanners]);

    // Função para mudar manualmente a imagem (se necessário)
    const changeImage = (index) => {
        setCount(index);
    };

    return (
        <div className="slider">
            <div className="slides">
                {/* Inputs para controle do slider. Não visíveis mas necessários para a navegação manual se você decidir implementar. */}
                <input type="radio" name="radio-btn" id="radio1" checked={count === 1} readOnly />
                <input type="radio" name="radio-btn" id="radio2" checked={count === 2} readOnly />
                <input type="radio" name="radio-btn" id="radio3" checked={count === 3} readOnly />

                <div className={`slide ${count === 1 ? 'active' : ''}`}>
                    <img src={banner1} alt="Banner 1" />
                </div>
                <div className={`slide ${count === 2 ? 'active' : ''}`}>
                    <img src={banner2} alt="Banner 2" />
                </div>
                <div className={`slide ${count === 3 ? 'active' : ''}`}>
                    <img src={banner3} alt="Banner 3" />
                </div>

                {/* Indicadores da navegação automática */}
                <div className="navigation-auto">
                    <div className={`auto-btn1 ${count === 1 ? 'active' : ''}`}></div>
                    <div className={`auto-btn2 ${count === 2 ? 'active' : ''}`}></div>
                    <div className={`auto-btn3 ${count === 3 ? 'active' : ''}`}></div>
                </div>
            </div>

            {/* Navegação manual (opcional, descomente se necessário e implemente a lógica onClick) */}
            <div className="manual-navigation">
                <label htmlFor="radio1" className="manual-btn" onClick={() => changeImage(1)}></label>
                <label htmlFor="radio2" className="manual-btn" onClick={() => changeImage(2)}></label>
                <label htmlFor="radio3" className="manual-btn" onClick={() => changeImage(3)}></label>
            </div>
        </div>
    );
};

export default Banner;

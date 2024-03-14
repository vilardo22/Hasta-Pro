import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './css/rodape.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>Siga-nos nas redes sociais!</p>
        <a href="https://www.facebook.com/profile.php?id=100038760675849" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.instagram.com/hastapro_sistema/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

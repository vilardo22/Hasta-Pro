import React from 'react';
import "./css/Header.css";
import Logo from "./assets/logo_login.png";

const Header = () => {
  return (
    <header>
      <div className="logo">  
          <img src={Logo} alt="logo header"/>
      </div>
    </header>  
  );
}

export default Header;

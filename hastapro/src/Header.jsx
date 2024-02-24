import React from 'react';
import "./css/Header.css";
import Logo from "./assets/logo_login.png";

const Header = () => {
  return (
    <nav>
      <img src={Logo} alt="logo header" className='logo' />
      </nav>
  );
}

export default Header;

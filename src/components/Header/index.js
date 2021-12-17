import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            {" "}
            <img src={Logo} width="100px" title="SGI" alt="SGI" />
          </Link>
        </div>
        <div className="container-links">
          <div className="header-link">
            <Link to="/Map" className="link">
              Mapa
            </Link>
          </div>
          <div className="header-link">
            <Link to="/Product" className="link">
              Produtos
            </Link>
          </div>
          <div className="header-link">
            <Link to="/ShowProducts" className="link">
              Lista de Produtos
            </Link>
          </div>
          <div className="header-link">
            <Link to="/Register" className="link">
              Empresas
            </Link>
          </div>
        <div className="header-link">
          <Link to="/" className="link">
            Sair
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Header;

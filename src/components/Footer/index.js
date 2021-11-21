import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-links">
          <div className="copy">
            © Victor Ferrando da Silva - Todos os Direitos Reservados{" "}
          </div>
          <div className="footer-link">
            <Link to="/policy" className="link">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

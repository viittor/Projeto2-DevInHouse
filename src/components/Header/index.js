import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
        <Link to="/"> <h1>SGI</h1></Link>
        <Link to="/Map">Mapa</Link>
        <Link to="/Product">Produtos</Link>
        <Link to="/Register">Empresas</Link>
        </>
    );
};

export default Header;
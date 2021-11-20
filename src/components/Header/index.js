import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'


const Header = () => {
    return(
        <>
        <div className='header-container'>
        <div className='header-logo'>
        <Link to="/"> <img src={Logo}  width= '100px' title='logo' alt='logo'/></Link>
        </div>
        <div className='container-links' >
        <div className='header-link'>
        <Link to="/Map">Mapa</Link>
        </div>
        <div className='header-link'>
        <Link to="/Product">Produtos</Link>
        </div>
        <div className='header-link'>
        <Link to="/Register">Empresas</Link>
        </div>
        </div>
        </div>
        </>
    );
};

export default Header;
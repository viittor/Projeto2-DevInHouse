import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Register from './pages/Register/register.js';
import Map from './pages/Map/map.js';
import Product from './pages/Product/product.js';
import PageLogin from './pages/Login/index.js';

const Router = () => {
    return (
        <BrowserRouter>
             <Switch>
                <Route path="/" exact component={PageLogin}/>
                <Route path="/Map" component={Map}/>
                <Route path="/Product" component={Product}/>
                <Route path="/Register" component={Register}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;


/* <Link to="/"> <h1>SGI</h1></Link>
<Link to="/Map">Mapa</Link>
<Link to="/Product">Produtos</Link>
<Link to="/Register">Empresas</Link> */
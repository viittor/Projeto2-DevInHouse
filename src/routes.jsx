import React from 'react';
import {
    BrowserRouter, Route, Switch, Link
} from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Map from './pages/Map';
import Product from './pages/Product';

const Router = () => {
    return (
        <BrowserRouter>
            <Link to="/"> <h1>SGI</h1></Link>
            <Link to="/Map">Mapa</Link>
            <Link to="/Product">Produtos</Link>
            <Link to="/Register">Empresas</Link>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Map" component={Map}/>
                <Route path="/Product" component={Product}/>
                <Route path="/Register" component={Register}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
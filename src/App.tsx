import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'

import Index from './pages/Index'
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Order from './pages/Order';
import AboutUs from './pages/AboutUs';

function App() {
    return (
        <div className="font-sans h-screen flex flex-col">
            <Header />
            <div className="flex-1 bg-gray-100">
                <Route exact path="/" component={ Index } />
                <Route path="/cart" component={ Cart } />
                <Route path="/order" component={ Order } />
                <Route path="/orders" component={ Orders } />
                <Route path="/catalog" component={ Catalog } />
                <Route path="/product" component={ Product } />
                <Route path="/about-us" component={ AboutUs } />
            </div>
            <Footer />
        </div>
    );
}

export default App;

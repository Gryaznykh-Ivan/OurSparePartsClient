import React from 'react';
import { ToastContainer } from 'react-toastify'
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'

import ScrollToTop from './components/ScrollToTop';
import Index from './pages/Index'
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Order from './pages/Order';
import AboutUs from './pages/AboutUs';
import Loader from './components/Loader';
import NotFound from './pages/NotFound';

import 'react-toastify/dist/ReactToastify.min.css';

function App() {
    return (
        <div className="app">
            <div className="font-sans h-screen flex flex-col">
                <Header />
                <div className="flex-1 bg-gray-100">
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/order/:id" component={Order} />
                        <Route path="/orders" component={Orders} />
                        <Route path="/catalog" component={Catalog} />
                        <Route path="/product/:id" component={Product} />
                        <Route path="/about-us" component={AboutUs} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
                <Footer />
            </div>
            <ScrollToTop />
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;

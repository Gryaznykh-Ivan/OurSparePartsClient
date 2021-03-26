import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'

import Index from './pages/Index'
import Catalog from './pages/Catalog';

function App() {
    return (
        <div className="font-sans h-screen flex flex-col">
            <Header />
            <div className="flex-1 bg-gray-100">
                <Route exact path="/" component={ Index } />
                <Route path="/catalog" component={ Catalog } />
            </div>
            <Footer />
        </div>
    );
}

export default App;

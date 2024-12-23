import React from 'react';
import ProductsRouter from '../components/ProductsRouter';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ProductsRouter />
        </BrowserRouter>
    );
};

export default App;
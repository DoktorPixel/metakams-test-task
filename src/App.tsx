import React from 'react';
import ProductPage from './components/ProductPage';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <main className="layout">
      <Header />
      <div className="app-container">
        <ProductPage name="Google Pixel 9" />
      </div>
      <Footer />
    </main>
  );
};

export default App;

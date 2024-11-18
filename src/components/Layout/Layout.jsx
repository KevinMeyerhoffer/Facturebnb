// src/components/Layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Assure-toi d'importer Outlet
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <div className="main-content">
        {/* Affiche le contenu des pages enfants ici */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

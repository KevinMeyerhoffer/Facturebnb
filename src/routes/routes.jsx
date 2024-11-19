// src/routes/routes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Importer Navigate pour la redirection
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard'; // Importation de Dashboard
import Layout from '../components/Layout/Layout';
import NotFound from '../pages/404'; // Importation de la page 404
import { useSelector } from 'react-redux'; // Importation de useSelector pour vérifier l'état de connexion

const AppRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.user); // Accéder à l'état de connexion dans Redux

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Route vers le dashboard uniquement si l'utilisateur est connecté */}
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/404" />} />
        
        {/* Route vers la page 404 si non connecté */}
        <Route path="/404" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

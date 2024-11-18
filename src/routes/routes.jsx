// src/routes/routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Layout from '../components/Layout/Layout'; // Importation du layout

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Ajouter d'autres routes ici */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;

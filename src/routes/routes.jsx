// src/routes/routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard'; // Importation du Dashboard
import Layout from '../components/Layout/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Route vers le Dashboard */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;

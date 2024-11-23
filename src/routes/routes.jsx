// src/routes/routes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import ApartmentDetail from '../pages/ApartementDetail'; // Importation de ApartmentDetail
import Settings from '../pages/ApartementSettings'; // Importation de Settings
import InvoicePage from '../pages/InvoicePage'; // Importation de Invoice
import Reservation from '../pages/Reservation'; // Importation de Reservation
import NotFound from '../pages/404'; // Importation de la page 404
import { useSelector } from 'react-redux';
import UserSettings from '../pages/UserSettings';

const AppRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.user); // Vérifie l'état de connexion

  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Pages générales */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />

        {/* Dashboard / Settings */}
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/404" />} />
        <Route path="/user-Settings" element={isLoggedIn ? <UserSettings /> : <Navigate to="/404" />} />
        
        {/* Pages de l'appartement */}
        <Route path="/apartment/:apartmentId" element={isLoggedIn ? <ApartmentDetail /> : <Navigate to="/404" />} />
        <Route path="/apartment/:apartmentId/settings" element={isLoggedIn ? <Settings /> : <Navigate to="/404" />} />
        <Route path="/apartment/:apartmentId/invoice" element={isLoggedIn ? <InvoicePage /> : <Navigate to="/404" />} />
        <Route path="/apartment/:apartmentId/reservation" element={isLoggedIn ? <Reservation /> : <Navigate to="/404" />} />
        
      </Route>
    </Routes>
  );
};

export default AppRoutes;

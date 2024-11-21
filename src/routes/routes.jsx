// src/routes/routes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import ApartmentDetail from '../pages/ApartementDetail'; // Importation de ApartmentDetail
import Settings from '../pages/ApartementSettings'; // Importation de Settings
import Owner from '../pages/AppartementOwner'; // Importation de Owner
import Invoice from '../pages/Invoice'; // Importation de Invoice
import Reservation from '../pages/Reservation'; // Importation de Reservation
import NotFound from '../pages/404'; // Importation de la page 404
import { useSelector } from 'react-redux';
import UserSettings from '../pages/UserSettings';

const AppRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.user); // Vérifie l'état de connexion

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/404" />} />
        <Route path="/user-Settings" element={isLoggedIn ? <UserSettings /> : <Navigate to="/404" />} />
        <Route path="/apartment/:apartmentId" element={isLoggedIn ? <ApartmentDetail /> : <Navigate to="/404" />} />
        
        {/* Pages de l'appartement */}
        <Route path="/apartment/:apartmentId/settings" element={isLoggedIn ? <Settings /> : <Navigate to="/404" />} />
        <Route path="/apartment/:apartmentId/owner" element={isLoggedIn ? <Owner /> : <Navigate to="/404" />} />
        <Route path="/apartment/:apartmentId/invoice" element={isLoggedIn ? <Invoice /> : <Navigate to="/404" />} />
        <Route path="/apartment/:apartmentId/reservation" element={isLoggedIn ? <Reservation /> : <Navigate to="/404" />} />
        
        <Route path="/404" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

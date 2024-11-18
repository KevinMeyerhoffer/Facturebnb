// src/App.jsx
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'; // Applique les styles par défaut de MUI
import theme from './themes/theme'; // Importation du thème personnalisé
import AppRoutes from './routes/routes'; // Importation des routes

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Applique les styles globaux de Material UI */}
      <AppRoutes /> {/* Affiche les routes de l'application */}
    </ThemeProvider>
  );
};

export default App;

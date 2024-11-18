// src/components/Layout/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // Pour la navigation

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo ou Titre */}
          <Typography variant="h6" component="div">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              FactureBNB
            </Link>
          </Typography>



          {/* Bouton de Connexion */}
          <Button variant="contained" color="primary">
            Connexion
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

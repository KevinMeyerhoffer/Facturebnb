// src/components/Layout/Footer.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Pour la navigation

const Footer = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center', bgcolor: 'background.default' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; 2024 FactureBNB. Tous droits réservés.
      </Typography>
      
      {/* Lien "À propos" dans le Footer */}
      <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button color="inherit" size="small">À propos</Button>
      </Link>
    </Box>
  );
};

export default Footer;

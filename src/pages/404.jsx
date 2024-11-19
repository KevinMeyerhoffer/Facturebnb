// src/pages/404.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Page non trouvée</Typography>
      <Typography variant="body1">Désolé, vous n'êtes pas autorisé à accéder à cette page.</Typography>
    </Container>
  );
};

export default NotFound;

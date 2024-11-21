// src/pages/Reservation.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const Reservation = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Réservations de l'appartement</Typography>
      <Typography variant="body1">Page des réservations associées à l'appartement.</Typography>
    </Container>
  );
};

export default Reservation;

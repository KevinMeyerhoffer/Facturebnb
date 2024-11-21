// src/pages/Invoice.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const Invoice = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Factures de l'appartement</Typography>
      <Typography variant="body1">Page des factures associées à l'appartement.</Typography>
    </Container>
  );
};

export default Invoice;

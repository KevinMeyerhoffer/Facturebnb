// src/pages/Dashboard.jsx
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Dashboard = ({ user }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Bienvenue, {user.name}!</Typography>
      <Typography variant="h6" gutterBottom>Voici vos appartements :</Typography>
      <Grid container spacing={3}>
        {user.apartments.map((apartment) => (
          <Grid item xs={12} sm={6} md={4} key={apartment.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{apartment.name}</Typography>
                <Typography variant="body2">Adresse : {apartment.address}</Typography>
                <Typography variant="body2">Propriétaire : {apartment.owner}</Typography>
                <Typography variant="body2">Frais de ménage : {apartment.cleaningFee}€</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;

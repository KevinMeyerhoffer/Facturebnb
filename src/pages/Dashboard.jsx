import React from 'react';
import { useSelector } from 'react-redux'; // Importation de useSelector pour accéder au store Redux
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Dashboard = () => {
  // Utiliser useSelector pour accéder au state de Redux et récupérer les appartements
  const { apartments } = useSelector((state) => state.user.currentUser); // Accéder aux appartements depuis Redux

  console.log(apartments); // Ajout de console.log pour déboguer
  console.log('Apartments from Redux store:', apartments);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Bienvenue sur votre Dashboard !</Typography>
      <Typography variant="h6" gutterBottom>Voici vos appartements :</Typography>
      {apartments && apartments.length > 0 ? (
        <Grid container spacing={3}>
          {apartments.map((apartment) => (
            <Grid item xs={12} sm={6} md={4} key={apartment.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{apartment.name}</Typography>
                  <Typography variant="body2">Adresse : {apartment.address}</Typography>
                  <Typography variant="body2">Frais de ménage : {apartment.cleaningFee}€</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1">Aucun appartement trouvé.</Typography>
      )}
    </Container>
  );
};

export default Dashboard;

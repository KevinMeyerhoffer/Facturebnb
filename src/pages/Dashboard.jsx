import React from 'react';
import { Link } from 'react-router-dom'; // Importation de Link pour la navigation
import { useSelector } from 'react-redux'; // Pour récupérer l'état global de Redux
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const Dashboard = () => {
  // Utiliser useSelector pour accéder au state de Redux et récupérer les appartements
  const { apartments } = useSelector((state) => state.user.currentUser || {}); // Accéder aux appartements depuis Redux

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
                  
                  {/* Bouton de redirection vers les détails de l'appartement */}
                  <Link to={`/apartment/${apartment.id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="primary">Détail</Button>
                  </Link>
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

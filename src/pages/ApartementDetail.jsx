// src/pages/ApartmentDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Pour récupérer les paramètres et rediriger
import { useSelector } from 'react-redux';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';

const ApartmentDetail = () => {
  const { apartmentId } = useParams(); // Récupérer l'ID de l'appartement depuis l'URL
  const { apartments } = useSelector((state) => state.user.currentUser || {}); // Accéder aux appartements de currentUser depuis Redux

  // Trouver l'appartement par ID
  const apartment = apartments ? apartments.find((apartment) => apartment.id === parseInt(apartmentId)) : null;

  // Si l'appartement n'est pas trouvé, afficher un message d'erreur
  if (!apartment) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>Appartement non trouvé</Typography>
        <Typography variant="body1">Désolé, l'appartement que vous cherchez n'existe pas.</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Link to={`/dashboard`} style={{ textDecoration: 'none' }}>
        <Button variant="outlined" color="primary" style={{ marginBottom: '20px' }}>
          Retour au Dashboard
        </Button>
      </Link>
      <Typography variant="h4" gutterBottom>Détails de l'appartement</Typography>
      <Card>
        <CardContent>
          <Typography variant="h5">{apartment.name}</Typography>
          <Typography variant="body1">Adresse : {apartment.address}</Typography>
          <Typography variant="body1">Frais de ménage : {apartment.cleaningFee}€</Typography>
          <Typography variant="body2">Description : {apartment.description}</Typography>

          {/* Boutons de navigation vers les différentes pages */}
          <div style={{ marginTop: '20px' }}>
            <Link to={`/apartment/${apartment.id}/settings`} style={{ textDecoration: 'none', marginRight: '10px' }}>
              <Button variant="outlined" color="primary">Réglages</Button>
            </Link>
            <Link to={`/apartment/${apartment.id}/invoice`} style={{ textDecoration: 'none', marginRight: '10px' }}>
              <Button variant="outlined" color="primary">Facture</Button>
            </Link>
            <Link to={`/apartment/${apartment.id}/reservation`} style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="primary">Réservation</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ApartmentDetail;

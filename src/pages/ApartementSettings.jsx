// src/pages/ApartmentSettings.jsx
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Accès à Redux
import { useParams, Link } from 'react-router-dom'; // Récupération de l'ID de l'appartement
import { Button, Container, TextField, Grid, Checkbox, FormControlLabel, Typography, Card, CardContent } from '@mui/material';
import { updateApartment } from '../store/userSlice'; // Importer l'action updateApartment

const ApartmentSettings = () => {
  const { apartmentId } = useParams(); // Récupérer l'ID de l'appartement
  const dispatch = useDispatch();

  // Récupérer l'appartement depuis Redux
  const { apartments } = useSelector((state) => state.user.currentUser || {});
  const apartment = apartments ? apartments.find((apt) => apt.id === parseInt(apartmentId)) : null;

  // Si l'appartement n'existe pas, on affiche un message d'erreur
  if (!apartment) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>Appartement non trouvé</Typography>
        <Typography variant="body1">Désolé, l'appartement que vous cherchez n'existe pas.</Typography>
      </Container>
    );
  }

  // État local pour gérer les changements dans le formulaire
  const [formData, setFormData] = useState({
    address: apartment.address || '',
    postalCode: apartment.postalCode || '',
    city: apartment.city || '',
    ownerFirstName: apartment.ownerFirstName || '',
    ownerLastName: apartment.ownerLastName || '',
    ownerEmail: apartment.ownerEmail || '',
    billingAddress: apartment.billingAddress || '',
    billingPostalCode: apartment.billingPostalCode || '',
    billingCity: apartment.billingCity || '',
    conciergePercentage: apartment.conciergePercentage || '',
    cleaningPrice: apartment.cleaningPrice || '',
    refactorCleaning: apartment.refactorCleaning || false,
    consumablePrice: apartment.consumablePrice || '',
    refactorConsumable: apartment.refactorConsumable || false,
    airbnbCommission: apartment.airbnbCommission || '',
    bookingCommission: apartment.bookingCommission || '',
    directCommission: apartment.directCommission || '',
  });

  // Mise à jour des champs du formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Envoi des données modifiées
  const handleSubmit = () => {
    // Action pour mettre à jour l'appartement dans Redux
    dispatch(updateApartment({ apartmentId: apartment.id, data: formData }));
    alert('Les informations ont été mises à jour avec succès !');
  };

  return (
    <Container>
      {/* Bouton retour vers la page de l'appartement */}
      <Link to={`/apartment/${apartment.id}`} style={{ textDecoration: 'none' }}>
        <Button variant="outlined" color="primary" style={{ marginBottom: '20px' }}>
          Retour à l'appartement
        </Button>
      </Link>

      <Typography variant="h4" gutterBottom>Réglages de l'appartement</Typography>
      
      <form>
        <Grid container spacing={3}>
          {/* Section: Biens */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Bien</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Adresse du bien"
                      fullWidth
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Code Postal"
                      fullWidth
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Ville"
                      fullWidth
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Section: Propriétaire */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Propriétaire</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Prénom propriétaire"
                      fullWidth
                      name="ownerFirstName"
                      value={formData.ownerFirstName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Nom propriétaire"
                      fullWidth
                      name="ownerLastName"
                      value={formData.ownerLastName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email propriétaire"
                      fullWidth
                      name="ownerEmail"
                      value={formData.ownerEmail}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Adresse de facturation"
                      fullWidth
                      name="billingAddress"
                      value={formData.billingAddress}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Code postal de facturation"
                      fullWidth
                      name="billingPostalCode"
                      value={formData.billingPostalCode}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Ville de facturation"
                      fullWidth
                      name="billingCity"
                      value={formData.billingCity}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Section: Conciergerie */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Conciergerie</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Pourcentage conciergerie"
                      fullWidth
                      name="conciergePercentage"
                      type="number"
                      value={formData.conciergePercentage}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Section: Ménage & Consommables */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Ménage & Consommables</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Prix ménage"
                      fullWidth
                      name="cleaningPrice"
                      type="number"
                      value={formData.cleaningPrice}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="refactorCleaning"
                          checked={formData.refactorCleaning}
                          onChange={handleChange}
                        />
                      }
                      label="Ménage à refacturer au propriétaire"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Forfait consommable"
                      fullWidth
                      name="consumablePrice"
                      type="number"
                      value={formData.consumablePrice}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="refactorConsumable"
                          checked={formData.refactorConsumable}
                          onChange={handleChange}
                        />
                      }
                      label="Forfait consommable à refacturer au propriétaire"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Section: Commissions plateformes */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Commissions plateformes</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Commission plateforme Airbnb"
                      fullWidth
                      name="airbnbCommission"
                      type="number"
                      value={formData.airbnbCommission}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Commission plateforme Booking"
                      fullWidth
                      name="bookingCommission"
                      type="number"
                      value={formData.bookingCommission}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Commission plateforme Direct"
                      fullWidth
                      name="directCommission"
                      type="number"
                      value={formData.directCommission}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Sauvegarder les modifications */}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Sauvegarder les modifications
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ApartmentSettings;

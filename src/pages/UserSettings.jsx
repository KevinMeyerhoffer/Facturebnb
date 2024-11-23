// src/pages/UserSettings.jsx
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Pour accéder à Redux
import { Link, useNavigate } from 'react-router-dom'; // Importation de useNavigate pour rediriger
import { Button, Container, TextField, Typography, Grid, Card, CardContent, FormControlLabel, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { updateUserSettings } from '../store/userSlice'; // Action pour mettre à jour les paramètres utilisateur

const UserSettings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook de redirection
  const { currentUser } = useSelector((state) => state.user);

  // Initialiser les données de l'utilisateur
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    billingAddress: '',
    billingPostalCode: '',
    billingCity: '',
    isVatRegistered: false,
  });

  // État pour la modale de changement de mot de passe
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  useEffect(() => {
    if (currentUser) {
      setFormData({
        firstName: currentUser.firstName || '',
        lastName: currentUser.lastName || '',
        email: currentUser.email || '',
        companyName: currentUser.companyName || '',
        billingAddress: currentUser.billingAddress || '',
        billingPostalCode: currentUser.billingPostalCode || '',
        billingCity: currentUser.billingCity || '',
        isVatRegistered: currentUser.isVatRegistered || false,
      });
    }
  }, [currentUser]);

  // Mise à jour des champs du formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Mise à jour du mot de passe
  const handlePasswordChange = () => {
    if (newPassword !== confirmNewPassword) {
      alert("Les nouveaux mots de passe ne correspondent pas !");
      return;
    }
    // Ici, tu devrais probablement appeler une action Redux ou une API pour changer le mot de passe
    alert("Mot de passe changé avec succès !");
    console.log(newPassword)
    setOpenPasswordModal(false);
  };

  // Envoi des données modifiées
  const handleSubmit = () => {
    // Action pour mettre à jour les paramètres utilisateur dans Redux
    dispatch(updateUserSettings(formData));
    alert('Les informations ont été mises à jour avec succès !');
    navigate('/dashboard');
  };

  return (
    <Container>
      <Link to={`/dashboard`} style={{ textDecoration: 'none' }}>
        <Button variant="outlined" color="primary" style={{ marginBottom: '20px' }}>
          Retour au Dashboard
        </Button>
      </Link>
      
      <Typography variant="h4" gutterBottom>Paramètres utilisateur</Typography>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Section: Utilisateur */}
        <Card>
          <CardContent>
            <Typography variant="h6">Utilisateur</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Prénom"
                  fullWidth
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nom"
                  fullWidth
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" color="secondary" onClick={() => setOpenPasswordModal(true)}>
                  Changer le mot de passe
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Section: Adresse de facturation */}
        <Card style={{ marginTop: '20px' }}>
          <CardContent>
            <Typography variant="h6">Adresse de Facturation</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nom de Société / EI / micro-entreprise"
                  fullWidth
                  name="companyName"
                  value={formData.companyName}
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
                  label="Code postal"
                  fullWidth
                  name="billingPostalCode"
                  value={formData.billingPostalCode}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Ville"
                  fullWidth
                  name="billingCity"
                  value={formData.billingCity}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Section: TVA */}
        <Card style={{ marginTop: '20px' }}>
          <CardContent>
            <Typography variant="h6">TVA</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="isVatRegistered"
                      checked={formData.isVatRegistered}
                      onChange={handleChange}
                    />
                  }
                  label="Soumis à la TVA"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Sauvegarder les modifications */}
        <Grid item xs={12} style={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Sauvegarder les modifications
          </Button>
        </Grid>
      </form>

      {/* Modale pour changer le mot de passe */}
      <Dialog open={openPasswordModal} onClose={() => setOpenPasswordModal(false)}>
        <DialogTitle>Changer le mot de passe</DialogTitle>
        <DialogContent>
          <TextField
            label="Ancien mot de passe"
            fullWidth
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <TextField
            label="Nouveau mot de passe"
            fullWidth
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={{ marginTop: '10px' }}
          />
          <TextField
            label="Confirmer le mot de passe"
            fullWidth
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            style={{ marginTop: '10px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPasswordModal(false)} color="primary">
            Annuler
          </Button>
          <Button onClick={handlePasswordChange} color="primary">
            Sauvegarder
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UserSettings;

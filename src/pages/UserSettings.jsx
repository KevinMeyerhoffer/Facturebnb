// src/pages/UserSettings.jsx
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Pour accéder à Redux
import { Link, useNavigate } from 'react-router-dom'; // Importation de useNavigate pour rediriger
import { Button, Container, TextField, Typography, Grid, Card, CardContent } from '@mui/material';
import { updateUserSettings } from '../store/userSlice'; // Action pour mettre à jour les paramètres utilisateur
import { Navigate } from 'react-router-dom';

const UserSettings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook de redirection
  const { currentUser } = useSelector((state) => state.user);

  // Initialiser les données de l'utilisateur
  const [formData, setFormData] = useState({
    firstName: currentUser ? currentUser.firstName : '',
    lastName: currentUser ? currentUser.lastName : '',
    email: currentUser ? currentUser.email : '',
    // Ajouter d'autres champs de paramètres utilisateur ici si nécessaire
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        // Mettre à jour les autres champs ici
      });
    }
  }, [currentUser]);

  // Mise à jour des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
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

      <form>
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

          {/* Ajouter d'autres champs de paramètres utilisateur ici */}
          
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

export default UserSettings;

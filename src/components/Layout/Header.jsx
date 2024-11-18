// src/components/Layout/Header.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; // Importation de useNavigate pour la redirection
import { users } from '../../data/users'; // Importation des utilisateurs test

const Header = () => {
  const [open, setOpen] = useState(false); // Gère l'ouverture de la modale
  const [email, setEmail] = useState(''); // État pour l'email
  const [password, setPassword] = useState(''); // État pour le mot de passe
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Gère l'état de connexion
  const [currentUser, setCurrentUser] = useState(null); // Gère l'utilisateur actuellement connecté

  const navigate = useNavigate(); // Hook pour la redirection

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    // Chercher l'utilisateur par email et mot de passe
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setIsLoggedIn(true); // Marquer l'utilisateur comme connecté
      setCurrentUser(user); // Sauvegarder l'utilisateur connecté
      setOpen(false); // Fermer la modale
      navigate('/'); // Rediriger vers la page d'accueil de l'utilisateur (dashboard)
      console.log('Utilisateur connecté :', user.name);
    } else {
      alert('Identifiants incorrects');
    }
  };

  const handleLogOut = () => {
    setIsLoggedIn(false); // Déconnexion
    setCurrentUser(null); // Effacer l'utilisateur actuel
    navigate('/'); // Rediriger vers la page d'accueil (connexion)
    console.log('Utilisateur déconnecté');
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                FactureBNB
              </Link>
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: 16 }}>
                <Button color="inherit">Accueil</Button>
              </Link>

              {/* Afficher le bouton de connexion ou déconnexion */}
              {isLoggedIn ? (
                <Button color="inherit" onClick={handleLogOut}>Déconnexion</Button>
              ) : (
                <Button color="inherit" onClick={handleClickOpen}>Connexion</Button>
              )}
            </Box>
          </Container>
        </Toolbar>

        {/* Modale de connexion */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Connexion</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Mot de passe"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Annuler
            </Button>
            <Button onClick={handleLogin} color="primary">
              Se connecter
            </Button>
          </DialogActions>
        </Dialog>
      </AppBar>
    </>
  );
};

export default Header;

// src/components/Layout/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Link } from 'react-router-dom'; // Pour la navigation
import { useDispatch, useSelector } from 'react-redux'; // Importation de hooks pour Redux
import { login, logout } from '../../store/userSlice'; // Import des actions Redux
import { users } from '../../data/users'; // Import des utilisateurs

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, currentUser } = useSelector((state) => state.user); // Accéder à l'état de l'utilisateur depuis Redux

  const [open, setOpen] = React.useState(false); // Gère l'ouverture de la modale
  const [email, setEmail] = React.useState(''); // État pour l'email
  const [password, setPassword] = React.useState(''); // État pour le mot de passe

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    // Chercher l'utilisateur par email et mot de passe dans le fichier users.js
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      // Générer un token (dans une vraie appli, ce serait un JWT)
      const token = `fake-token-${email}-${Date.now()}`;
      
      // Envoi des informations de l'utilisateur à Redux, en excluant le mot de passe
      const { password, ...userWithoutPassword } = user; // Exclure le mot de passe
      // Stocker le token dans localStorage (ou sessionStorage)
      localStorage.setItem('authToken', token);
      
      // Dispatch de l'action login avec l'utilisateur sans le mot de passe et le token
      dispatch(login({ user: userWithoutPassword, token }));

      setOpen(false); // Fermer la modale après la connexion
    } else {
      alert('Identifiants incorrects');
    }
  };

  const handleLogOut = () => {
    // Effacer le token de localStorage lors de la déconnexion
    localStorage.removeItem('authToken');
    dispatch(logout()); // Dispatch de l'action de déconnexion
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
      </AppBar>

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
    </>
  );
};

export default Header;

// src/themes/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Couleur principale (Bleu)
    },
    secondary: {
      main: "#ff4081", // Couleur secondaire (Rose)
    },
    background: {
      default: "#f5f5F9", // Couleur de fond de l'application
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Police de l'application
    h1: {
      fontSize: "2rem", // Taille de la police pour h1
    },
    body1: {
      fontSize: "1rem", // Taille de la police pour les paragraphes
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Bord arrondi pour les boutons
        },
      },
    },
  },
});

export default theme;

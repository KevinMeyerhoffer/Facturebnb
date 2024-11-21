// src/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Slice pour gérer l'utilisateur
export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    currentUser: null, // Informations de l'utilisateur, incluant les appartements
    token: null, // Token d'authentification
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload.user; // Sauvegarder l'utilisateur connecté
      state.token = action.payload.token; // Sauvegarder le token d'authentification
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null; // Effacer l'utilisateur
      state.token = null; // Effacer le token
    },
    // Action pour mettre à jour les informations d'un appartement spécifique
    updateApartment: (state, action) => {
      const { apartmentId, data } = action.payload;
      if (state.currentUser) {
        // Trouver l'appartement par ID et mettre à jour les données
        const apartmentIndex = state.currentUser.apartments.findIndex(
          (apt) => apt.id === apartmentId
        );
        if (apartmentIndex !== -1) {
          state.currentUser.apartments[apartmentIndex] = {
            ...state.currentUser.apartments[apartmentIndex],
            ...data, // Mise à jour des données de l'appartement
          };
        }
      }
    },
  },
});

// Export des actions
export const { login, logout, updateApartment } = userSlice.actions;

// Export du reducer pour le store
export default userSlice.reducer;

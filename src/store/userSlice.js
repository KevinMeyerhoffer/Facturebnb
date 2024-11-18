// src/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Slice pour gérer l'utilisateur
export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    currentUser: null, // Informations de l'utilisateur
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload.user; // Sauvegarder l'utilisateur connecté
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null; // Effacer l'utilisateur
    },
  },
});

// Export des actions
export const { login, logout } = userSlice.actions;

// Export du reducer pour le store
export default userSlice.reducer;

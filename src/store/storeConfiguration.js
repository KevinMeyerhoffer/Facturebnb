// src/store/storeConfiguration.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"; // Import du slice de l'utilisateur

const store = configureStore({
  reducer: {
    user: userReducer, // Ajouter le reducer de l'utilisateur
  },
  devTools: process.env.NODE_ENV !== "production", // Activer en mode développement
});

export default store;

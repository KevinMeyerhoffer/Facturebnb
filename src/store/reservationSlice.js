import { createSlice } from "@reduxjs/toolkit";

export const reservationSlice = createSlice({
  name: "reservations",
  initialState: {
    list: [], // Liste des réservations
  },
  reducers: {
    setReservations: (state, action) => {
      state.list = action.payload; // Charger les réservations
    },
    clearReservations: (state) => {
      state.list = []; // Vider les réservations
    },
  },
});

// Export des actions
export const { setReservations, clearReservations } = reservationSlice.actions;

// Export du reducer pour le store
export default reservationSlice.reducer;

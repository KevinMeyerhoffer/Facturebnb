import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import reservationReducer from "./reservationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    reservations: reservationReducer,
  },
});

export default store;

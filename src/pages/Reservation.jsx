import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setReservations, clearReservations } from "../store/reservationSlice";
import { reservations as reservationsData } from "../data/reservations"; // Données locales

const Reservation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Pour rediriger l'utilisateur si besoin
  const { apartmentId } = useParams(); // ID de l'appartement depuis l'URL
  const reservations = useSelector((state) => state.reservations.list);

  const userId  = useSelector((state) => state.user.currentUser || {}); // Récupérer l'utilisateur connecté
  // const userId  = 1
  console.log(typeof(userId));
  console.log( userId);
  
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Filtrer les données pour l'utilisateur et l'appartement
  useEffect(() => {
    const filteredReservations = reservationsData.filter(
      (reservation) =>
        reservation.apartmentId === parseInt(apartmentId) &&
        reservation.userId === userId.id
    );

    dispatch(setReservations(filteredReservations)); // Charger dans Redux

    return () => {
      dispatch(clearReservations()); // Vider Redux au démontage du composant
    };
  }, [apartmentId, dispatch]);

  const handleMonthChange = (direction) => {
    const newMonth = direction === "prev" ? selectedMonth - 1 : selectedMonth + 1;
    if (newMonth < 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else if (newMonth > 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(newMonth);
    }
  };

  const handleGenerateInvoice = () => {
    alert(`Génération de la facture pour ${selectedMonth}/${selectedYear}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Réservations de l'appartement
      </Typography>

      <Grid container spacing={3} alignItems="center">
        <Grid item xs={8}>
          <Grid container alignItems="center">
            <Button onClick={() => handleMonthChange("prev")}>
              <ArrowBackIos />
            </Button>
            <Typography variant="h6" style={{ margin: "0 10px" }}>
              {`${selectedMonth.toString().padStart(2, "0")} / ${selectedYear}`}
            </Typography>
            <Button onClick={() => handleMonthChange("next")}>
              <ArrowForwardIos />
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateInvoice}
          >
            Générer la facture
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <table>
            <thead>
              <tr>
                <th>Num Réservation</th>
                <th>Plateforme</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Total (€)</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.reservationNumber}>
                  <td>{reservation.reservationNumber}</td>
                  <td>{reservation.platform}</td>
                  <td>{reservation.checkIn}</td>
                  <td>{reservation.checkOut}</td>
                  <td>{reservation.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reservation;

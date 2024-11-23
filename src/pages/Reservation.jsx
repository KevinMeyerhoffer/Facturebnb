// src/pages/Reservation.jsx
import React, { useState } from 'react';
import { Container, Typography, Grid, Button, TextField } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { reservations } from '../data/reservations'; // Importer les données des réservations

const Reservation = () => {
  const { apartmentId } = useParams(); // Récupérer l'ID de l'appartement depuis l'URL
  const userId = 1; // Par exemple, l'ID de l'utilisateur connecté (à ajuster selon ton store)

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Mois courant (1-12)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Année courante

  // Filtrer les réservations pour l'appartement et l'utilisateur sélectionnés
  const filteredReservations = reservations.filter(
    (reservation) =>
      reservation.apartmentId === parseInt(apartmentId) && reservation.userId === userId
  );

  // État pour suivre la cellule modifiée
  const [editingCell, setEditingCell] = useState(null);
  const [newValue, setNewValue] = useState('');

  // Gérer le changement de mois
  const handleMonthChange = (direction) => {
    const newMonth = direction === 'prev' ? selectedMonth - 1 : selectedMonth + 1;
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

  // Gérer le changement d'année
  const handleYearChange = (direction) => {
    setSelectedYear(direction === 'prev' ? selectedYear - 1 : selectedYear + 1);
  };

  // Gérer la génération de la facture
  const handleGenerateInvoice = () => {
    alert(`Génération de la facture pour ${selectedMonth}/${selectedYear}`);
  };

  // Activer le mode édition d'une cellule
  const handleEditCell = (rowIndex, columnName, value) => {
    setEditingCell({ rowIndex, columnName });
    setNewValue(value);
  };

  // Enregistrer la modification d'une cellule
  const handleSaveEdit = () => {
    const updatedReservations = [...filteredReservations];
    updatedReservations[editingCell.rowIndex][editingCell.columnName] = newValue;
    // Enregistrez la mise à jour dans votre store ou base de données
    setEditingCell(null); // Désactiver le mode édition
    setNewValue('');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Réservations de l'appartement</Typography>
      
      {/* Ligne avec sélection du mois, année et bouton générer la facture */}
      <Grid container spacing={3} alignItems="center">
        {/* Sélecteurs de mois et d'année à gauche */}
        <Grid item xs={6} sm={8}>
          <Grid container justifyContent="flex-start" alignItems="center">
            <Button
              onClick={() => handleMonthChange('prev')}
              variant="contained"
              color="primary"
              startIcon={<ArrowBackIos />}
            />
            <Typography variant="h6" style={{ margin: '0 10px' }}>
              {`${selectedMonth < 10 ? '0' + selectedMonth : selectedMonth} / ${selectedYear}`}
            </Typography>
            <Button
              onClick={() => handleMonthChange('next')}
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIos />}
            />
            <Button
              onClick={() => handleYearChange('prev')}
              variant="contained"
              color="primary"
              startIcon={<ArrowBackIos />}
              style={{ marginLeft: '10px' }}
            />
            <Typography variant="h6" style={{ margin: '0 10px' }}>
              {selectedYear}
            </Typography>
            <Button
              onClick={() => handleYearChange('next')}
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIos />}
            />
          </Grid>
        </Grid>

        {/* Bouton générer la facture à droite */}
        <Grid item xs={6} sm={4} style={{ textAlign: 'right' }}>
          <Button
            onClick={handleGenerateInvoice}
            variant="contained"
            color="primary"
          >
            Générer la facture du mois
          </Button>
        </Grid>
      </Grid>

      {/* Tableau des réservations */}
      <Grid container spacing={3} style={{ marginTop: '30px' }}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Liste des réservations pour {`${selectedMonth < 10 ? '0' + selectedMonth : selectedMonth} / ${selectedYear}`}
          </Typography>

          {/* Tableau des réservations */}
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <table border="1" cellPadding="10" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>Num Réservation</th>
                  <th>Plateforme</th>
                  <th>Prénom</th>
                  <th>Nom</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>Montant Total</th>
                  <th>Nb Nuitées</th>
                  <th>Commissions Plateforme</th>
                  <th>Montant Commission</th>
                  <th>CA Brut</th>
                  <th>Total Conciergerie</th>
                  <th>TVA</th>
                </tr>
              </thead>
              <tbody>
                {filteredReservations.map((reservation, rowIndex) => (
                  <tr key={reservation.reservationNumber}>
                    {[
                      'reservationNumber',
                      'platform',
                      'firstName',
                      'lastName',
                      'checkIn',
                      'checkOut',
                      'totalAmount',
                      'numberOfNights',
                      'platformCommission',
                      'commissionAmount',
                      'caAfterCommission',
                      'conciergeTotal',
                      'vat',
                    ].map((columnName) => {
                      // Si la cellule est en mode édition, afficher un champ modifiable
                      if (editingCell && editingCell.rowIndex === rowIndex && editingCell.columnName === columnName) {
                        return (
                          <td key={columnName}>
                            <TextField
                              value={newValue}
                              onChange={(e) => setNewValue(e.target.value)}
                              onBlur={handleSaveEdit} // Sauvegarder à la perte du focus
                              autoFocus
                            />
                          </td>
                        );
                      }
                      return (
                        <td
                          key={columnName}
                          onClick={() => handleEditCell(rowIndex, columnName, reservation[columnName])}
                        >
                          {reservation[columnName]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reservation;

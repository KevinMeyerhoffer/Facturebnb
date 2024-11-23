// src/pages/InvoicePage.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux'; // Pour récupérer l'état global de Redux
import { Button, Container, Typography, Grid, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { invoices } from '../data/invoices'; // Import des factures fictives
import { useParams } from 'react-router-dom';

const InvoicePage = () => {
  // Récupérer l'appartement actuel et l'utilisateur depuis Redux
  const userId  = useSelector((state) => state.user.currentUser || {}); // Récupérer l'utilisateur connecté
  const { apartmentId } = useParams(); // Récupérer l'ID de l'appartement depuis l'URL
  
  // Log pour vérifier la valeur de apartmentId
  console.log('Apartment ID:', apartmentId); // Devrait être un string venant de l'URL
  console.log('User ID:', userId.id);

  // Conversion de apartmentId en nombre (si c'est un string)
  const apartmentIdNumber = Number(apartmentId);

  // Filtrer les factures par apartmentId et userId
  const apartmentInvoices = invoices.filter(invoice => 
    invoice.apartmentId === apartmentIdNumber && invoice.userId === userId.id
  );

  // Log pour vérifier les factures après filtrage
  console.log('Filtered Invoices:', apartmentInvoices);

  // État pour gérer l'ouverture et la fermeture de la modale
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [invoiceToDelete, setInvoiceToDelete] = useState(null);

  // Fonction pour ouvrir la modale de suppression
  const handleOpenDeleteDialog = (invoice) => {
    setInvoiceToDelete(invoice);
    setOpenDeleteDialog(true);
  };

  // Fonction pour fermer la modale de suppression
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setInvoiceToDelete(null);
  };

  // Fonction pour supprimer la facture
  const handleDeleteInvoice = () => {
    if (invoiceToDelete) {
      console.log(`Suppression de la facture : ${invoiceToDelete.invoiceNumber}`);
      // Logique pour supprimer la facture ici
    }
    handleCloseDeleteDialog(); // Fermer la modale après suppression
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Factures de l'appartement</Typography>

      {/* Si aucune facture n'est disponible, afficher un message */}
      {apartmentInvoices.length === 0 ? (
        <Typography variant="body1" color="textSecondary">Il n'y a pas de factures actuellement.</Typography>
      ) : (
        <Grid container spacing={3}>
          {apartmentInvoices.map((invoice) => (
            <Grid item xs={12} sm={6} md={4} key={invoice.id}>
              <Card>
                <CardContent>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h6">{`Facture - ${invoice.month} ${invoice.year}`}</Typography>
                      <Typography variant="body2">{`Numéro : ${invoice.invoiceNumber}`}</Typography>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary" style={{ margin: '0 8px' }}>Télécharger</Button>
                      <Button variant="outlined" color="primary" style={{ margin: '0 8px' }}>Envoyer</Button>
                      <Button 
                        variant="outlined" 
                        color="secondary" 
                        onClick={() => handleOpenDeleteDialog(invoice)}
                        style={{ margin: '0 8px' }}
                      >
                        Supprimer
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Modale de confirmation de suppression */}
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Êtes-vous sûr de vouloir supprimer cette facture ?</DialogTitle>
        <DialogContent>
          <Typography>Cette action est irréversible.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Annuler
          </Button>
          <Button onClick={handleDeleteInvoice} color="secondary">
            Oui, supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default InvoicePage;

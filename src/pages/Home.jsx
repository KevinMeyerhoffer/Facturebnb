import React from "react";
import { Typography, Container, Button } from "@mui/material";

const Home = () => {
  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h3" gutterBottom>
        Bienvenue sur FactureBNB
      </Typography>
      <Typography variant="body1" gutterBottom>
        Simplifiez la gestion de vos factures et gagnez du temps avec notre outil.
      </Typography>
      <Button variant="contained" color="primary" style={{ marginTop: "20px" }}>
        Découvrir
      </Button>
    </Container>
  );
};

export default Home;

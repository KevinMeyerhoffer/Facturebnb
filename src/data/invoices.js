// src/data/invoices.js
export const invoices = [
  {
    id: 1,
    userId: 1, // ID de l'utilisateur
    apartmentId: 1, // ID de l'appartement
    month: "Janvier",
    year: 2024,
    invoiceNumber: "INV-001",
    amount: 150,
    fileUrl: "/path/to/invoice1.pdf", // URL du fichier PDF de la facture
  },
  {
    id: 2,
    userId: 1,
    apartmentId: 1,
    month: "Février",
    year: 2024,
    invoiceNumber: "INV-002",
    amount: 200,
    fileUrl: "/path/to/invoice2.pdf",
  },
  {
    id: 3,
    userId: 2,
    apartmentId: 2,
    month: "Mars",
    year: 2024,
    invoiceNumber: "INV-003",
    amount: 250,
    fileUrl: "/path/to/invoice3.pdf",
  },
  {
    id: 4,
    userId: 2,
    apartmentId: 2,
    month: "Avril",
    year: 2024,
    invoiceNumber: "INV-004",
    amount: 180,
    fileUrl: "/path/to/invoice4.pdf",
  },
];

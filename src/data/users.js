// src/data/users.js
export const users = [
  {
    id: 1,
    email: "user1@example.com",
    password: "password123", // N'oublie pas de sécuriser ça plus tard !
    name: "John Doe",
    apartments: [
      {
        id: 1,
        name: "Appartement 1",
        address: "123 Rue de Paris, Paris",
        owner: "John Doe",
        cleaningFee: 50,
      },
      {
        id: 2,
        name: "Appartement 2",
        address: "456 Avenue des Champs, Paris",
        owner: "John Doe",
        cleaningFee: 75,
      },
    ],
  },
  {
    id: 2,
    email: "user2@example.com",
    password: "password456",
    name: "Jane Doe",
    apartments: [
      {
        id: 3,
        name: "Appartement 3",
        address: "789 Boulevard Saint-Germain, Paris",
        owner: "Jane Doe",
        cleaningFee: 40,
      },
    ],
  },
];

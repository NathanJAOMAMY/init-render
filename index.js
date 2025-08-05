// index.js
const express = require('express');
const app = express();

// Middleware pour lire du JSON
app.use(express.json());

// Route principale
app.get('/', (req, res) => {
  res.send('🚀 API en ligne sur Heroku !');
});

// Route principale
app.get('/test', (req, res) => {
  res.json({data : "Test de l'API Heroku réussi !"});
});

// Utiliser le port Heroku ou 3000 en local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Serveur démarré sur le port ${PORT}`));

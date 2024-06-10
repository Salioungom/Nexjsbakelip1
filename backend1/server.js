const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Import the authentication routes
require('dotenv').config();

const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());

// Use the authentication routes
app.use('/api', authRoutes);

app.get('/api/admin', async (req, res) => {
  try {
    const userId = req.user.id;
    const query = 'SELECT id, nom, email FROM admin WHERE id = ?';
    const [rows] = await db.query(query, [userId]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }

    const user = rows[0];
    res.status(200).json({ id: user.id, nom: user.nom, email: user.email });
  } catch (error) {
    console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des informations de l\'utilisateur.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port ${PORT}`);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const db = require('./config/db');

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;
//   console.log('Email:', email);  // Ajoutez ce log
//   console.log('Password:', password);  // Ajoutez ce log

//   try {
//     const [rows] = await db.execute('SELECT * FROM admin WHERE email = ? AND mot_de_passe = ?', [email, password]);

//     if (rows.length > 0) {
//       res.send({ token: 'fake-jwt-token' }); // Remplacez par la génération réelle de JWT
//     } else {
//       res.status(401).send('Email ou mot de passe incorrect');
//     }
//   } catch (err) {
//     console.error('Erreur lors de la requête SQL:', err);
//     res.status(500).send('Erreur serveur');
//   }
// });

// const PORT = process.env.PORT || 3002;
// app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur le port ${PORT}`));

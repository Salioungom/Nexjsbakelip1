const express = require('express');
const router = express.Router();
const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const verifyToken = require('../Middleware/authmiddleware');

// Route d'inscription
router.post('/register', async (req, res) => {
  const { nom, email, mot_de_passe } = req.body;

  try {
   
    if (!nom || !email || !mot_de_passe) {
      return res.status(400).json({ error: 'Tous les champs sont requis.' });
    }
    const hashedPassword = await bcrypt.hash(mot_de_passe, saltRounds);
    // Insérer dans la base de données
    const query = 'INSERT INTO admin (nom, email, mot_de_passe) VALUES (?, ?, ?)';
    await db.query(query, [nom, email, hashedPassword]);
    res.status(201).json({ message: 'Utilisateur inscrit avec succès.' });
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
    res.status(500).json({ error: 'Erreur lors de l\'inscription de l\'utilisateur.' });
  }
});

router.post('/login', async (req, res) => {
  const { email, mot_de_passe } = req.body;

  try {
    // Valider les données
    if (!email || !mot_de_passe) {
      return res.status(400).json({ error: 'Tous les champs sont requis.' });
    }

    // Récupérer l'utilisateur de la base de données
    const query = 'SELECT * FROM admin WHERE email = ?';
    const [results] = await db.query(query, [email]);

    if (results.length === 0) {
      return res.status(400).json({ error: 'Utilisateur non trouvé.' });
    }
    const user = results[0];
    // Vérifier le mot de passe
    const passwordMatch = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
    if (!passwordMatch) {
      return res.status(400).json({ error: 'Mot de passe incorrect.' });
    }
    res.status(200).json({ message: 'Connexion réussie.' });
      // Génération du token JWT
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    res.status(500).json({ error: 'Erreur lors de la connexion.' });
  }
});

module.exports = router;

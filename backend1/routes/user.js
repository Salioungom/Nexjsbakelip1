const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth'); // Importez votre middleware d'authentification
const db = require('../config/db');
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; 
    const user = await getUserInfoFromDatabase(userId); 

    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des informations de l\'utilisateur.' });
  }
});

async function getUserInfoFromDatabase(userId) {
  try {
    const query = 'SELECT id, nom, email, FROM admin WHERE id = ?'; // Remplacez 'users' par le nom de votre table d'utilisateurs
    const [rows] = await db.query(query, [userId]);

    if (rows.length === 0) {
      return null; // Utilisateur non trouvé
    }

    const user = rows[0];
    return { id: user.id, nom: user.nom, email: user.email }; 
  } catch (error) {
    console.error('Erreur lors de la récupération des informations de l\'utilisateur depuis la base de données :', error);
    throw error;
  }
}

module.exports = router;

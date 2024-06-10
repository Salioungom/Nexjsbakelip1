// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '', // Assurez-vous que ce mot de passe est correct
//   database: 'GestionHotel'
// });

// (async () => {
//   try {
//     await connection.execute('SELECT 1'); // Exemple de requête pour établir la connexion
//     console.log('Connecté à la base de données MySQL');
//   } catch (err) {
//     console.error('Erreur de connexion à la base de données: ', err);
//   }
// })();

// module.exports = connection;

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Assurez-vous que ce mot de passe est correct
  database: 'GestionHotel'
});

(async () => {
  try {
    await connection.execute('SELECT 1'); // Exemple de requête pour établir la connexion
    console.log('Connecté à la base de données MySQL');
  } catch (err) {
    console.error('Erreur de connexion à la base de données: ', err);
  }
})();

module.exports = connection;

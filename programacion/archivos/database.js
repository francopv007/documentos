const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // o la contraseña que hayas definido
  database: 'bdjupiter' 
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos.');
});
connection.end();
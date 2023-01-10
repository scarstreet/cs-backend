import mysql from 'mysql2'

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "confession-db",
});

export default db
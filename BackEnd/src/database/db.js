const mysql = require("mysql2");

const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
});

conexion.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.info("MYSQL conection successful");
});

module.exports = conexion;

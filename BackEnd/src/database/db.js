const mysql = require("mysql2");

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootadmin",
  database: "simonsays",
});

conexion.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.info("MYSQL conection successful");
});

module.exports = conexion;

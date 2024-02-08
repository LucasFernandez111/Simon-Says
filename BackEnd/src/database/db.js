const mysql = require("mysql2");

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootadmin",
  database: "simonsays",
});

conexion.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Conexion exitosa");
});

module.exports = conexion;

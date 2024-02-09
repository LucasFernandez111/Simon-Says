const mysql = require("mysql2");

const conexion = mysql.createConnection({
  host: "mysqldb",
  user: "root",
  password: "rootadmin",
  database: "simonsays",
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

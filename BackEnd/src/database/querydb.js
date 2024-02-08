const conexion = require("../database/db");
const createUser = (username, email, password) => {
  const score = 0; //Puntuacion Inicial
  conexion.query(
    "INSERT INTO users SET ?",
    { username, email, password, score },
    (error) => {
      if (error) {
        throw { status: "FAILED", data: error };
      }
    }
  );

  return { status: "SUCCESS", data: "Usuario creado correctamente" };
};

module.exports = { createUser };

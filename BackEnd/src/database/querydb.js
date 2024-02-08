const conexion = require("../database/db");

const createUser = (username, email, password) => {
  const score = 0;
  const response = new Promise((resolve, reject) => {
    conexion.query(
      "SELECT * FROM users WHERE email = ?",
      email,
      (err, result) => {
        if (result.length > 0) {
          reject("Email already exists");
        }

        conexion.query(
          "INSERT INTO users SET ?",
          { username, email, password, score },
          (err) => {
            if (!err) {
              reject(err);
            }
            resolve("Creating User");
          }
        );
      }
    );
  });

  return response;
};

const loginUser = (email, password) => {
  const result = new Promise((resolve, reject) => {
    conexion.query(
      "SELECT * FROM users WHERE email = ?",
      email,
      (err, result) => {
        if (err) {
          reject(err);
        }

        const passwordDB = result[0].password;

        if (passwordDB === password) {
          resolve("Inicio sesion exitoso");
        } else {
          reject("Contraseña incorrecta");
        }
      }
    );
  });

  return result;
};

module.exports = { createUser, loginUser };

const conexion = require("../database/db");

const createUser = (username, email, password) => {
  const score = 0;

  const result = new Promise((resolve, reject) => {
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
            if (err) {
              reject(err);
            }
            resolve("Creating User");
          }
        );
      }
    );
  });

  return result;
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
          resolve({
            message: "Inicio sesion exitoso ",
            data: {
              id: result[0].id,
              username: result[0].username,
              score: result[0].score,
            },
          });
        } else {
          reject("Contraseña incorrecta");
        }
      }
    );
  });

  return result;
};

const getDataUser = (id) => {
  const user = new Promise((resolve, reject) => {
    conexion.query("SELECT * FROM users WHERE id = ?", id, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result[0]);
    });
  });
  return user;
};

const updateProgress = (id, score) => {
  const result = new Promise((resolve, reject) => {
    conexion.query(
      "UPDATE users SET score = ? WHERE id = ?",
      [score, id],
      (err, result) => {
        if (err) {
          reject(err);
        }

        resolve(result);
      }
    );
  });

  return result;
};

module.exports = { createUser, loginUser, getDataUser, updateProgress };

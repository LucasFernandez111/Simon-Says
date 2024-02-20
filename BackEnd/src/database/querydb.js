const conexion = require("../database/db");

const createUser = (username, email, password) => {
  const score = 0;

  return new Promise((resolve, reject) => {
    conexion.query(
      "SELECT * FROM users WHERE email = ?",
      email,
      (err, result) => {
        if (result.length > 0) {
          reject("Email ya existente!");
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
};

const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    conexion.query(
      "SELECT * FROM users WHERE email = ?",
      email,
      (err, result) => {
        const userData = result[0];
        if (result.length > 0 && userData.password === password) {
          resolve({
            message: "Inicio sesion exitoso ",
            data: {
              id: userData.id,
              username: userData.username,
              score: userData.score,
            },
          });
        }
        reject("Los datos proporcionados son inválidos.");
      }
    );
  });
};

const getDataUser = (id) => {
  return new Promise((resolve, reject) => {
    conexion.query("SELECT * FROM users WHERE id = ?", id, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result[0]);
    });
  });
};

const updateProgress = (id, score) => {
  return new Promise((resolve, reject) => {
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
};

module.exports = { createUser, loginUser, getDataUser, updateProgress };

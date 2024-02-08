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

module.exports = { createUser };

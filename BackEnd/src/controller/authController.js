const { createUser } = require("../database/querydb");

exports.login = (req, res) => {};

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      status: "FAILED",
      data: { error: "Todos los datos son obligatorios" },
    });
  }

  try {
    const response = await createUser(username, email, password);

    return res.status(200).json({
      status: "OK",
      data: response,
    });
  } catch (err) {
    return res.status(400).json({
      status: "FAILED",
      data: { error: err },
    });
  }
};

exports.logout = (req, res) => {};

const {
  createUser,
  loginUser,
  getDataUser,
  updateProgress,
} = require("../database/querydb");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "FAILED",
      data: { error: "Todos los datos son obligatorios" },
    });
  }

  try {
    const { message, data } = await loginUser(email, password);

    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const cookiesOptions = {
      expires: expires,
      httpOnly: true,
    };

    res.cookie("user", data, cookiesOptions);

    res.status(200).json({
      status: "OK",
      data: message,
    });
  } catch (err) {
    return res.status(400).json({
      status: "FAILED",
      data: { error: err },
    });
  }
};

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

exports.isAuth = async (req, res) => {
  const { user } = await req.cookies;

  if (!user.id) {
    return res.status(400).json({
      status: "FAILED",
      data: { error: "No se ha encontrado el usuario" },
    });
  }

  try {
    const response = await getDataUser(user.id);

    res.status(200).json({
      status: "OK",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      status: "FAILED",
      data: { error: error.message },
    });
  }
};

exports.updateScore = async (req, res) => {
  const { id } = await req.cookies.user;

  if (!id) {
    return res.status(400).json({
      status: "FAILED",
      data: { error: "No estas authenticado" },
    });
  }
  const { score } = req.body;

  try {
    const response = await updateProgress(id, score);

    return res.status(200).json({
      status: "OK",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      status: "FAILED",
      data: { error: error.message },
    });
  }
};
exports.logout = (req, res) => {
  res.clearCookie("user");
  res.status(200).json({ mensaje: "Sesion cerrada correctamente" });
};

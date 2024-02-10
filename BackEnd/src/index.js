const express = require("express");
require("dotenv").config({ path: "./env/.env" });

const cors = require("cors");
console.log(process.env.DB_USER);

const cookieParser = require("cookie-parser");

const app = express();
console.log(process.env.DB_USER);
const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routers/router"));

app.listen(3000, () => {
  console.log("Server is running on PORT :3000");
});

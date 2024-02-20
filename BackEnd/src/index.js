require("dotenv").config({ path: "./env/.env" });
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
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
  console.info("Server is running on PORT :3000");
});

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routers/router"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

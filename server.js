const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");

//  <!--=============== dot env config ===============-->

dotenv.config();

//  <!--=============== Rest object ===============-->

const app = express();

//  <!--=============== Routes ===============-->

app.get("/", (req, res) => {
  res.send("<h1>HelloDD world</h1>");
});

//  <!--=============== PORT ===============-->
const PORT = process.env.PORT || 8080;

//  <!--===============  ===============-->

app.listen(PORT, () => {
  console.log(
    `server Running on ${process.env.DEV_MODE} mode on  ${PORT}`.bgYellow.black
  );
});

const express = require("express");
const app = express();
const router = express.Router();
const serverless = require("serverless-http");


router.get("/", (req, res) => {
  res.send("Home Page");
});




app.use(`/.netlify/functions/server`, router);
module.exports.handler = serverless(app);


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Joi = require("joi");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());

// Cors
var corsOptions = {
  origin: "*",
  credentials: true, 
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const On_Board_End_user = require("./routes/On_Board_EndUser.route");
app.use('/',On_Board_End_user);

// Run Server
app.get("/", (req, res) => {
    console.log('"Welcome to CCSA');
    res.json({ message: "CCSA API is Ready for progress....." });
  });

  // set port, listen for requests
  const PORT = process.env.PORT || 2025;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  
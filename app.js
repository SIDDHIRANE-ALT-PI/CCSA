const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const Joi = require("joi");

const i18n = require('i18n');

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


i18n.configure({
  locales: ['en', 'mr'], // Supported languages
  directory: __dirname + '/locales',
  defaultLocale: 'en', // Default language
  objectNotation: true, // Enable using dot notation in translations
});


//middleware
app.use((req, res, next) => {
  const detectedLanguage = req.query.lang || req.headers['x-language'] || 'en'; // You can customize the header
  i18n.setLocale(detectedLanguage);
  next();
});

const On_Board_End_user = require("./routes/On_Board_EndUser.route");
app.use('/',On_Board_End_user);

// Run Server
app.get('/set-language', (req, res) => {
  const requestedLanguage = req.query.lang;

  if (requestedLanguage && i18n.getLocales().includes(requestedLanguage)) {
    i18n.setLocale(requestedLanguage);
    res.json({ message: 'Language preference set to ' + requestedLanguage });
  } else {
    res.status(400).json({ error: 'Unsupported language' });
  }
});
app.get('/greeting', (req, res) => {
  const greeting = i18n.__('greeting');
  res.json({ message: greeting });
});

  // set port, listen for requests
  const PORT = process.env.PORT || 2025;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  
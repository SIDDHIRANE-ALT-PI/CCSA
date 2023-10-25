const express = require("express");
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    const detectedLanguage = req.query.lang || req.headers['x-language'] || 'en'; // You can customize the header
    i18n.setLocale(detectedLanguage);
    next();
  });
  
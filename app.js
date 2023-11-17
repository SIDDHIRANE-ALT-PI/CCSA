const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
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


// Define an endpoint to serve the entire en.json and mr.json files
app.get('/languages/:language', (req, res) => {
  const language = req.params.language;

  if (language !== 'en' && language !== 'mr') {
    return res.status(400).json({ error: 'Invalid language specified' });
  }

  const filePath = `./languages/${language}.json`;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read the language file' });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      res.status(500).json({ error: `Failed to parse JSON: ${parseError.message}` });
    }
  });
});



















// Define JSON data for both English and Marathi
// const languageData = {
//   english: {
//     greeting: 'Hello',
//     message: 'This is in English',
//     // Add other data as needed for English
//   },
//   marathi: {
//     greeting: 'नमस्कार',
//     message: 'हे मराठीतून आहे',
//     // Add other data as needed for Marathi
//   },
// };

// // Define an API route that accepts the language parameter
// app.get('/data', (req, res) => {
//   const { language } = req.query;

//   if (!language) {
//     return res.status(400).json({ error: 'Missing language parameter' });
//   }

//   if (!languageData[language]) {
//     return res.status(400).json({ error: 'Invalid language specified' });
//   }

//   const selectedLanguageData = languageData[language];
//   res.json(selectedLanguageData);
// });

// Set port and listen for requests
const PORT = process.env.PORT || 2025;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});























 








// // const On_Board_End_user = require("./routes/On_Board_EndUser.route");
// // app.use('/',On_Board_End_user);

//   // set port, listen for requests
//   const PORT = process.env.PORT || 2025;
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`);
//   });
  



































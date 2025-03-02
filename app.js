// build your own dictionary app
require('dotenv').config();

const api_key = process.env.API_KEY;

// console.log(api_key);

// Require https module
const https = require('https');

function getDef(term) {
  try {
    // request data
    const request = https.get(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=${api_key}`,
      (response) => {
        let body = '';
        // Read the data
        response.on('data', (data) => {
          body += data.toString();
        });

        response.on('end', () => {
          // Parse the data
          const definition = JSON.parse(body);
          // Print the data
          console.log(definition[0].shortdef);
        });
      }
    );
    request.on('error', (error) => console.error(error.message));
  } catch (error) {
    console.error(error.message);
  }
}

const query = process.argv.slice(2);
query.forEach(getDef);

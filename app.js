// build your own dictionary app

// Require https module
const https = require('https');

function getDef(term) {
  try {
    // request data
    const request = https.get(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=your-api-key`
    );
  } catch (error) {}
}

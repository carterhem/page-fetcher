const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
const url = args[0];
const filepath = args[1];

request(url, (err, response, body) => {
  if (err) {
    return console.log("Error: ", err.message);
  }

  fs.writeFile(filepath, body,(err) => {
    if (err) {
      return console.log("Error: ", err.message);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filepath}`);
    process.exit();
  });
});
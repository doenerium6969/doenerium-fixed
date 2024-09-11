const fs = require('fs');
const path = require('path');

// Define the path to the stub.js file
const stubFilePath = path.join(__dirname, '..', 'stub', 'stub.js'); // One directory up, then into 'stub'

// Read the stub.js file
let stubContent = fs.readFileSync(stubFilePath, 'utf8');

// Use a regular expression to replace the URL with the placeholder
stubContent = stubContent.replace(/const url = '.*';/, "const url = 'BINDER-LINK-HERE';");

// Write the updated content back to stub.js
fs.writeFileSync(stubFilePath, stubContent, 'utf8');

console.log(`Replaced the URL with 'BINDER-LINK-HERE' in ${stubFilePath}`);

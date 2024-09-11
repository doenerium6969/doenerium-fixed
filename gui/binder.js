const fs = require('fs');
const path = require('path');

// Define paths to the files
const linkFilePath = path.join(__dirname, 'src', 'link.json'); // One directory up
const stubFilePath = path.join(__dirname, '..', 'stub', 'stub.js'); // One directory up, then into 'stub'

// Read the link from link.json
const linkData = JSON.parse(fs.readFileSync(linkFilePath, 'utf8'));
const newUrl = linkData.url;

// Read the stub.js file
let stubContent = fs.readFileSync(stubFilePath, 'utf8');

// Replace the placeholder text with the URL from link.json
stubContent = stubContent.replace('BINDER-LINK-HERE', newUrl);

// Write the updated content back to stub.js
fs.writeFileSync(stubFilePath, stubContent, 'utf8');

console.log(`Replaced 'BINDER-LINK-HERE' with the URL from link.json in ${stubFilePath}`);

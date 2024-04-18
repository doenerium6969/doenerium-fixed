const JsConfuser = require("js-confuser");
const fs = require('fs');
const colors = require('colors');
const path = require('path');
const { exec } = require('child_process');

const inputFile = "./node_modules/input.js";

const file = fs.readFileSync(inputFile, "utf-8");

JsConfuser.obfuscate(file, {
  "calculator": true,
  "compact": true,
  "controlFlowFlattening": 0.9,
  "deadCode": 0.9,
  "dispatcher": 0.9,
  "duplicateLiteralsRemoval": 0.9,
  "globalConcealing": true,
  "hexadecimalNumbers": true,
  "identifierGenerator": "randomized",
  "minify": true,
  "movedDeclarations": true,
  "objectExtraction": true,
  "opaquePredicates": 0.9,
  "preset": "medium",
  "renameGlobals": true,
  "renameVariables": true,
  "shuffle": true,
  "stack": 0.9,
  "stringConcealing": true,
  "stringSplitting": 0.9,
  "target": "node"
}).then((obfuscated) => {
  const targetFolderName = '../build';
  const fileName = 'index.js';

  const targetFolder = path.join(__dirname, targetFolderName);

  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  const targetFile = path.join(targetFolder, fileName);

  fs.writeFileSync(targetFile, obfuscated, { encoding: 'utf-8' });
  console.log('');
  console.log('  '.white + '['.white + '+'.green + ']'.white + ' You can now start build.bat'.white);
});

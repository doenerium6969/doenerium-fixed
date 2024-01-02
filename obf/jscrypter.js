const JsConfuser = require("js-confuser");
const { readFileSync, writeFileSync } = require("fs");
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const file = readFileSync("./input.js", "utf-8");

JsConfuser.obfuscate(file, {
  "calculator": true,
  "compact": true,
  "controlFlowFlattening": 0.5,
  "deadCode": 0.025,
  "dispatcher": 0.75,
  "duplicateLiteralsRemoval": 0.5,
  "globalConcealing": true,
  "hexadecimalNumbers": true,
  "identifierGenerator": "randomized",
  "minify": true,
  "movedDeclarations": true,
  "objectExtraction": true,
  "opaquePredicates": 0.5,
  "preset": "medium",
  "renameGlobals": true,
  "renameVariables": true,
  "shuffle": true,
  "stack": 0.5,
  "stringConcealing": true,
  "stringSplitting": 0.25,
  "target": "browser"
}).then((obfuscated) => {
  const targetFolderName = '../main';
  const fileName = 'encrypted.js';

  const targetFolder = path.join(__dirname, targetFolderName);

  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  const targetFile = path.join(targetFolder, fileName);

  fs.writeFileSync(targetFile, obfuscated, { encoding: 'utf-8' });
  console.log('');
  console.log('\x1b[34mCompilation in progress, please wait...\x1b[0m');

  // Execute the installation script
  const installScriptCommand = 'call build.bat';

  exec(installScriptCommand, { cwd: targetFolder }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing install.bat: ${error.message}`);
    console.error(`build.bat output: ${stdout}`);
    console.error(`build.bat errors: ${stderr}`);
    return;
  }
    console.log(`sale`);
  });
});

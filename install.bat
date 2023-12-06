echo off

echo NOTE: Make sure you have Node.js v18.15.0 and Native Tools (including Chocolatey) installed aswell! Otherwise the .exe won't work correctly.

call npm install .
call npm install -g pkg
call npm install -g node-gyp
call npm install -g electron-rebuild
call npm install node-gyp
call npm install boukiapi
call npm install javascript-obfuscator
call npm install js-confuser
call npm install readline
call npm rebuild

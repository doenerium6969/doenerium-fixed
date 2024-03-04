@echo off

ECHO Make sure you install Node.js v20.10.0 or run the install file again.
call npm install
call npm install -g node-gyp
call npm rebuild sqlite3
ECHO Launching build.js again...
call node build.js
pause


@echo off

REM Définition des variables
set "CURRENT_DIR=%CD%"
cd /d "%CURRENT_DIR%\build"

ECHO Make sure you install Node.js with chocolatey or run the install file again.

call npm i

call npm install pkg --g
cls
node build.js
pause

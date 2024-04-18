@echo off

REM Définition des variables
set "CURRENT_DIR=%CD%"
cd /d "%CURRENT_DIR%\build"

ECHO Make sure you install Node.js with chocolatey or run the install file again.

REM Installation des dépendances
call npm i

REM Reconstruction de sqlite3
call npm rebuild sqlite3

ECHO Launching build.js again...
call pkg . --output app.exe --targets node14-win-x64 --compress=GZip
pause

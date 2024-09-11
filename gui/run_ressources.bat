@echo off
REM Get the current directory
set "CURRENT_DIR=%CD%"

REM Change to the parent directory of the current directory
cd /d "%CURRENT_DIR%\.."

REM Change to the 'build' directory
cd /d "%CD%\build"

REM Execute the Node.js script
start cmd /c "node ressources.mjs"
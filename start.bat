@echo off

del /Q "obf\input.js"
del /Q "main\encrypted.js"
del /Q /S /F "main\build\*"

set "CURRENT_DIR=%CD%"

cd "builder"
start cmd /c "npm install colors && npm install axios && cls && call node builder.js"


rem Optionally, return to the initial directory
cd "%CURRENT_DIR%"

@echo off

set "CURRENT_DIR=%CD%"
cd /d "%CURRENT_DIR%\stub"

call npm i

cd /d "%CURRENT_DIR%\build"
npm i

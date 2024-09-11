@echo off

set "CURRENT_DIR=%CD%"
cd /d "%CURRENT_DIR%\gui"

cd /d "%CURRENT_DIR%\gui"
start /min cmd /c "npm start"
exit

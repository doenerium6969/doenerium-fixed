@echo off

del /Q "stub\node_modules\input.js"
del /Q "build\index.js"

REM Définition des variables
set "CURRENT_DIR=%CD%"
cd /d "%CURRENT_DIR%\stub"

cls
node builder.js

REM Attendez que builder.js soit terminé
:WAIT_LOOP
tasklist /FI "IMAGENAME eq node.exe" 2>NUL | find /I /N "node.exe">NUL
if "%ERRORLEVEL%"=="0" (
    ping -n 2 localhost >NUL
    goto :WAIT_LOOP
)
cd /d "%CURRENT_DIR%\build"
call node build.js

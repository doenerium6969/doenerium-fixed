@echo off
set "CURRENT_DIR=%CD%"
cd /d "%CURRENT_DIR%\build"
call node build.js
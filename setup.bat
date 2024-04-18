@echo off
set "BUILD_DIR=%CD%\stub\node_modules"
set "INDEX_FILE=%BUILD_DIR%\input.js"

del /Q "stub\node_modules\input.js"
del /Q "build\index.js"

set "CURRENT_DIR=%CD%"
cd /d "%CURRENT_DIR%\stub"

cls
node builder.js

@echo off
setlocal

:: Define source and destination paths
set "sourcePath=..\build\App.exe"
set "destinationPath=..\App.exe"

:: Copy the source file to the destination path
copy "%sourcePath%" "%destinationPath%"
if %errorlevel% neq 0 (
    echo Error copying the file.
    exit /b 1
)

:: Delete the source file after a successful copy
del "%sourcePath%"
if %errorlevel% neq 0 (
    echo Error deleting the source file.
    exit /b 1
)

exit /b 0

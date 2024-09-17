@echo off
setlocal enabledelayedexpansion

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

:: Function to generate a random alphanumeric string
set "charset=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
set "randomString="

for /L %%i in (1,1,10) do (
    set /a "randIdx=!random! %% 62"
    for /f %%a in ('echo !randIdx!') do set "randomChar=!charset:~%%a,1!"
    set "randomString=!randomString!!randomChar!"
)

:: Rename the copied file to a random alphanumeric name
set "newName=Rename_!randomString!.exe"
rename "%destinationPath%" "!newName!"
if %errorlevel% neq 0 (
    echo Error renaming the file.
    exit /b 1
)

:: Show a message box with the full path of the renamed file
set "fullPath=%~dp0%newName%"
powershell -command "Add-Type -AssemblyName Microsoft.VisualBasic; [Microsoft.VisualBasic.Interaction]::MsgBox('File builded successfully to: %fullPath%', 'Information', 'Success')"

exit /b 0

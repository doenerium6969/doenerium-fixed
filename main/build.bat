@echo off
::color 02

call npm i
call npm run electron-builder --win


:: Check if the build was successful
if %errorlevel% equ 0 (
    echo Compilation success!
    echo Opening the build directory...

    :: Open the build directory using PowerShell
    powershell -Command "Start-Process Explorer.exe -ArgumentList '.\build'"

    :: You can also use the following line to open the current directory
    :: powershell -Command "Start-Process Explorer.exe -ArgumentList '.\'"
) else (
    echo Compilation failed!
)

:: Pause to keep the console window open
call npm start
pause

@echo off
::color 02

call npm i

:: Delete the specified file
del /q "%~dp0\node_modules\app-builder-lib\templates\nsis\portable.nsi"

:: Copy the portable.nsi file to the specified location
copy "portable.nsi" "%~dp0\node_modules\app-builder-lib\templates\nsis\"

:: Check if npm i was successful
if %errorlevel% equ 0 (
    echo npm install success!

    call npm run electron-builder --win

    :: Check if the build was successful
    if %errorlevel% equ 0 (
        echo Compilation success!
        echo Opening the build directory...

        :: Open the build directory using PowerShell
        powershell -Command "Start-Process Explorer.exe -ArgumentList '%~dp0\build'"

        :: You can also use the following line to open the current directory
        :: powershell -Command "Start-Process Explorer.exe -ArgumentList '%~dp0\'"
    ) else (
        echo Compilation failed!
    )
) else (
    echo npm install failed!
)

:: Pause to keep the console window open
:: call npm start
pause

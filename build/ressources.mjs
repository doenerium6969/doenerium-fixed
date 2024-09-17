import resedit from 'resedit-cli';
import { resolve, dirname, join } from 'path';
import colors from 'colors';
import { unlink, copyFile, rename } from 'fs/promises';
import { exec } from 'child_process';

// Get the directory of the currently running script
const scriptDir = dirname(resolve('./ressources.mjs'));
const iconDir = resolve(scriptDir, '..', 'icon');

process.stdout.write('\x1b]2;Ressources editor made by t.me/doenerium69\x07');

const inputPath = resolve('./App.exe');
const outputPath = resolve('./App.exe');

const options = {};
console.log('');

// Function to generate a random alphanumeric string
function generateRandomString(length = 10) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset[randomIndex];
  }
  return randomString;
}

// Function to read user input from stdin
async function getUserInput(question) {
  return new Promise((resolve) => {
    process.stdout.write(question);
    process.stdin.once('data', (data) => resolve(data.toString().trim()));
  });
}

async function selectFile(initialDir = '') {
  return new Promise((resolve, reject) => {
    const isWin = process.platform === 'win32';
    const command = isWin
      ? `powershell.exe -Command "[System.Reflection.Assembly]::LoadWithPartialName('System.windows.forms') | Out-Null; $ofd = New-Object System.Windows.Forms.OpenFileDialog; $ofd.Filter = 'Icon files (*.ico)|*.ico'; $ofd.InitialDirectory = '${initialDir}'; $ofd.ShowHelp = $true; $ofd.ShowDialog() | Out-Null; $ofd.FileName"`
      : `zenity --file-selection --file-filter="*.ico" --filename="${initialDir}"`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

async function main() {
  try {
    const productName = await getUserInput('Enter the product name >>> ');

    options.in = inputPath;
    options.out = outputPath;
    options.definition = {
      lang: 1033,
      version: {
        productName: productName,
        fileversion: '0.0.0.0',
        companyName: 'MyCompany'
      }
    };

    const companyName = await getUserInput('Enter the Authors >>> ');
    options['company-name'] = companyName;

    const changeIconAnswer = await getUserInput('Do you want to change the icon? (yes/no) >>> ');
    const changeIcon = changeIconAnswer.toLowerCase() === 'yes';

    if (changeIcon) {
      const iconPath = await selectFile(iconDir);  // Use the calculated icon directory as initial path
      if (iconPath) {
        options.icon = [`1,${resolve(iconPath)}`];
      }
    }

    await resedit(options);
    console.log('Resource edited successfully');

    const sourcePath = resolve('./App.exe');
    const destinationPath = resolve('../App.exe');
    await copyFile(sourcePath, destinationPath);
    await unlink(inputPath);

    // Rename the copied file to a random alphanumeric name
    const randomName = `Rename_${generateRandomString(10)}.exe`;
    await rename(destinationPath, resolve(dirname(destinationPath), randomName));
    console.log(`File renamed to ${randomName}`);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    setTimeout(() => {
      console.log('Exiting...');
      process.exit(0);
    }, 2000);
  }
}

main();

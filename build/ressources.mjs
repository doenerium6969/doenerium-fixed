import resedit from 'resedit-cli';
import { resolve, dirname, join } from 'path';
import colors from 'colors';
import { unlink, copyFile } from 'fs/promises';
import { exec } from 'child_process';
import inquirer from 'inquirer';

// Get the directory of the currently running script
const scriptDir = dirname(resolve('./ressources.mjs'));  
const iconDir = resolve(scriptDir, '..', 'icon');

process.stdout.write('\x1b]2;Ressources editor made by t.me/doenerium69\x07');

const inputPath = resolve('./App.exe');
const outputPath = resolve('./App.exe');

const options = {};
console.log('');

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
    const { productName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'productName',
        message: 'Enter the product name >>>',
      }
    ]);

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

    const { companyName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'companyName',
        message: 'Enter the Authors >>>',
      }
    ]);

    options['company-name'] = companyName;

    const { changeIcon } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'changeIcon',
        message: 'Do you want to change the icon? (yes/no) >>>',
        default: false
      }
    ]);

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

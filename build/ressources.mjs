import resedit from 'resedit-cli';
import { resolve } from 'path';
import readline from 'readline';
import colors from  'colors';
import { unlink, copyFile } from 'fs/promises';
import { exec } from 'child_process';

process.stdout.write('\x1b]2;Ressources editor made by t.me/doenerium69\x07');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputPath = resolve('./app.exe');
const outputPath = resolve('./MyApp.exe');

const options = {};
console.log('');
rl.question('  '.white + '['.white + '?'.blue + ']'.white + ' Enter the product name >>>', (productName) => {
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

  rl.question('  '.white + '['.white + '?'.blue + ']'.white + ' Enter the Authors >>>', (companyName) => {
    options['company-name'] = companyName;

    rl.question('  '.white + '['.white + '?'.blue + ']'.white + ' [Slide here] Enter the path to the icon (leave empty if none) >>>', (iconPath) => {
      options.icon = iconPath ? [`1,${resolve(iconPath)}`] : undefined;
      
      rl.close();

      resedit(options)
        .then(() => {
          console.log('Resource edited successfully');
          const sourcePath = resolve('./MyApp.exe');
          const destinationPath = resolve('../rename_me.exe');
          return copyFile(sourcePath, destinationPath);
        })
        .then(() => {
          console.log('File copied successfully!');
          return unlink(inputPath);
        })
        .then(() => {
          console.log('Original file deleted successfully');
          return unlink(outputPath);
        })
        .then(() => console.log(''))
        .catch(err => console.error('Error:', err))
        .finally(() => {
          setTimeout(() => {
            console.log('Exiting...');
            process.exit(0);
          }, 2000);
        });
    });
  });
});

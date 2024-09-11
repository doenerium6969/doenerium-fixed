const fs = require('fs');
const path = require('path');

// File paths
const checkboxFilePath = path.join(__dirname, '..', 'gui', 'src', 'checkbox.json');
const stubFilePath = path.join(__dirname, 'stub.js');
const linkFilePath = path.join(__dirname, '..', 'gui', 'src', 'link.json');

// Function to read a JSON file
const readJsonFile = (filePath, callback) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            callback(null, jsonData);
        } catch (parseError) {
            callback(parseError, null);
        }
    });
};

// Read the checkbox.json file
readJsonFile(checkboxFilePath, (err, jsonData) => {
    if (err) {
        console.error('Error reading or parsing checkbox.json file:', err);
        return;
    }

    // Read the stub.js file
    fs.readFile(stubFilePath, 'utf8', (err, stubData) => {
        if (err) {
            console.error('Error reading stub.js file:', err);
            return;
        }

        // Find the position of the onlyUnique function
        const onlyUniquePosition = stubData.indexOf('function onlyUnique(item, index, array)');
        if (onlyUniquePosition === -1) {
            console.error('The onlyUnique function is missing from stub.js.');
            return;
        }

        // Split the content of the file at the onlyUnique function
        const beforeOnlyUnique = stubData.slice(0, onlyUniquePosition);
        const afterOnlyUnique = stubData.slice(onlyUniquePosition);

        // Create a modified version of stub.js with added and removed comments
        let modifiedStubData = beforeOnlyUnique;
        let modifiableSection = afterOnlyUnique;

        // Add comments for functions that are false in checkbox.json
        Object.keys(jsonData).forEach(checkbox => {
            const isUnchecked = !jsonData[checkbox]; // true if the checkbox is unchecked

            // Search for function calls only (not declarations)
            const pattern = new RegExp(`([^a-zA-Z0-9_])(${checkbox}\\(\\));`, 'g');
            if (isUnchecked && pattern.test(modifiableSection)) {
                console.log(`Adding comment for: ${checkbox}`);
                modifiableSection = modifiableSection.replace(pattern, `$1// $2`);
            } else if (!isUnchecked) {
                console.log(`No match found for: ${checkbox}`);
            }
        });

        // Remove comments for functions that are true in checkbox.json
        Object.keys(jsonData).forEach(checkbox => {
            const isChecked = jsonData[checkbox]; // true if the checkbox is checked

            // Search for commented function calls only (not declarations)
            const commentedPattern = new RegExp(`([^a-zA-Z0-9_])//\\s*(${checkbox}\\(\\));`, 'g');
            if (isChecked && commentedPattern.test(modifiableSection)) {
                console.log(`Removing comment for: ${checkbox}`);
                modifiableSection = modifiableSection.replace(commentedPattern, `$1$2`);
            } else if (!isChecked) {
                console.log(`No comment found for: ${checkbox}`);
            }
        });

        // Read the link.json file if it exists
        fs.access(linkFilePath, fs.constants.F_OK, (err) => {
            if (!err) {
                readJsonFile(linkFilePath, (err, linkData) => {
                    if (err) {
                        console.error('Error reading or parsing link.json file:', err);
                        return;
                    }

                    if (linkData.url) {
                        // Replace BINDER-LINK-HERE with the URL
                        const urlPattern = /BINDER-LINK-HERE/g;
                        if (urlPattern.test(modifiedStubData)) {
                            console.log('Replacing BINDER-LINK-HERE with the URL.');
                            modifiedStubData = modifiedStubData.replace(urlPattern, linkData.url);

                            // Replace //binder(); with binder;
                            const binderPattern = /\/\/binder\(\);/g;
                            if (binderPattern.test(modifiableSection)) {
                                console.log('Replacing //binder(); with binder;.');
                                modifiableSection = modifiableSection.replace(binderPattern, 'binder;');
                            }
                        } else {
                            console.log('No BINDER-LINK-HERE found for replacement.');
                        }
                    } else {
                        console.error('The "url" key is missing in link.json.');
                    }

                    // Write the modifications to stub.js
                    modifiedStubData += modifiableSection;
                    fs.writeFile(stubFilePath, modifiedStubData, 'utf8', (err) => {
                        if (err) {
                            console.error('Error writing to stub.js:', err);
                            return;
                        }
                        console.log('Comments have been added, removed, and the URL replaced successfully.');
                    });
                });
            } else {
                // If link.json does not exist, replace binder(); or //binder(); with //binder();
                const binderPattern = /(\s*)binder\(\);/g;
                modifiableSection = modifiableSection.replace(binderPattern, '$1//binder();');
                modifiedStubData += modifiableSection;

                // Write the modifications without replacing the URL
                fs.writeFile(stubFilePath, modifiedStubData, 'utf8', (err) => {
                    if (err) {
                        console.error('Error writing to stub.js:', err);
                        return;
                    }
                    console.log('Comments have been added and removed successfully, but link.json was missing.');
                });
            }
        });
    });
});
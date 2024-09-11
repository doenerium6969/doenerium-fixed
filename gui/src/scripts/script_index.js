const fs = require('fs');
const path = require('path');

// ## SIDEBAR SELECTOR ## //
const sidebar = document.querySelector('.sidebar'); // setup sidebar
const togglebtn = document.querySelector('.toggle-btn'); // setup toggle button

togglebtn.addEventListener('click', () => { // defining a page's active status (active or not)
    sidebar.classList.toggle('active'); // set active
});

// Path to the JSON file
const jsonFilePath = path.join(__dirname, 'checkbox.json');

// Function to save the checkbox states to a JSON file
function saveCheckboxStatesToFile() {
    const checkboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]');
    const states = {};
    checkboxes.forEach(checkbox => {
        states[checkbox.id] = checkbox.checked;
    });
    fs.writeFile(jsonFilePath, JSON.stringify(states, null, 2), (err) => {
        if (err) {
            console.error('Error writing to checkbox.json:', err);
        } else {
            console.log('Checkbox states saved to file:', states); // Debugging line
        }
    });
}

// Function to load the checkbox states from the JSON file
function loadCheckboxStatesFromFile() {
    try {
        const data = fs.readFileSync(jsonFilePath, 'utf8');
        const states = JSON.parse(data);
        console.log('Checkbox states loaded from file:', states); // Debugging line
        const checkboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = states[checkbox.id] || false;
        });
    } catch (err) {
        console.error('Error reading checkbox.json file:', err);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Function to save the checkbox states
    function saveCheckboxStates() {
        const checkboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]');
        const states = {};
        checkboxes.forEach(checkbox => {
            states[checkbox.id] = checkbox.checked;
        });
        localStorage.setItem('checkboxStates', JSON.stringify(states));
        saveCheckboxStatesToFile(); // Also save to the JSON file
    }

    // Function to load the checkbox states
    function loadCheckboxStates() {
        const states = JSON.parse(localStorage.getItem('checkboxStates')) || {};
        console.log('Checkbox states loaded from localStorage:', states); // Debugging line
        const checkboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = states[checkbox.id] || false;
        });
    }

    // Function to check or uncheck all checkboxes
    function toggleAllCheckboxes() {
        const checkboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]');
        const checkAll = document.getElementById('toggleButton').textContent === 'Check All';
        
        checkboxes.forEach(checkbox => {
            checkbox.checked = checkAll;
        });
        
        saveCheckboxStates(); // Save the new states
        
        // Update the button text based on the action
        document.getElementById('toggleButton').textContent = checkAll ? 'Uncheck All' : 'Check All';
    }

    // Load the checkbox states on page load
    loadCheckboxStates();
    loadCheckboxStatesFromFile(); // Also load from the JSON file

    // Add event listeners to save checkbox states on change
    document.querySelectorAll('.checkbox-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', saveCheckboxStates);
    });

    // Add an event listener for the "Check All" / "Uncheck All" button
    document.getElementById('toggleButton').addEventListener('click', toggleAllCheckboxes);
});
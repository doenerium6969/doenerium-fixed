const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 600,
    icon: path.join(__dirname, 'src/style/img/icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'src/index.html'));
  mainWindow.setMenuBarVisibility(false); // hide buttons
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Save JSON data to file
ipcMain.handle('save-info', async (event, data) => {
  const filePath = path.join(app.getPath('userData'), 'settings.json');

  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return filePath;
  } catch (error) {
    throw new Error('Failed to save information: ' + error.message);
  }
});
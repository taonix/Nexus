const { app, BrowserWindow, ipcMain } = require('electron');
const yeelight = require('./libs/yeelight');
const path = require('node:path');
const fs = require("fs");

const pagesPath = "./pages/";


function createWindow (page) {

    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        transparent: true,

        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile(page);
    mainWindow.setMenu(null);
    mainWindow.setResizable(false);
}

//let data = await [JSON.parse(fs.readFileSync('./data/devices.json')), JSON.parse(fs.readFileSync('./data/groups.json')), JSON.parse(fs.readFileSync('./data/themes.json'))];


app.on('ready', () => {
    createWindow(pagesPath + './home/index.html');
});


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow(pagesPath + './home/index.html');
    }
});


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});



ipcMain.on('set-color', (event, lightID, color, brightness) => {
    //let deviceIP = data.find(device => device.id === lightID).ip;
    //yeelight.color(deviceIP, color, brightness);
});

ipcMain.on('set-ct', (event, lightID, temperature, brightness) => {
    yeelight.ct(lightID, temperature, brightness);
});

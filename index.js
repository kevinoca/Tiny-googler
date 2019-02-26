'use strict';

const electron = require('electron');  
const app = electron.app;  
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('window-all-closed', function() {  
  if(process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {  
  mainWindow = new BrowserWindow({width: 1050, height: 600});
  mainWindow.loadURL('https://google.es');

  // mainWindow.on('closed', function() {
  //   mainWindow = null;
  // });
});
const { app, BrowserWindow } = require('electron');
// import app from 'electron';

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        width: 500,
        height: 1000,
        icon: './src/icon.jpeg'
    });

    win.loadFile('index.html');
    
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('LightControl', {
    setColor: (lightID, color, brightness) => ipcRenderer.send('set-color', lightID, color, brightness),
    setCt: (lightID, temperature, brightness) => ipcRenderer.send('set-ct', lightID, temperature, brightness)
});

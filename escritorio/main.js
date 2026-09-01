/* Ventana de escritorio para Rutina RPG.
   Carga la version publicada en GitHub Pages, asi la app de escritorio
   siempre tiene la ultima version sin volver a compilar nada. */
const { app, BrowserWindow, shell } = require('electron');

const URL_APP = 'https://elwaltinyeremi2-blip.github.io/rutina-rpg-waltin/';

function crearVentana() {
  const win = new BrowserWindow({
    width: 520,
    height: 900,
    minWidth: 380,
    backgroundColor: '#0b0d13',
    title: 'Rutina RPG',
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, nodeIntegration: false }
  });

  win.loadURL(URL_APP);

  /* Si un dia no hay internet, avisa en vez de mostrar la pantalla de error fea */
  win.webContents.on('did-fail-load', () => {
    win.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(
      '<body style="background:#0b0d13;color:#eceef4;font-family:system-ui;text-align:center;padding-top:20vh">' +
      '<h2>Sin conexion</h2><p style="color:#8b93a7">Conectate a internet y vuelve a abrir Rutina RPG.</p></body>'
    ));
  });

  /* Los enlaces externos se abren en el navegador, no dentro de la app */
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
}

app.whenReady().then(crearVentana);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) crearVentana(); });

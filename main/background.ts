import path from 'path'
import { app, ipcMain, Menu, MenuItem, BrowserWindow } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'


const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        click: () => {
          //console.log({useDataContext});
        }
      },
      {
        label: 'Exit',
        click: () => {
          // Tindakan yang akan dijalankan saat menu "Exit" dipilih
          app.quit();
        }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        click: () => {
          // Tindakan yang akan dijalankan saat menu "Undo" dipilih
        }
      },
      {
        label: 'Redo',
        click: () => {
          // Tindakan yang akan dijalankan saat menu "Redo" dipilih
        }
      }
    ]
  }
];

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

(async () => {
  await app.whenReady()

  const mainWindow = createWindow('main', {
    width: 1400,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (isProd) {
    await mainWindow.loadURL('app://./overview')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/overview`)
    mainWindow.webContents.openDevTools()
  }
})()

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})

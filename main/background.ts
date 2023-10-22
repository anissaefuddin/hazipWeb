import path from 'path'
import { app, ipcMain, Menu, dialog} from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
import { Check_List_Recommendations, DataGlobal, Drawings, Files, Lopa_Comments, Lopa_Recommendations, Nodes, Overview, Parking_Lot, Pha_Comments, Pha_Recommendations, Revalidation_History, Risk_Criteria, Safeguards, Sessions, Settings, Team_Members, Team_Members_Sessions } from './classModel';
import fs from 'fs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let dataGlobal = <DataGlobal>(
  new DataGlobal(new Overview(),new Settings(),[new Team_Members()], [new Sessions()], [new Team_Members_Sessions()], [new Revalidation_History()], [new Nodes()], [new Safeguards()], 
  [new Pha_Recommendations()],[new Pha_Comments()],[new Lopa_Recommendations()],[new Lopa_Comments()],[new Parking_Lot()], [new Drawings()], new Risk_Criteria(), [new Check_List_Recommendations()], [new Files()])
);
let pathFile = "";
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

 
  const menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
          label: 'Open',
          accelerator: process.platform === 'darwin' ? 'Cmd+O' : 'Ctrl+O',
          click:async () => {
            const { filePaths } = await dialog.showOpenDialog({
              filters: [{ name: 'JSON Files', extensions: ['json'] }],
            });
            if (filePaths && filePaths.length > 0) {
              const filePath = filePaths[0];
              fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) {
                  console.error('Gagal membaca berkas JSON:', err);
                } else {
                  mainWindow.webContents.send('open-json-file', data);
                  pathFile = filePath;
                  dialog.showMessageBox({
                    type: 'info',
                    title: 'Operasi Berhasil',
                    message: ' Data berhasil dibuka!',
                    buttons: ['OK'],
                  }).then((response) => {
                    if (response.response === 0) {
                      console.log('Pengguna menekan tombol OK');
                    }
                  });
                }
              });
            }
          }
        },
        {
          label: 'Save',
          accelerator: process.platform === 'darwin' ? 'Cmd+S' : 'Ctrl+S',
          click: () => {
            if(pathFile==""){
              dialog.showSaveDialog(mainWindow, {
                filters: [{ name: 'JSON Files', extensions: ['json'] }]
              }).then(result => {
                // console.log(result.canceled)
                // console.log(result.filePath)
                pathFile = result.filePath
                mainWindow.webContents.send('save-as-json-file',"a");
                dialog.showMessageBox({
                  type: 'info',
                  title: 'Operasi Berhasil',
                  message: 'Data berhasil disimpan!',
                  buttons: ['OK'],
                }).then((response) => {
                  if (response.response === 0) {
                    console.log('Pengguna menekan tombol OK');
                  }
                });
              }).catch(err => {
                console.log(err)
              })
            }else{
              mainWindow.webContents.send('save-json-file', "a");
              dialog.showMessageBox({
                type: 'info',
                title: 'Operasi Berhasil',
                message: 'Data berhasil disimpan!',
                buttons: ['OK'],
              }).then((response) => {
                if (response.response === 0) {
                  console.log('Pengguna menekan tombol OK');
                }
              });
            }
          },
        },
        {
          label: 'Save as',
          accelerator: process.platform === 'darwin' ? 'Cmd+Shift+I' : 'Ctrl+Shift+S',
          click:() =>{
            dialog.showSaveDialog(mainWindow, {
              filters: [{ name: 'JSON Files', extensions: ['json'] }]
            }).then(result => {
              // console.log(result.canceled)
              // console.log(result.filePath)
              pathFile = result.filePath
              mainWindow.webContents.send('save-as-json-file',"a");
              dialog.showMessageBox({
                type: 'info',
                title: 'Operasi Berhasil',
                message: 'Data berhasil disimpan!',
                buttons: ['OK'],
              }).then((response) => {
                if (response.response === 0) {
                  console.log('Pengguna menekan tombol OK');
                }
              });
            }).catch(err => {
              console.log(err)
            })
          }
        },
        {
          label: 'Exit',
          accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    }
  ]);
  mainWindow.setMenu(menu);
  if (isProd) {
    await mainWindow.loadURL('app://./overview')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/overview`)
    mainWindow.webContents.openDevTools()
    mainWindow.once('ready-to-show', () => {
    });
  }
})()

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('save-data', (event, dataToSave) => {
  fs.writeFileSync(pathFile, dataToSave, 'utf-8');  
});
ipcMain.on('save-data-json', (event, dataToSave) => {
  dataGlobal = dataToSave;
});

ipcMain.on('save-as-data-json', (event, dataToSave) => {
  fs.writeFileSync(pathFile, dataToSave, 'utf-8');
});
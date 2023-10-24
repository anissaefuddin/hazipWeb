import path from 'path'
import { app, ipcMain, Menu, dialog, shell} from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
import log from 'electron-log';
import { Check_List_Recommendations, DataGlobal, Drawings, Files, Lopa_Comments, Lopa_Recommendations, Nodes, Overview, Parking_Lot, Pha_Comments, Pha_Recommendations, Revalidation_History, Risk_Criteria, Safeguards, Sessions, Settings, Team_Members, Team_Members_Sessions } from './classModel';
import initJson from './initialData.json'
import fs from 'fs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let dataGlobal = <DataGlobal>(
  new DataGlobal(new Overview(),new Settings(),[new Team_Members()], [new Sessions()], [new Team_Members_Sessions()], [new Revalidation_History()], [new Nodes()], [new Safeguards()], 
  [new Pha_Recommendations()],[new Pha_Comments()],[new Lopa_Recommendations()],[new Lopa_Comments()],[new Parking_Lot()], [new Drawings()], new Risk_Criteria(), [new Check_List_Recommendations()], [new Files()])
);
let pathFile = "";
let pathFileExport = "";
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
          label: 'New Cases',
          accelerator: process.platform === 'darwin' ? 'Cmd+N' : 'Ctrl+N',
          click: () => {
            dialog.showMessageBox(mainWindow, {
              type: 'question',
              title: 'Confirmation',
              message: 'Are you sure to create new case?',
              buttons: ['Yes', 'No'],
              defaultId: 1, // Ini menentukan tombol default (di sini "No" adalah yang default)
              cancelId: 1, // Ini menentukan tombol yang akan dianggap sebagai "batal" (di sini juga "No")
            })
            .then((response) => {
              if (response.response === 0) {
                mainWindow.webContents.send('open-json-file',JSON.stringify(initJson));
                console.log('Pengguna menekan tombol "Yes"');
                // Lakukan sesuatu jika pengguna menekan "Yes"
              } else {
                console.log('Pengguna menekan tombol "No"');
                // Lakukan sesuatu jika pengguna menekan "No"
              }
            });
          }
        },
        {
          type: 'separator' // Ini adalah garis pemisah
        },
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
                  mainWindow.webContents.send('update-title', pathFile);
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
                console.log(result.canceled)
                // console.log(result.filePath)
                if(!result.canceled){
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
                  mainWindow.webContents.send('update-title', pathFile);
                }
              }).catch(err => {
                console.log(err)
                log.error(err);
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
              mainWindow.webContents.send('update-title', pathFile);
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
              // console.log(result.filePath)
              if(!result.canceled){
                pathFile = result.filePath
                mainWindow.webContents.send('save-as-json-file',pathFile);
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
                mainWindow.webContents.send('update-title', pathFile);
              }
            }).catch(err => {
              console.log(err)
              log.error(err)
            })
          }
        },
        {
          type: 'separator' // Ini adalah garis pemisah
        },
        {
          label: 'Export',
          accelerator: process.platform === 'darwin' ? 'Cmd+E' : 'Ctrl+E',
          click:() =>{
            dialog.showSaveDialog(mainWindow, {
              filters: [{ name: 'JSON Files', extensions: ['json'] }]
            }).then(result => {
              // console.log(result.filePath)
              if(!result.canceled){
                pathFileExport = result.filePath
                mainWindow.webContents.send('export-json-file',pathFile);
                dialog.showMessageBox({
                  type: 'info',
                  title: 'Operasi Berhasil',
                  message: 'File already exported!',
                  buttons: ['OK'],
                }).then((response) => {
                  if (response.response === 0) {
                    console.log('Pengguna menekan tombol OK');
                  }
                });
              }
            }).catch(err => {
              console.log(err)
              log.error(err)
            })
          }
        },
        {
          type: 'separator' // Ini adalah garis pemisah
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
  ipcMain.on('update-title', (event, filePath) => {
    mainWindow.setTitle(`${filePath} - (Lenhazid)`);
  });

  
  ipcMain.on('open-and-save-file', async (event,index) => {
    const { filePaths } = await dialog.showOpenDialog(mainWindow, {
      properties: ['openFile'],
      filters: [{ name: 'All Files', extensions: ['*'] }, { name: 'Text Files', extensions: ['txt', 'text', 'docx', 'pdf'] }],
    });

    if (filePaths && filePaths.length > 0) {
      const sourceFilePath = filePaths[0];
      const fileName = path.basename(sourceFilePath);

      // Menentukan direktori tujuan untuk menyimpan berkas
      const destinationDirectory = app.getPath('userData');
      const destinationFilePath = path.join(destinationDirectory, fileName);

      try {
        // Membaca isi berkas sumber
        const fileContent = fs.readFileSync(sourceFilePath, 'utf-8');
        // Menyimpan isi berkas ke berkas tujuan
        fs.writeFileSync(destinationFilePath, fileContent);
        dialog.showMessageBox({
          type: 'info',
          title: 'Operation success',
          message: ' File already uploaded! in '+ destinationFilePath,
          buttons: ['OK'],
        }).then((response) => {
          if (response.response === 0) {
            console.log('Pengguna menekan tombol OK');
            const combinedString = index.toString() + "__" + destinationFilePath;
            event.reply('file-saved', combinedString);
            mainWindow.webContents.send('save-link',dataGlobal);
          }
        });
      } catch (error) {
        console.error('Gagal membuka atau menyimpan berkas:', error);
        event.reply('file-error', error.message);
      }
      
    }
  });
  
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
ipcMain.on('open-file', async (event,filePath:string) => {
  try {
    fs.readFileSync(filePath);
    shell.openExternal(filePath);
  } catch (err) {
    dialog.showMessageBox({
      type: 'info',
      title: 'Warning',
      message: 'File not found, please reupload the file or re import full files!',
      buttons: ['OK'],
    }).then((response) => {
      if (response.response === 0) {
        console.log('Pengguna menekan tombol OK');
      }
    });
    console.error('File tidak ditemukan');
  }
  
});

ipcMain.on('export-data', (event, dataToSave) => {
  const dataGlobals = <DataGlobal>JSON.parse(dataToSave);
  if(dataGlobals.Drawings!==null){
    console.log(dataGlobals.Drawings)
    dataGlobals.Drawings.map((data) => {
        if(data.Link != ""){
          const pet = data.Link;
          data.Link = convertFileToBase64(pet);
        }
    })
  }
  fs.writeFileSync(pathFileExport, JSON.stringify(dataGlobals), 'utf-8');
});


function convertFileToBase64(filePath) {
  try {
    const fileData = fs.readFileSync(filePath);
    const base64Data = fileData.toString('base64');
    return base64Data;
  } catch (error) {
    console.error('Gagal mengonversi file ke Base64:', error);
    return null;
  }
}
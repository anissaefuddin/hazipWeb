"use client";
import React, {  useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDataGlobal } from "../model/DataGlobalContext";
import { Column_Visibility, Drawings } from "../model/classModel";
import Sidebar from "../components/Sidebar";
import { ButtonExportExcelTeamMember } from "../components/ExportJsonToExcel";
import path from "path";
const Documentss: React.FC = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const [drawings, setDrawings] = useState<Drawings[]>(dataGlobal.Drawings);
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [columnVisibility] = useState<Column_Visibility | null>(
    dataGlobal.Settings.Column_Visibility
  );
  const [showError, setShowError] = useState(false);
  const handleAddRow = () => {
    const newData = new Drawings();
    setDrawings([...drawings, newData]);
    const data = dataGlobal;
    data.Drawings = drawings;
    updateDataGlobal(data);
  };
  const handleCloseError = () => {
    setShowError(false);
  };
  const handleRemoveActiveRow = () => {
    if (activeRow !== null) {
      const updatedDrawings = [...drawings];
      updatedDrawings.splice(activeRow, 1);
      setDrawings(updatedDrawings);
      const data = dataGlobal;
      data.Drawings = updatedDrawings;
      updateDataGlobal(data);
      setActiveRow(null);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };
  const handleActiveRow = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setActiveRow(index);
  };
  const moveUp = () => {
    if (activeRow !== null) {
      if (activeRow > 0) {
        const updatedDrawings = [...drawings];
        const temp = updatedDrawings[activeRow];
        updatedDrawings[activeRow] = updatedDrawings[activeRow - 1];
        updatedDrawings[activeRow - 1] = temp;
        setDrawings(updatedDrawings);
        dataGlobal.Drawings = updatedDrawings;
        setActiveRow(activeRow - 1);
        setShowError(false);
      }
    } else {
      setShowError(true);
    }
  };

  const moveDown = () => {
    if (activeRow !== null) {
      if (activeRow < drawings.length - 1) {
        const updatedDrawings = [...drawings];
        const temp = updatedDrawings[activeRow];
        updatedDrawings[activeRow] = updatedDrawings[activeRow + 1];
        updatedDrawings[activeRow + 1] = temp;
        setDrawings(updatedDrawings);
        dataGlobal.Drawings = drawings;
        setActiveRow(activeRow + 1);
        setShowError(false);
      }
    } else {
      setShowError(true);
    }
  };
  const handleDrawingChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedDrawings = [...drawings];
    if(updatedDrawings[index].ID == "") updatedDrawings[index].ID = uuidv4().toLowerCase().replace(/-/g, '') 
    updatedDrawings[index].Drawing = e.target.value;
    setDrawings(updatedDrawings);
    const dataApa = dataGlobal;
    dataApa.Drawings = drawings;
    updateDataGlobal(dataApa);
  };
  const handleRevisionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedDrawings = [...drawings];
    if(updatedDrawings[index].ID == "") updatedDrawings[index].ID = uuidv4().toLowerCase().replace(/-/g, '') 
    updatedDrawings[index].Revision = e.target.value;
    setDrawings(updatedDrawings);
    const dataApa = dataGlobal;
    dataApa.Drawings = drawings;
    updateDataGlobal(dataApa);
  };
  const handleDocumentTypeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedDrawings = [...drawings];
    if(updatedDrawings[index].ID == "") updatedDrawings[index].ID = uuidv4().toLowerCase().replace(/-/g, '') 
    updatedDrawings[index].Document_Type = e.target.value;
    setDrawings(updatedDrawings);
    const dataApa = dataGlobal;
    dataApa.Drawings = drawings;
    updateDataGlobal(dataApa);
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedDrawings = [...drawings];
    if(updatedDrawings[index].ID == "") updatedDrawings[index].ID = uuidv4().toLowerCase().replace(/-/g, '') 
    updatedDrawings[index].Drawing_Description = e.target.value;
    setDrawings(updatedDrawings);
    const dataApa = dataGlobal;
    dataApa.Drawings = drawings;
    updateDataGlobal(dataApa);
  };
  const handleOpenFile = (index: number) => {
    setActiveRow(index);
    const updatedDrawings = JSON.parse(JSON.stringify(drawings));
    window.ipc.send("open-and-save-file", index);
    window.ipc.on("file-saved",(data: string) => {
      updatedDrawings[index].Link = data;
      updatedDrawings[index].Document_Type = path.extname(data);
      setDrawings(updatedDrawings);
      const dataApa = dataGlobal;
      dataApa.Drawings = updatedDrawings;
      updateDataGlobal(dataApa);
    });
  };
  const handleOpenFileWindow = (filePath: string) => {
    window.ipc.send("open-file", filePath);
  };
  const handleExportFiles = () => {
    window.ipc.send("export-files", drawings);
  };
  const handleImportFiles = () => {
    window.ipc.send("import-files", drawings);
  };
  // useEffect(() => {
    
  // });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="w-1/6">
            <ul className="mt-4 overflow-x-hidden">
              <Sidebar index={0} />
            </ul>
          </div>
          <div className="w-5/6">
            <h3>Documents</h3>
            <button
              className="hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
              onClick={handleAddRow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-circle-fill"
                viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
              </svg>
            </button>
            <button
              className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
              onClick={handleRemoveActiveRow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </button>
            <button
              className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
              onClick={moveUp}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up-square-fill"
                viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
              </svg>
            </button>
            <button
              className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
              onClick={moveDown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down-square-fill"
                viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
              </svg>
            </button>
            <ButtonExportExcelTeamMember
              DataJson={drawings}
              NameFile={"Export_Documents"}
            />
            <button
              className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
              onClick={handleExportFiles} title="Export files into *.zip">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-arrow-up" viewBox="0 0 16 16">
                <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z"/>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
              </svg>
            </button>
            <button
              className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
              onClick={handleImportFiles} title="Import files from *.zip">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
              </svg>
            </button>
            {showError && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert">
                <strong className="font-bold">
                  Tidak ada row yang dipilih!
                </strong>
                <span className="block sm:inline">
                  {" "}
                  Pilih Row terlebih dahulu
                </span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    onClick={handleCloseError}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            )}{" "}
            {/* Pesan error */}
            <table className="table-auto">
              <thead className="bg-slate-300">
                <tr>
                  {columnVisibility?.Drawings_Children.Drawing ? (
                    <td className="border px-4 py-2 font-bold text-center">
                      Drawing
                    </td>
                  ) : null}
                  {columnVisibility?.Drawings_Children.Revision ? (
                    <td className="border px-4 py-2 font-bold text-center">
                      Revision
                    </td>
                  ) : null}
                  {columnVisibility?.Drawings_Children.Document_Type ? (
                    <td className="border px-4 py-2 font-bold text-center">
                      Document Type
                    </td>
                  ) : null}
                  {columnVisibility?.Drawings_Children.Drawing_Description ? (
                    <td className="border px-4 py-2 font-bold text-center">
                      Description
                    </td>
                  ) : null}
                  {columnVisibility?.Drawings_Children.Link ? (
                    <td className="border px-4 py-2 font-bold text-center">
                      File
                    </td>
                  ) : null}
                </tr>
              </thead>
              <tbody>
                {drawings.map((data, index) => (
                  <tr
                    key={data.ID}
                    className={activeRow === index ? "active-row" : ""}>
                    {columnVisibility?.Drawings_Children.Drawing ? (
                      <td className="border">
                        <input
                          type="text"
                          className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                          value={data.Drawing}
                          onChange={(e) => handleDrawingChange(e, index)}
                          onFocus={(e) => handleActiveRow(e, index)}
                        />
                      </td>
                    ) : null}
                    {columnVisibility?.Drawings_Children.Revision ? (
                      <td className="border">
                        <input
                          type="text"
                          className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                          value={data.Revision}
                          onChange={(e) => handleRevisionChange(e, index)}
                          onFocus={(e) => handleActiveRow(e, index)}
                        />
                      </td>
                    ) : null}
                    {columnVisibility?.Drawings_Children.Document_Type ? (
                      <td className="border">
                        <input
                          type="text"
                          className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                          value={data.Document_Type}
                          onChange={(e) => handleDocumentTypeChange(e, index)}
                          onFocus={(e) => handleActiveRow(e, index)}
                        />
                      </td>
                    ) : null}
                    {columnVisibility?.Drawings_Children.Drawing_Description ? (
                      <td className="border">
                        <input
                          type="text"
                          className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                          value={data.Drawing_Description}
                          onChange={(e) => handleDescriptionChange(e, index)}
                          onFocus={(e) => handleActiveRow(e, index)}
                        />
                      </td>
                    ) : null}
                    {columnVisibility?.Drawings_Children.Link ? (
                      <td className="border text-center">
                        {data.Link ? (
                          <>
                            <button
                              title={"Open File " + path.basename(data.Link)}
                              className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
                              onClick={() => handleOpenFileWindow(data.Link)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-folder2"
                                viewBox="0 0 16 16">
                                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                              </svg>
                            </button>
                            <button onClick={() => handleOpenFile(index)} title="Change File">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-pencil-square"
                                viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path
                                  fillRule="evenodd"
                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                />
                              </svg>
                            </button>
                          </>
                        ) : (
                          <button onClick={() => handleOpenFile(index)} title="Upload file">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-upload"
                              viewBox="0 0 16 16">
                              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                            </svg>
                          </button>
                        )}
                      </td>
                    ) : null}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documentss;

"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useDataGlobal } from "../model/DataGlobalContext";
import {
  Column_Visibility,
  Drawings,
  Files,
} from "../model/classModel";
import axios from "axios";
import Sidebar from "../components/Sidebar";
const Documentss: React.FC = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const [drawings, setDrawings] = useState<Drawings[]>(dataGlobal.Drawings);
  const [files, setFiles] = useState<Files[]>(dataGlobal.Files);
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [columnVisibility, setColumnVisibility] =useState<Column_Visibility | null>(dataGlobal.Settings.Column_Visibility);
  const [showError, setShowError] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
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
      const tempID = drawings[activeRow].ID;
      const updatedDrawings = [...drawings];
      updatedDrawings.splice(activeRow, 1);
      setDrawings(updatedDrawings);
      const data  = dataGlobal;
      data.Drawings = updatedDrawings;
      updateDataGlobal(data);
      setActiveRow(null);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };
  const handleActiveRow = (e: React.ChangeEvent<HTMLInputElement>, index: number,) => {
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
  const handleDrawingChange = (e: React.ChangeEvent<HTMLInputElement>,index: number,) => {
    const updatedDrawings = [...drawings];
    updatedDrawings[index].Drawing = e.target.value;
    setDrawings(updatedDrawings);
    const dataApa = dataGlobal;
    dataApa.Drawings = drawings;
    updateDataGlobal(dataApa);
  };
  const handleRevisionChange = (e: React.ChangeEvent<HTMLInputElement>,index: number,) => {
    const updatedDrawings = [...drawings];
    updatedDrawings[index].Revision = e.target.value;
    setDrawings(updatedDrawings);
    const dataApa = dataGlobal;
    dataApa.Drawings = drawings;
    updateDataGlobal(dataApa);
  };
  const handleDocumentTypeChange = (e: React.ChangeEvent<HTMLInputElement>,index: number,) => {
    const updatedDrawings = [...drawings];
    updatedDrawings[index].Document_Type = e.target.value;
    setDrawings(updatedDrawings);
    const dataApa = dataGlobal;
    dataApa.Drawings = drawings;
    updateDataGlobal(dataApa);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>,index: number,) => {
    const updatedDrawings = [...drawings];
    updatedDrawings[index].Drawing_Description = e.target.value;
    setDrawings(updatedDrawings);
    const dataApa = dataGlobal;
    dataApa.Drawings = drawings;
    updateDataGlobal(dataApa);
  };
  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>,index: number,) => {
    const updatedDrawings = [...drawings];
    updatedDrawings[index].Link = e.target.value;
    setDrawings(updatedDrawings);
    const dataApa = dataGlobal;
    dataApa.Drawings = drawings;
    updateDataGlobal(dataApa);
  };
  
  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>,index:number) => {
    if (!e.target || !e.target.files || e.target.files.length === 0) {
      return;
    }else{
      setSelectedFile(e.target.files[0]);
      handleUpload(index);
    }
    
  };
  const handleUpload = async (index:number) => {
    if (!selectedFile) {
      alert('Pilih file terlebih dahulu');
      return;
    }
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post(
        'https://api.imgbb.com/1/upload?key=cbb6357a9f0e40f62420e8c63d89edad',
        formData
      );
      const data= response.data.data;
      const fileTemp = new Files(data.id,data.display_url,data.expiration,data.height,data.width,data.delete_url,data.image,data.size,data.thumb,data.time,data.title,data.url,data.url_viewer);
      const updatedDrawings = [...drawings];
      updatedDrawings[index].Link = fileTemp.id;
      
      setDrawings(updatedDrawings);
      setFiles([...files,fileTemp]);
      const dataApa = dataGlobal;
      dataApa.Drawings = drawings;
      dataApa.Files = files;
      updateDataGlobal(dataApa);
    } catch (error) {
      console.error('Error:', error);
      // Handle error here
    }
  };
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
              <button className="hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={handleAddRow}>
                <svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
              </button>
              <button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={handleRemoveActiveRow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-trash-fill"viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
              <button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"onClick={moveUp}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                  <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                </svg>
              </button>
              <button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={moveDown}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
              {showError && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert" >
                  <strong className="font-bold">
                    Tidak ada row yang dipilih!
                  </strong>
                  <span className="block sm:inline">
                    {" "}
                    Pilih Row terlebih dahulu
                  </span>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg className="fill-current h-6 w-6 text-red-500" role="button" onClick={handleCloseError} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
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
                    {columnVisibility?.Drawings_Children.Drawing ? (<td className="border px-4 py-2">Drawing</td>) : null}
                    {columnVisibility?.Drawings_Children.Revision ? (<td className="border px-4 py-2">Revision</td> ): null}
                    {columnVisibility?.Drawings_Children.Document_Type ? (<td className="border px-4 py-2">Document Type</td> ): null}
                    {columnVisibility?.Drawings_Children.Drawing_Description ? (<td className="border px-4 py-2">Description</td> ): null}
                    {columnVisibility?.Drawings_Children.Link ? (<td className="border px-4 py-2">Link</td> ): null}
                  </tr>
                </thead>
                <tbody>
                  {drawings.map((data, index) => (
                    <tr key={data.ID} className={activeRow === index ? "active-row" : ""}>
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
                      ): null}
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
                      ): null}
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
                      ): null}
                      {columnVisibility?.Drawings_Children.Link ? (
                      <td className="border">
                        <input type="file" onChange={(e) => handleFileChange(e, index)} />
                        <a href={'https://ibb.co/'+data.Link}>{data.Link}</a>
                      </td>
                      ): null}
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

'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import PageHeader from "@/partials/PageHeader";
import { v4 as uuidv4 } from 'uuid';
import { useDataGlobal } from '../../model/DataGlobalContext';
import { Sessions,Team_Members, Nodes } from '@/model/classModel';
const NodesPage: React.FC  = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const initialSessions: Sessions[] = dataGlobal.Sessions;
  const initialNodes: Nodes[] = dataGlobal.Nodes;
  const [sessions, setSessions] = useState<Sessions[]>(initialSessions);
  const [nodes, setNodes] = useState<Nodes[]>(initialNodes);
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [showError, setShowError] = useState(false);
  const handleAddRow = () => {
    const newNodes = { ID: uuidv4(),Session_IDs:[],Drawing_IDs:[], Deviations:[]};
    setNodes([...nodes, newNodes]);
    const data = dataGlobal;
    data.Nodes = nodes;
    updateDataGlobal(data);
    
  };
  const handleCloseError = () => {
    setShowError(false)
  };
  const handleRemoveActiveRow = () => {
    if (activeRow !== null) {
      const updatedNodes = [...nodes];
      updatedNodes.splice(activeRow, 1);
      setNodes(updatedNodes);
      const data = dataGlobal;
    data.Nodes = nodes;
    updateDataGlobal(data);
      setActiveRow(null);
      setShowError(false);
    }else{
      setShowError(true);
    }
  };
  const handleActiveRow = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
   setActiveRow(index)
  };
  const moveUp = () => {
    if (activeRow !== null) {
      if(activeRow>0){
      const updatedNodes = [...nodes];
      const temp = updatedNodes[activeRow];
      updatedNodes[activeRow] =updatedNodes[activeRow-1];
      updatedNodes[activeRow-1]= temp;
      setNodes(updatedNodes);
      dataGlobal.Nodes = nodes;
      setActiveRow(activeRow-1);
      setShowError(false);
      }
    }else{
      setShowError(true);
    }
  };

  const moveDown = () => {
    if (activeRow !== null) {
      if(activeRow< nodes.length - 1){
      const updatedNodes = [...nodes];
      const temp = updatedNodes[activeRow];
      updatedNodes[activeRow] =updatedNodes[activeRow+1];
      updatedNodes[activeRow+1]= temp;
      setNodes(updatedNodes);
      dataGlobal.Nodes = nodes;
      setActiveRow(activeRow+1);
      setShowError(false);
      }
    }else{
      setShowError(true);
    }
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedNodes = [...nodes];
    updatedNodes[index].Node_Description = e.target.value;
    setNodes(updatedNodes);
      const data = dataGlobal;
    data.Nodes = nodes;
    updateDataGlobal(data);
  };
  const handleIntetionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedNodes = [...nodes];
    updatedNodes[index].Intention = e.target.value;
    setNodes(updatedNodes);
    const data = dataGlobal;
  data.Nodes = nodes;
  updateDataGlobal(data);
  };
  const handleBoundaryChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedNodes = [...nodes];
    updatedNodes[index].Boundary = e.target.value;
    setNodes(updatedNodes);
    const data = dataGlobal;
  data.Nodes = nodes;
  updateDataGlobal(data);
  };
  const handleDesignConditionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedNodes = [...nodes];
    updatedNodes[index].Design_Conditions = e.target.value;
    setNodes(updatedNodes);
    const data = dataGlobal;
  data.Nodes = nodes;
  updateDataGlobal(data);
  };
  const handleOperatingConditionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedNodes = [...nodes];
    updatedNodes[index].Operating_Conditions = e.target.value;
    setNodes(updatedNodes);
    const data = dataGlobal;
  data.Nodes = nodes;
  updateDataGlobal(data);
  };
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedNodes = [...nodes];
    updatedNodes[index].Node_Color = e.target.value;
    setNodes(updatedNodes);
    const data = dataGlobal;
  data.Nodes = nodes;
  updateDataGlobal(data);
  };
  const handleSessionChange = (newValue:string, index: number) => {
    const updatedNodes = [...nodes];
    updatedNodes[index].Session_IDs = [{ "ID" : newValue }];
    setNodes(updatedNodes);
    const data = dataGlobal;  
    data.Nodes = nodes;
    updateDataGlobal(data);
  };
  const handleDrawingChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedNodes = [...nodes];
    updatedNodes[index].Drawing_IDs = [{ "ID" : e.target.value }];
    setNodes(updatedNodes);
    const data = dataGlobal;
    data.Nodes = nodes;
    updateDataGlobal(data);
  };
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedNodes = [...nodes];
    updatedNodes[index].Node_Comments = e.target.value;
    setNodes(updatedNodes);
    const data = dataGlobal;
    data.Nodes = nodes;
    updateDataGlobal(data);
  };
  return (
    <>
    <PageHeader title="Hazard Type" />
      <section className="section-sm">
        <div className="container">
        <div className="row">

      <h1>Hazard Type</h1>
      <div>
      <button className="hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={handleAddRow}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/></svg></button>
      <button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={handleRemoveActiveRow}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg></button>
      <button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={moveUp}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16"><path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/></svg></button>
      <button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={moveDown}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/></svg></button>
      </div>
      {showError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold">Tidak ada row yang dipilih!</strong>
  <span className="block sm:inline"> Pilih Row terlebih dahulu</span>
  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg className="fill-current h-6 w-6 text-red-500" role="button" onClick={handleCloseError}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>} {/* Pesan error */}
      <table className='table-auto'>
        <thead className='bg-slate-300'>
          <tr>
            <td className="border px-4 py-2" colSpan={2}>Description</td>
            <td className="border px-4 py-2">Intention</td>
            <td className="border px-4 py-2">Boundery</td>
            <td className="border px-4 py-2">Design Condition</td>
            <td className="border px-4 py-2">Operating Condition</td>
            <td className="border px-4 py-2">Color</td>
            <td className="border px-4 py-2">Session</td>
            <td className="border px-4 py-2">Drawing</td>
            <td className="border px-4 py-2">Comments</td>
          </tr>
        </thead>
        <tbody>
          {nodes.map((data,index) => (
           <tr key={data.ID} className={activeRow === index ? 'active-row' : ''}>
            <td className='border-t border-b border-l'>{index+1}</td>
              <td className='border-t border-b border-r'>
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={data.Node_Description} onChange={(e) => handleDescriptionChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={data.Intention} onChange={(e) => handleIntetionChange(e, index)} onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={data.Boundary} onChange={(e) => handleBoundaryChange(e, index)} onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={data.Design_Conditions} onChange={(e) => handleDesignConditionChange(e, index)} onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={data.Operating_Conditions} onChange={(e) => handleOperatingConditionChange(e, index)} onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={data.Node_Color} onChange={(e) => handleColorChange(e, index)} onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border">
              <select className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none'
                  //value={data.Session_IDs[0]? : ''}
                  onChange={(e) => handleSessionChange(e.target.value,index)} >
                  {sessions.map((session) => (
                    <option key={session.ID} value={session.ID}>{session.Session}</option>))}
                  </select>
              </td>
              <td className="border">
              
              </td>
              <td className="border">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={data.Node_Comments} onChange={(e) => handleCommentChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
                
              </td>
           </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
</section>
    </>
  );
};

export default NodesPage;


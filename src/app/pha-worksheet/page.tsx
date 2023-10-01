'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import PageHeader from "@/partials/PageHeader";
import { v4 as uuidv4 } from 'uuid';
import { useDataGlobal } from '../../model/DataGlobalContext';
import { Pha_Recommendations,Nodes, Deviations, Causes, Consequences, Safeguard_IDs } from '@/model/classModel';
import Link from 'next/link';

const PhaWerksheet: React.FC  = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const [nodes, setNode] = useState<Nodes[]>(dataGlobal.Nodes);
  const [lopas, setLopa] = useState<Pha_Recommendations[]>(dataGlobal.Pha_Recommendations);
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [idDeviation, setIdDeviation] = useState<string | "">("");
  const [idCause, setIdCause] = useState<string | "">("");
  const [idConcequence, setIdConcequence] = useState<string | "">("");
  const [indexNode, setIndexNode] = useState<number|null>(null);
  const [indexDeviation, setIndexDeviation] = useState<number|null>(null);
  const [indexCause, setIndexCause] = useState<number|null>(null);
  const [indexConcequence, setIndexConcequence] = useState<number|null>(null);
  const [activeRowSelected, setActiveRowSelected ]= useState<string | "">("");
  const [showError, setShowError] = useState(false);
  const handleAddRow = () => {
    if(activeRowSelected != ""){
        if(activeRowSelected =="node" && activeRow != null){
            const newNodes = new Nodes();
            newNodes.Deviations = [new Deviations()];
            const updatedNodes = [...nodes];
            updatedNodes.splice(activeRow + 1, 0, newNodes);
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes = updatedNodes;
            updateDataGlobal(data);            
        }else if(activeRowSelected =="deviation" && indexDeviation != null && indexNode != null){
            const newData = new Deviations();
            const updatedDeviation = [...nodes[indexNode].Deviations];
            const updatedNodes = [...nodes];
            updatedDeviation.splice(indexDeviation + 1, 0, newData);
            updatedNodes[indexNode].Deviations = updatedDeviation;
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes[indexNode].Deviations = updatedDeviation;
            updateDataGlobal(data);            
        }else if(activeRowSelected =="cause" && indexDeviation != null && indexNode != null && indexCause != null){
            const newData = new Causes();
            const updatedCause = [...nodes[indexNode].Deviations[indexDeviation].Causes];
            const updatedNodes = [...nodes];
            updatedCause.splice(indexDeviation + 1, 0, newData);
            updatedNodes[indexNode].Deviations[indexDeviation].Causes = updatedCause;
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes[indexNode].Deviations[indexDeviation].Causes = updatedCause;
            updateDataGlobal(data);            
        }else if(activeRowSelected =="consequence" && indexDeviation != null && indexNode != null && indexCause != null && indexConcequence != null){
            const newData = new Consequences();
            const updatedConsequence = [...nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences];
            const updatedNodes = [...nodes];
            updatedConsequence.splice(indexConcequence + 1, 0, newData);
            updatedNodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences = updatedConsequence;
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences = updatedConsequence;
            updateDataGlobal(data);            
        }else{
            setShowError(true);
        }
    }else{
        setShowError(true);
    }
  };
  const handleCloseError = () => {
    setShowError(false)
  };
  const handleRemoveActiveRow = () => {
    if (activeRowSelected != "") {
        if(activeRowSelected =="node" && activeRow != null){
            const updatedNodes = [...nodes];
            updatedNodes.splice(activeRow, 1);
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes = updatedNodes;
            updateDataGlobal(data);  
            setActiveRow(null);
            setShowError(false);          
        }else if(activeRowSelected =="deviation" && indexDeviation != null && indexNode != null){
            const updatedDeviation = [...nodes[indexNode].Deviations];
            const updatedNodes = [...nodes];
            updatedDeviation.splice(indexDeviation, 1);
            updatedNodes[indexNode].Deviations = updatedDeviation;
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes[indexNode].Deviations = updatedDeviation;
            updateDataGlobal(data);  
            setActiveRow(null);
            setShowError(false);          
        }else if(activeRowSelected =="cause" && indexDeviation != null && indexNode != null && indexCause != null){
            const updatedCause = [...nodes[indexNode].Deviations[indexDeviation].Causes];
            const updatedNodes = [...nodes];
            updatedCause.splice(indexCause, 1);
            updatedNodes[indexNode].Deviations[indexDeviation].Causes = updatedCause;
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes[indexNode].Deviations[indexDeviation].Causes = updatedCause;
            updateDataGlobal(data);  
            setActiveRow(null);
            setShowError(false);          
        }else if(activeRowSelected =="consequence" && indexDeviation != null && indexNode != null && indexCause != null && indexConcequence != null){
            const updatedConcequence = [...nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences];
            const updatedNodes = [...nodes];
            updatedConcequence.splice(indexConcequence, 1);
            updatedNodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences = updatedConcequence;
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes = updatedNodes;
            updateDataGlobal(data);  
            setActiveRow(null);
            setShowError(false);          
        }
    }else{
      setShowError(true);
    }
  };
  const handleActiveRowNode = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
   setActiveRow(index);
   setIndexNode(index);
   setActiveRowSelected("node");
  };
  const handleActiveRowDeviation = (e: React.ChangeEvent<HTMLInputElement>, id: string,  indexDeviation:number,indexNode:number) => {
    setActiveRow(null);
    setIdDeviation(id);
    setIdCause("");
    setIdConcequence("");
    setIndexDeviation(indexDeviation);
    setIndexNode(indexNode);
    setActiveRowSelected("deviation");
   };
   const handleActiveRowCause = (e: React.ChangeEvent<HTMLInputElement>, id: string,  indexDeviation:number,indexNode:number, indexCause:number) => {
    setActiveRow(null);
    setIdDeviation("");
    setIdCause(id);
    setIdConcequence("");
    setIndexNode(indexNode);
    setIndexDeviation(indexDeviation);
    setIndexCause(indexCause);
    setActiveRowSelected("cause");
   };
   const handleActiveRowConsequence = (e: React.ChangeEvent<HTMLInputElement>, id: string,indexNode:number,  indexDeviation:number, indexCause:number, indexConcequence:number) => {
    console.log(idConcequence)
    setActiveRow(null);
    setIdDeviation("");
    setIdCause("");
    setIdConcequence(id);
    setIndexNode(indexNode);
    setIndexDeviation(indexDeviation);
    setIndexCause(indexCause);
    setIndexConcequence(indexConcequence);
    setActiveRowSelected("consequence");
    console.log(idConcequence)

   };

  const moveUp = () => {
    if (activeRowSelected != "") {
        if(activeRowSelected =="node" && (indexNode !==null && indexNode>0)){
            const updatedNodes = [...nodes];
            const temp = updatedNodes[indexNode];
            updatedNodes[indexNode] =updatedNodes[indexNode-1];
            updatedNodes[indexNode-1]= temp;
            setNode(updatedNodes);
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setActiveRow(indexNode-1);
            setIndexNode(indexNode-1);
            setShowError(false);
        }else if(activeRowSelected =="deviation"  && indexDeviation != null && indexNode != null && indexDeviation>0){
            const updatedDeviations = [...nodes[indexNode].Deviations];
            const temp = updatedDeviations[indexDeviation];
            updatedDeviations[indexDeviation] =updatedDeviations[indexDeviation-1];
            updatedDeviations[indexDeviation-1]= temp;
            const updatedNodes = [...nodes];
            updatedNodes[indexNode].Deviations = updatedDeviations;
            setNode(updatedNodes);
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setIndexDeviation(indexDeviation-1);
            setShowError(false);
        }else if(activeRowSelected =="cause"  && indexDeviation != null && indexNode != null && indexCause!== null && indexCause>0){
            const updatedCause = [...nodes[indexNode].Deviations[indexDeviation].Causes];
            const temp = updatedCause[indexCause];
            updatedCause[indexCause] =updatedCause[indexCause-1];
            updatedCause[indexCause-1]= temp;
            const updatedNodes = [...nodes];
            updatedNodes[indexNode].Deviations[indexDeviation].Causes = updatedCause;
            setNode(updatedNodes);
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setIndexCause(indexCause-1);
            setShowError(false);
        }else if(activeRowSelected =="consequence"  && indexDeviation != null && indexNode != null && indexCause!== null && indexConcequence !== null && indexConcequence>0){
            const updatedConcequence = [...nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences];
            const temp = updatedConcequence[indexDeviation];
            updatedConcequence[indexConcequence] =updatedConcequence[indexConcequence-1];
            updatedConcequence[indexConcequence-1]= temp;
            const updatedNodes = [...nodes];
            updatedNodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences = updatedConcequence;
            setNode(updatedNodes);
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setIndexConcequence(indexConcequence-1);
            setShowError(false);
        }else{
            console.log("error")
        }
    }else{
      setShowError(true);
    }
  };

  const moveDown = () => {
    if (activeRowSelected != "") {
        if(activeRowSelected =="node" && (indexNode !==null && indexNode< nodes.length - 1)){
            const updatedNodes = [...nodes];
            const temp = updatedNodes[indexNode];
            updatedNodes[indexNode] =updatedNodes[indexNode+1];
            updatedNodes[indexNode+1]= temp;
            setNode(updatedNodes);
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setActiveRow(indexNode+1);
            setIndexNode(indexNode+1);
            setShowError(false);
        }else if(activeRowSelected =="deviation"  && indexDeviation != null && indexNode != null && indexDeviation<nodes[indexNode].Deviations.length -1){
            const updatedDeviations = [...nodes[indexNode].Deviations];
            const temp = updatedDeviations[indexDeviation];
            updatedDeviations[indexDeviation] =updatedDeviations[indexDeviation+1];
            updatedDeviations[indexDeviation+1]= temp;
            const updatedNodes = [...nodes];
            updatedNodes[indexNode].Deviations = updatedDeviations;
            setNode(updatedNodes);            
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setIndexDeviation(indexDeviation+1);
            setShowError(false);
        }else if(activeRowSelected =="cause"  && indexDeviation != null && indexNode != null && indexCause!== null && indexCause< nodes[indexNode].Deviations[indexDeviation].Causes.length-1){
            const updatedCause = [...nodes[indexNode].Deviations[indexDeviation].Causes];
            const temp = updatedCause[indexCause];
            updatedCause[indexCause] =updatedCause[indexCause+1];
            updatedCause[indexCause+1]= temp;
            const updatedNodes = [...nodes];
            updatedNodes[indexNode].Deviations[indexDeviation].Causes = updatedCause;
            setNode(updatedNodes);            
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setIndexCause(indexCause+1);
            setShowError(false);
        }else if(activeRowSelected =="consequence"  && indexDeviation != null && indexNode != null && indexCause!== null && indexConcequence !== null && indexConcequence< nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences.length-1){
            const updatedConcequence = [...nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences];
            const temp = updatedConcequence[indexDeviation];
            updatedConcequence[indexConcequence] =updatedConcequence[indexConcequence+1];
            updatedConcequence[indexConcequence+1]= temp;
            const updatedNodes = [...nodes];
            updatedNodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences = updatedConcequence;
            setNode(updatedNodes);
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setIndexConcequence(indexConcequence+1);
            setShowError(false);
        }else{
            console.log("error")
        }
    }else{
      setShowError(true);
    }
  };
  const handleNodesChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedData = [...nodes];
    updatedData[index].Node_Description = e.target.value;
    setNode(updatedData);
    const dataApa = dataGlobal;
    dataApa.Nodes = nodes;
    updateDataGlobal(dataApa);
  };
  const handleDeviationChange = (e: React.ChangeEvent<HTMLInputElement>, nodeIndex: number, indexDeviation: number) => {
    const deviation = nodes[nodeIndex].Deviations;
    if (deviation !== undefined) {
        const updatedDeviation = [...deviation];
        const updatedNodes = [...nodes];
        updatedDeviation[indexDeviation].Deviation = e.target.value;
        updatedNodes[nodeIndex].Deviations = updatedDeviation;
        setNode(updatedNodes);
        const datas = dataGlobal;
        datas.Nodes = updatedNodes;
        updateDataGlobal(datas);
    }
  };
  const handleGuideWordChange = (e: React.ChangeEvent<HTMLInputElement>, nodeIndex: number, indexDeviation: number) => {
    const deviation = nodes[nodeIndex].Deviations;
    if (deviation !== undefined) {
        const updatedDeviation = [...deviation];
        const updatedNodes = [...nodes];
        updatedDeviation[indexDeviation].Guide_Word = e.target.value;
        updatedNodes[nodeIndex].Deviations = updatedDeviation;
        setNode(updatedNodes);
        const datas = dataGlobal;
        datas.Nodes = updatedNodes;
        updateDataGlobal(datas);
    }
  };
  const handleCauseChange = (e: React.ChangeEvent<HTMLInputElement>, nodeIndex: number, indexDeviation: number, indexCause: number) => {
    const cause = nodes[nodeIndex].Deviations[indexDeviation].Causes;
    if (cause !== undefined) {
        const updatedCause = [...cause];
        const updatedNodes = [...nodes];
        updatedCause[indexCause].Cause = e.target.value;
        updatedNodes[nodeIndex].Deviations[indexDeviation].Causes = updatedCause;
        setNode(updatedNodes);
        const datas = dataGlobal;
        datas.Nodes = updatedNodes;
        updateDataGlobal(datas);
    }
  };
  const handleConcequenceChange = (e: React.ChangeEvent<HTMLInputElement>, nodeIndex: number, indexDeviation: number, indexCause: number, indexConsequence:number) => {
    const consequence = nodes[nodeIndex].Deviations[indexDeviation].Causes[indexCause].Consequences;
    if (consequence !== undefined) {
        const updatedConsequence = [...consequence];
        const updatedNodes = [...nodes];
        updatedConsequence[indexConsequence].Consequence = e.target.value;
        updatedNodes[nodeIndex].Deviations[indexDeviation].Causes[indexCause].Consequences = updatedConsequence;
        setNode(updatedNodes);
        const datas = dataGlobal;
        datas.Nodes = updatedNodes;
        updateDataGlobal(datas);
    }
  };
  
  console.log(dataGlobal)
  return (
    <>
    <PageHeader title="PHA Worksheet" />
      <section className="section-sm">
        <div className="container">
        <div className="row">
      <h1>PHA Worksheet</h1>
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
<div className="table-wrp block min-h-96 overflow-x-auto">
      <table className='w-full'>
        <thead className='bg-slate-300 sticky top-0'>
          <tr >
            <td className="border px-4 py-2 text-center text-sm">Hazard Type</td>
            <td className="border px-4 py-2 text-center text-sm">GUIDE WORD CATEGORY</td>
            <td className="border px-4 py-2 text-center text-sm">GUIDE WORD</td>
            <td className="border px-4 py-2 text-center text-sm">POSSIBLE HAZARD</td>
            <td className="border px-4 py-2 text-center text-sm">CONCEQUENCES</td>
            <td className="border px-4 py-2 text-center text-sm">SAFEGUARDS</td>
            <td className="border px-4 py-2 text-center text-sm">CONCEQUENCES CATEGORY</td>
            <td className="border px-4 py-2 text-center text-sm">SAVERITY</td>
            
          </tr>
        </thead>
        <tbody>
          {nodes.map((node,indexNode) => (
           <tr key={node.ID}  align-top> 
           {/* Hazard Type */}
              <td className={'border-t border-b border-r  align-top '+ (activeRow === indexNode  ? 'active-row' : '')}>
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm' 
                value={node.Node_Description} onChange={(e) => handleNodesChange(e, indexNode)}  onFocus={(e) => handleActiveRowNode(e,indexNode)}/>
              </td>
              {/* GUIDE WORD CATEGORY */}
              <td className='p-0 align-top'>
                <table className='w-full'>
                {node.Deviations.map((deviation,indexDeviation) => (
                    <tr key={deviation.ID} className={idDeviation === deviation.ID  ? 'active-row' : ''}>
                        <td className={'border  align-top'} height={deviation.Causes.length * 36.500}>
                        <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm' 
                        value={deviation.Deviation} onChange={(e) => handleDeviationChange(e,indexNode, indexDeviation)} onFocus={(e) => handleActiveRowDeviation(e,deviation.ID, indexDeviation,indexNode)}  />
                        </td>
                    </tr>
                ))}
                </table>
              </td>
              {/* GUIDE WORD */}
              <td className='p-0 align-top'>
                <table className='w-full h-full'>
                {node.Deviations.map((deviation,indexDeviation) => (
                    <tr key={deviation.ID} className={idDeviation === deviation.ID  ? 'active-row' : ''}>
                        <td className={'border-t border-b border-l  align-top '} height={deviation.Causes.length * 36.500}>{indexDeviation+1}</td>
                        <td className={'border-t border-b border-r  align-top '} height={deviation.Causes.length * 36.500}>
                        <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm' 
                        value={deviation.Guide_Word} onChange={(e) => handleGuideWordChange(e,indexNode, indexDeviation)} onFocus={(e) => handleActiveRowDeviation(e,deviation.ID, indexDeviation,indexNode)}  />
                        </td>
                    </tr>
                ))}
                </table>
              </td>
              {/* POSSIBLE HAZARD */}
              <td className='p-0 align-top'>
              {node.Deviations.map((deviation,indexDeviation) => (
              <table className='w-full' key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                    <tr  key={cause.ID} className={idCause === cause.ID  ? 'active-row' : ''}>
                    <td className={'border-t border-b border-l align-top'} height={cause.Consequences.length * 36.500}>{indexDeviation+1}.{indexCause+1}</td>
                   <td className={'border-t border-b border-r align-top'} height={cause.Consequences.length * 36.500}> 
                   <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm' 
                   value={cause.Cause} onChange={(e) => handleCauseChange(e, indexNode, indexDeviation, indexCause)} 
                   onFocus={(e) => handleActiveRowCause(e,cause.ID, indexDeviation,indexNode,indexCause)}  />
                   </td>
               </tr>
                 ))}
                </table>
                ))}
              </td>
              {/* CONCEQUENCES */}
            <td className='p-0 align-top'>
            {node.Deviations.map((deviation,indexDeviation) => (
              <table className='w-full' key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                    <React.Fragment  key={cause.ID}>
                        {cause.Consequences.map((concequence,indexConsequence)=>(
                            <tr key={concequence.ID} className={idConcequence === concequence.ID  ? 'active-row' : ''}>
                            <td className={'border-t border-b border-l '}>{indexDeviation+1}.{indexCause+1}.{indexConsequence+1}</td>
                           <td className={'border-t border-b border-r'} id={concequence.ID}> 
                           <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm' 
                           value={concequence.Consequence} onChange={(e) => handleConcequenceChange(e, indexNode, indexDeviation, indexCause,indexConsequence)} 
                           onFocus={(e) => handleActiveRowConsequence(e,cause.ID,indexNode, indexDeviation,indexCause,indexConsequence)}  />
                           </td>
                       </tr>
                        ))}
               </React.Fragment>
                 ))}
                </table>
                ))}
            </td>
            {/* CONCEQUENCES CATEGORY */}
            <td className='p-0 align-top'>
            <select className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none'
                   >
                    <option value=""></option>
                    <option value="Safety">Safety</option>
                    <option value="Asset">Asset</option>
                    <option value="Environmental">Environmental</option>
                    <option value="Community">Community</option>
                    <option value="Reputation">Reputation</option>
                  </select>
            </td>
            {/* SAVERITY */}
            <td className='p-0 align-top'></td>
            </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default PhaWerksheet;


function renderSafeguardIDs(safeguardIDs : Safeguard_IDs[]) {
    if (safeguardIDs.length === 0) {
      return (
        <td rowSpan={1} className="border px-4 py-2 text-center text-sm">
          No Safeguard IDs
        </td>
      );
    }
  
    return (
      <td rowSpan={safeguardIDs.length} className="border px-4 py-2 text-center text-sm">
        {safeguardIDs[0].ID}
      </td>
    );
  }
  
  function renderConsequences(consequences : Consequences[]) {
    return consequences.map((consequence, index) => (
      <tr key={consequence.ID}>
        {index === 0 ? (
          <>
            <td rowSpan={consequences.length} className="border px-4 py-2 text-center text-sm">
              {consequence.Consequence}
            </td>
            {renderSafeguardIDs(consequence.Safeguard_IDs)}
          </>
        ) : (
          <>
            {renderSafeguardIDs(consequence.Safeguard_IDs)}
          </>
        )}
      </tr>
    ));
  }
  
  function renderCauses(causes : Causes[]) {
    return causes.map((cause) => (
      <tr key={cause.ID}>
        <td className="border px-4 py-2 text-center text-sm">
          {cause.Cause}
        </td>
        <td className="border px-4 py-2 text-center text-sm">
          {cause.Cause_Type}
        </td>
        {renderConsequences(cause.Consequences)}
      </tr>
    ));
  }
  
  function renderDeviations(deviations : Deviations[]) {
    return deviations.map((deviation) => (
      <tr key={deviation.ID}>
        <td className="border px-4 py-2 text-center text-sm">
          {deviation.Deviation}
        </td>
        <td className="border px-4 py-2 text-center text-sm">
          {deviation.Guide_Word}
        </td>
        <td className="border px-4 py-2 text-center text-sm">
          {deviation.Parameter}
        </td>
        <td className="border px-4 py-2 text-center text-sm">
          {deviation.Design_Intent}
        </td>
        <td className="border px-4 py-2 text-center text-sm">
          {deviation.Deviation_Comments}
        </td>
        {renderCauses(deviation.Causes)}
      </tr>
    ));
  }
  
  function renderData(data : Nodes[]) {
    return data.map((item: Nodes) => (
      <table key={item.ID} className="w-full">
        <thead className="bg-slate-300 sticky top-0">
          <tr>
            <td className="border px-4 py-2 text-center text-sm">Deviation</td>
            <td className="border px-4 py-2 text-center text-sm">Guide Word</td>
            <td className="border px-4 py-2 text-center text-sm">Parameter</td>
            <td className="border px-4 py-2 text-center text-sm">Design Intent</td>
            <td className="border px-4 py-2 text-center text-sm">Deviation Comments</td>
            <td className="border px-4 py-2 text-center text-sm">Cause</td>
            <td className="border px-4 py-2 text-center text-sm">Cause Type</td>
            <td className="border px-4 py-2 text-center text-sm">Consequence</td>
            <td className="border px-4 py-2 text-center text-sm">Safeguard IDs</td>
          </tr>
        </thead>
        <tbody>
          {renderDeviations(item.Deviations)}
        </tbody>
      </table>
    ));
  }
